<?php

namespace HackTranslate\TranslateBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class OAuthController extends Controller
{
    
    public function authAction($name='hello')
    {
        return $this->render('HackTranslateTranslateBundle:Default:index.html.twig', array('name' => $name));
    }
}
