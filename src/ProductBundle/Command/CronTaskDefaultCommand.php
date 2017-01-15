<?php

namespace ProductBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use ProductBundle\Document\CronTask;


class CronTaskDefaultCommand extends ContainerAwareCommand {

    protected function configure() {

        $this->setName('crontasks:default')->setDescription('Creates the commands by default in database.');
    }

    protected function execute(InputInterface $input, OutputInterface $output) {

        set_time_limit(0);
        ini_set('memory_limit', '-1');

	    $dm = $this->getContainer()->get('doctrine_mongodb')->getManager();
			
	    $repository = $dm->getRepository('ProductBundle:CronTask');


		$jobs = new CronTask();     


		$jobs->setName('Updating DataBase');
		$jobs->setInterval(5);
 		$jobs->setCommands('product:fetch');


 		$dm->persist($jobs);

 		$dm->flush();
	    $dm->clear();


	    $output->writeln('Command Created!');
    }

}