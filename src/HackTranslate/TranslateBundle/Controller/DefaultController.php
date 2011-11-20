<?php

namespace HackTranslate\TranslateBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name='hello')
    {
        return $this->render('HackTranslateTranslateBundle:Default:index.html.twig', array('name' => $name));
    }
}
