<?php

namespace HackTranslate\TranslateBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller {

    public function indexAction() {

        $tmhOAuth = new \tmhOAuth(array(
                        'consumer_key'    => 'GPeSgFhKs61BMkozoBYH8w',
                        'consumer_secret' => 'nDJcHPbHItkI9OqUGPFMq1GljSO5ReBdNGDGymVgno',
                        'user_token'      => '416994131-UrsqQ7YqqJHDaAjJU8CvmsIjwUVm327G4X8A9AgY',
                        'user_secret'     => '9JZuT0Ow3clZDVNA37VSi98wsCAs00pSN8QbRQ0SL0',
        ));

        
        $tweets = file_get_contents('http://api.twitter.com/1/statuses/public_timeline.json');

        return $this->render('HackTranslateTranslateBundle:Default:index.html.twig', array('tweets' => json_decode($tweets)));
    }
}
