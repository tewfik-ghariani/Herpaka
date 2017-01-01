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

	    $dm = $this->get('doctrine_mongodb')->getManager();
	     
	    $repository = $dm->getRepository('ProductBundle:Product');



	    foreach ($array as $jsons) { 


		        $old = $repository -> findByProductName($jsons['productName']);
		        if (!$old) {
		        $product = new Product();

		        $product->setProductName($jsons['productName']);
		        $product->setCategory($jsons['category']);
		        $product->setBrand($jsons['brand']);
		        $product->setProductMaterial($jsons['productMaterial']);
		        $product->setImageUrl($jsons['imageUrl']);
		        $product->setDelivery($jsons['delivery']);
		        $product->setDetails($jsons['details']);
		       // $product->setPrice($jsons['price']);
		        //wait till choosing the best price


		        $dm->persist($product);	

		        }





		}

	    $dm->flush();
	    $dm->clear();

	    return new Response('Created products of provider one ');
	}
}
