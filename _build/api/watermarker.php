<?php

require "vendor/autoload.php";
require "_protected/Watermarker.php";

use Intervention\Image\ImageManager;
use Intervention\Image as Image;
use Majesko\Watermarker as Watermarker;

$manager = new ImageManager(array('driver' => 'imagick'));


$config = [
    'image' => 'image',
    'watermark' => 'watermark',
    'upload_path' => 'upload/',
    'shared_path' => 'shared/',
    'manager' => $manager,
    'rules' => ['jpg','png']
];

$watermarker = new Watermarker\Watermarker($config);

$arr = ['jpg', 'png'];
echo array_search('jpg', $arr); //нихера не работает

if(isset($_FILES['image']) && $_FILES['watermark'])
{
    $image = file_get_contents($_FILES['image']['tmp_name']);
    $wm    = file_get_contents($_FILES['watermark']['tmp_name']);

//    echo $watermarker->validateFormat($_FILES);

//    $watermarker->generateImage($image,$wm);
//    echo $watermarker->validateFormat($_FILES['image']);
//    print_r($_FILES);

} else {
    header('Content-Type: application/json');
    echo json_encode(['status' => 'fail', 'message' => 'no files for upload']);
}







