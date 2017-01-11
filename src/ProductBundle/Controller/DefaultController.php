<?php

namespace ProductBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ProductBundle\Document\Product;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;


class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('front-end/index.html');
    }

     public function dispatchAction($template)
        {
            return $this->render('ProductBundle:'.$template);
        }


    public function createAction()
	{
	    
	    $provider1 = file_get_contents('http://vps183328.ovh.net:3000/providers/1/products');
	    $provider2 = file_get_contents('http://vps183328.ovh.net:3000/providers/2/products');
	    $provider3 = file_get_contents('http://vps183328.ovh.net:3000/providers/3/products');
	    $provider4 = file_get_contents('http://vps183328.ovh.net:3000/providers/4/products');


	    //ToDo Handle Errors 

	    $array = json_decode( $provider1, true );
	    $provider2 = json_decode( $provider2, true );
	    $provider3 = json_decode( $provider3, true );
	    $provider4 = json_decode( $provider4, true );

	    $dm = $this->get('doctrine_mongodb')->getManager();
	     
	    $repository = $dm->getRepository('ProductBundle:Product');



	    foreach ($array as $key => $jsons) { 


		        $existing_product = $repository-> findOneByProductName($jsons['productName']);
		        
		        //selecting best price 
		        $best_price = min($jsons['price'] , $provider2[$key]['price'] , $provider3[$key]['price'] , $provider4[$key]['price']) ;
		        

		        //new product
		        if (!$existing_product) 
		        {
		        $product = new Product();

		        $product->setProductName($jsons['productName']);
		        $product->setCategory($jsons['category']);
		        $product->setBrand($jsons['brand']);
		        $product->setProductMaterial($jsons['productMaterial']);
		        $product->setImageUrl($jsons['imageUrl']);
		        $product->setDelivery($jsons['delivery']);
		        $product->setDetails($jsons['details']);
			    $product->setNewPrice($best_price);
			    $product->setOldPrice($best_price);

			    $dm->persist($product);	
		        }	


		        //update old product
		        else    
		        {
		        $existing_price = $existing_product->getNewPrice();
		     	
		     	   if ($existing_price != $best_price) {
		       			 $existing_product->setOldPrice($existing_price);
		       			 $existing_product->setNewPrice($best_price);
		       		 }
		        $dm->persist($existing_product);	
				}



		}

	    $dm->flush();
	    $dm->clear();

          return new JsonResponse([
          	'success' => true
          	]);

	}

	public function dispatchAction($template)
        {
            return $this->render('ProductBundle:'.$template);
        }

}
