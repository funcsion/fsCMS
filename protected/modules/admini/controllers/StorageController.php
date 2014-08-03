<?php

class StorageController extends XAdminiBase
{
    public function actionIndex ()
    {
        $this->render('index');
    }

    public function actionUploadImage(){
        $image = CUploadedFile::getInstanceByName('file');
        $name = '/home/fung/ray/qbt/uploads/'.$image->name;
        $image->saveAs($name);
    }
}