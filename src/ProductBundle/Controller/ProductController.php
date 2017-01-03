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
}
