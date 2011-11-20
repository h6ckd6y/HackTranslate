<?php

namespace HackTranslate\TranslateBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TweetController extends Controller {

    public function sendAction($text) {

        $tmhOAuth = new \tmhOAuth(array(
                        'consumer_key'    => 'GPeSgFhKs61BMkozoBYH8w',
                        'consumer_secret' => 'nDJcHPbHItkI9OqUGPFMq1GljSO5ReBdNGDGymVgno',
                        'user_token'      => '416994131-UrsqQ7YqqJHDaAjJU8CvmsIjwUVm327G4X8A9AgY',
                        'user_secret'     => '9JZuT0Ow3clZDVNA37VSi98wsCAs00pSN8QbRQ0SL0',
        ));

        $code = $tmhOAuth->request('POST', $tmhOAuth->url('1/statuses/update'), array(
                'status' => $text
        ));


        $response = new \Symfony\Component\HttpFoundation\Response($tmhOAuth->response['response'], 200, array('Content-type' => 'application/json'));
        return $response;
    }
}
