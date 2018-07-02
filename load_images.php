<?php

$directory = "tmp";
$images = glob($directory . "/*.*");
$result = [];
for ($i=0; $i<count($images); $i++)
{
    $image = $images[$i];
    $supported_image = array(
        'gif',
        'jpg',
        'jpeg',
        'png'
    );

    $ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));
    if (in_array($ext, $supported_image)) {
        $content = file_get_contents($image);
        $result[]=array(
            'name'=>basename($image),
            'type'=>'image',
            'src'=>"data:image/".$ext.";base64,".base64_encode($content),
            'height'=>350,
            'width'=>250
        );



    } else {
        continue;
    }
}


echo json_encode($result);

