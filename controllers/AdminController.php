<?php

namespace app\controllers;

use app\commands\AdminBaseController;

class AdminController extends AdminBaseController
{
    public function actionIndex()
    {
        $this->layout = 'admin';
        return $this->render('index');
    }

}
