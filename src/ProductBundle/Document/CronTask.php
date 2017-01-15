<?php

namespace ProductBundle\Document;
use Doctrine\Common\Collections\ArrayCollection;

/** @Document */

class CronTask
{
  /** @Field(type="integer") @Index(unique=true, order="asc") */
    private $id;

    /**
     * @Field(type="string")
     */
    private $name;

    /**
     * @Field(type="string")
     */
    private $commands;

    /**
     * @Field(name="`interval`", type="integer")
     */
    private $interval;

    /**
     * @Field(type="datetime", nullable=true)
     */
    private $lastrun;

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    public function getCommands()
    {
        return $this->commands;
    }

    public function setCommands($commands)
    {
        $this->commands = $commands;
        return $this;
    }

    public function getInterval()
    {
        return $this->interval;
    }

    public function setInterval($interval)
    {
        $this->interval = $interval;
        return $this;
    }

    public function getLastRun()
    {
        return $this->lastrun;
    }

    public function setLastRun($lastrun)
    {
        $this->lastrun = $lastrun;
        return $this;
    }
}