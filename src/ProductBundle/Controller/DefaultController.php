<?php

namespace ProductBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ProductBundle\Document\Product;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('ProductBundle:Default:index.html.twig');
    }

    public function createAction()
	{
	    
	    $response = file_get_contents('http://vps183328.ovh.net:3000/providers/1/products');

	    $array = json_decode( $response, true );

	    foreach ($array as $jsons) { 
		        $product = new Product();
		        $product->setName($jsons['productName']);
		        $product->setCategory($jsons['category']);
		        $product->setBrand($jsons['brand']);
		        $product->setProductMaterial($jsons['productMaterial']);
		        $product->setImageUrl($jsons['imageUrl']);
		        $product->setDelivery($jsons['delivery']);
		        $product->setDetails($jsons['details']);
		        $product->setPrice($jsons['price']);
		        $dm = $this->get('doctrine_mongodb')->getManager();
			    $dm->persist($product);
		}

	    $dm->flush();
	    $dm->clear();

	    return new Response('Created products of provider one ');
	}
}
