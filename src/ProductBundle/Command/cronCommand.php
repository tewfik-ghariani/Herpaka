<?php

namespace ProductBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\StringInput;

class cronCommand extends ContainerAwareCommand
{
    private $output;

    protected function configure()
    {
        $this
            ->setName('crontasks:run')
            ->setDescription('Runs Cron Tasks if needed')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('<comment>Running Cron Tasks...</comment>');

        $this->output = $output;
        $dm = $this->get('doctrine_mongodb')->getManager();
        $crontasks = $dm->getRepository('ProductBundle:CronTask')->findAll();

        foreach ($crontasks as $crontask) {
            // Get the last run time of this task, and calculate when it should run next
            $lastrun = $crontask->getLastRun() ? $crontask->getLastRun()->format('U') : 0;
            $nextrun = $lastrun + $crontask->getInterval();

            // We must run this task if:
            // * time() is larger or equal to $nextrun
            $run = (time() >= $nextrun);

            if ($run) {
                $output->writeln(sprintf('Running Cron Task <info>%s</info>', $crontask));

                // Set $lastrun for this crontask
                $crontask->setLastRun(new \DateTime());

                try {
                    $commands = $crontask->getCommands();
              
                        $output->writeln(sprintf('Executing command <comment>%s</comment>...', $commands));

                        // Run the command
                        $this->runCommand($commands);
                   

                    $output->writeln('<info>SUCCESS</info>');
                } catch (\Exception $e) {
                    $output->writeln('<error>ERROR</error>');
                }

                // Persist crontask
                $dm->persist($crontask);
            } else {
                $output->writeln(sprintf('Skipping Cron Task <info>%s</info>', $crontask));
            }
        }

        // Flush database changes
        $dm->flush();

        $output->writeln('<comment>Done!</comment>');
    }

    private function runCommand($string)
    {
        // Split namespace and arguments
        $namespace = split(' ', $string)[0];

        // Set input
        $command = $this->getApplication()->find($namespace);
        $input = new StringInput($string);

        // Send all output to the console
        $returnCode = $command->run($input, $this->output);

        return $returnCode != 0;
    }
}
