<?php

namespace app\commands;

class AdminBaseController extends \yii\web\Controller
{
    public function init()
    {
        parent::init();
        if (\Yii::$app->user->isGuest) {
            return $this->redirect(array ('/site/login' ));
        }
    }

}