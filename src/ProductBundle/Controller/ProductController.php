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
    	//$products = $this->get('product.get_products')->fetch();
    		$dm = $this->get('doctrine_mongodb')->getManager();
 			$products=$dm->getRepository('ProductBundle:Product')
 					->findAll();

    	
          return new JsonResponse([
          	'success' => true,
          	'data' => $products[0]->showProduct()
          	]);


    }
}
