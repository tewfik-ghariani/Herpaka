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
	    
	    $provider1 = file_get_contents('http://vps183328.ovh.net:3000/providers/1/products');
	    $provider2 = file_get_contents('http://vps183328.ovh.net:3000/providers/2/products');
	    $provider3 = file_get_contents('http://vps183328.ovh.net:3000/providers/3/products');
	    $provider4 = file_get_contents('http://vps183328.ovh.net:3000/providers/4/products');


	    $array = json_decode( $provider1, true );
	    $provider2 = json_decode( $provider2, true );
	    $provider3 = json_decode( $provider3, true );
	    $provider4 = json_decode( $provider4, true );

	    $dm = $this->get('doctrine_mongodb')->getManager();
	     
	    $repository = $dm->getRepository('ProductBundle:Product');



	    foreach ($array as $key => $jsons) { 


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

		        $best_price = min($jsons['price'] , $provider2[$key]['price'] , $provider3[$key]['price'] , $provider4[$key]['price']) ;
		        $product->setPrice($best_price);

		        //ToDo update existing products 


		        $dm->persist($product);	

		        }





		}

	    $dm->flush();
	    $dm->clear();

	    return new Response('Success!');
	}
}
