<?php

namespace ProductBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class fetchCommand extends Command
{
    protected function configure()
    {
           $this

                  ->setName('product:fetch')

                     ->setDescription('Procuts Updated!')

                       ->setHelp("This command update products in the DataBase[Test]")
             ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // ...
    }
}