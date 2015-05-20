<?php namespace Majesko\Watermarker;
/**
 * User: Majesko
 * Date: 19.05.15
 * Time: 16:06
 */


class Watermarker {

    private $image     = "",
            $watermark = "",
            $position  = "",
            $manager   = "",
            $rules     = [],
            $config    = [];


    function __construct($config)
    {
        $this->config = $config;
    }


    private function setSafeName()
    {
        $new_name = time().rand(1,99999);

        return $new_name;
    }

    /* Validation file type */
    public function validateFormat($files)
    {
        foreach($files as $file) {
            $arr = explode('.', $file['name']); //split filename and extension
            $extension = end($arr);
            if(!in_array($extension, $this->config['rules'])) { // validate with rules array
                return false;
            }
        }
        return true;
    }

    /* Generate image */
    public function generateImage($image, $wm)
    {
        $img  = $this->config['manager']->make($image);
        $wm   = $this->config['manager']->make($wm)->opacity(10);
        $file = $this->setSafeName().'.jpg';
        $img->fill($wm);
        $img->save($this->config['shared_path'].$file);

        return $file;
    }

//    safe file locally
//    public function saveFile($file, $type)
//    {
//        $safe_filename = $this->setSafeName($file['name']);
//
//        if($type == $this->config['image']) {
//            $this->image = $safe_filename;
//        } elseif($type == $this->config['watermark']) {
//            $this->watermark = $safe_filename;
//        } else {
//            return json_encode(array('status' => "fail", "message" => "incorrect params in config"));
//        }
//        move_uploaded_file($file['tmp_name'], $this->config['upload_path'].$safe_filename);
//
//        return json_encode(array('status' => 'ok', 'message' => 'file saved'));
//    }
//
//    public function getImage()
//    {
//        return $this->config['upload_path'].$this->image;
//    }
//
//    public function getWatermark()
//    {
//        return $this->config['upload_path'].$this->watermark;
//    }
//
//    public function setConfig($config)
//    {
//        $this->config = $config;
//    }
//
//    public function getConfig()
//    {
//        return $this->config;
//    }
}