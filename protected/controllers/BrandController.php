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

class BrandController extends XFrontBase
{
    /**
     *  品牌故事
     */
    public function actionIndex ()
    {
        $this->render('about',array('model'=>$model));
    }

}