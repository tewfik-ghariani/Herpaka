<?php

namespace ProductBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use ProductBundle\Document\Product;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProductController extends Controller
{
    public function fetchAction()
    {

    		$dm = $this->get('doctrine_mongodb')->getManager();
 			$products=$dm->getRepository('ProductBundle:Product')
 					->findAll();



 			foreach ($products as $key => $prod ) 
 			{
 				$data[$key] = $prod->showProduct();

 			}

 			$dm->clear();
    	
          return new JsonResponse([
          	'success' => true,
          	'data' => $data
          	]);
    }

    public function orderAction()
    {
    	//get the logged in user's email
    	$user = $this->container->get('security.context')->getToken()->getUser();
		$email = $user->getEmail();

        $message = \Swift_Message::newInstance()
		    ->setSubject('Thank you for ordering via Herpaka App!')
		    ->setFrom('herpakaapp@gmail.com')
		    ->setTo($email)
		    // ->setBody($this->renderView('ProductBundle:Resources:views:Default:index.html.twig', array('enquiry' => $enquiry)));
			->setBody($this->renderView('@ProductBundle/Resources/views/Default/index.html.twig'));		 
        $this->get('mailer')->send($message);

        return new JsonResponse([
          	'command' => $email
          	]);
    }
}
