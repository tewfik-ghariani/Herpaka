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
        return $this->render('ProductBundle:Default:index.html.twig');
    }

    public function createAction()
	{
	    
		//	$provider = $this-> get('product.provider');
		//	$provider->create();


        $this->forward('product.provider_controller:updateAction');


          return new JsonResponse([
          	'success' => true
          	]);

	}
}
