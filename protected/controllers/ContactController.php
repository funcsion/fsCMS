<?php
/**
 * 首页控制器
 *
 * @author        esion
 * @copyright     Copyright (c) 2013-2014 fasionsoft. All rights reserved.
 * @link          http://www.bagecms.com
 * @package       fsCMS.Controller
 * @license
 * @version       v1.0
 */

class ContactController extends XFrontBase
{
    /**
     *       新闻动态
     * */
    public function actionIndex ()
    {
        $this->render('index',array('model'=>$model));
    }

}