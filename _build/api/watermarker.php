<?php

require "vendor/autoload.php";
require "_protected/Watermarker.php";

use Intervention\Image\ImageManager;
use Intervention\Image as Image;
use Majesko\Watermarker as Watermarker;

$manager = new ImageManager(array('driver' => 'imagick'));


$config = [
    'image'       => 'image',
    'watermark'   => 'watermark',
    'upload_path' => 'upload/',
    'shared_path' => 'shared/',
    'manager'     => $manager,
    'rules'       =>
        [
            'type'    => ['jpg','png'],
            'maxsize' => ''
        ]
];

$watermarker = new Watermarker\Watermarker($config); // init watermarker library

//- main function -//

if($watermarker->validateFormat($_FILES)) {

    $image = file_get_contents($_FILES['image']['tmp_name']);
    $wm    = file_get_contents($_FILES['watermark']['tmp_name']);

    $file = $watermarker->generateImage($image,$wm); // create image

    //- response -//
    header('Content-Type: application/json');
    echo json_encode(['status' => 'ok', 'message' => 'image created', 'filename' => $file]);
} else {
    //- response -//
    header('Content-Type: application/json');
    echo json_encode(['status' => 'fail', 'message' => 'incorrect files']);
}
