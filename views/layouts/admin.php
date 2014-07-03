<?php

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\widgets\Alert;
use app\assets\AdminAsset;

/**
 * @var \yii\web\View $this
 * @var string $content
 */
$asset = AdminAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <?php $this->head() ?>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= Html::encode($this->title) ?></title>
    <!--[if IE 7]>
    <link rel="stylesheet" href="<?= $asset->baseUrl; ?>/css/font-awesome-ie7.min.css">
    <![endif]-->
</head>
<body>
<?php $this->beginBody() ?>
<div id="wrapper">
    <?php
    if (!Yii::$app->user->isGuest) {
        NavBar::begin([
            'brandLabel' =>  '丘比特婚纱摄影CMS',
            'brandUrl' => \Yii::$app->urlManager->createUrl('/admin/index'),
            'options' => [
                'class' => 'navbar navbar-inverse navbar-fixed-top yadmin-nav navbar-static-my',
            ],
            'renderInnerContainer' => false
        ]);
        ?>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right navbar-user">
                <li>
                    <a href="<?php echo Yii::$app->urlManager->createUrl('/site/index'); ?>" target="_blank">前台首页</a>
                </li>
                <li >
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                            class="icon-user"></i> <?php echo Yii::$app->user->identity->username ?> <b
                            class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="<?php echo Yii::$app->urlManager->createUrl('/profile/index'); ?>"><i
                                    class="icon-user"></i> 修改密码</a></li>
                        <li class="divider"></li>
                        <li><a href="<?php echo Yii::$app->urlManager->createUrl('/site/logout'); ?>"><i
                                    class="icon-power-off"></i>退出登录</a></li>
                    </ul>
                </li>
            </ul>
            <?php
            app\widgets\LeftNavBar::begin([
                'innerContainerOptions' => array('class' => ''),
                'renderInnerContainer' => false,
                'options' => [
                    'class' => 'leftmenu',
                    'tag' => 'div'
                ],
                'containerOptions' => [
                    'class' => 'leftmenu'
                ]
            ]);
            $leftMenuItems = [

                ['label' => '首页',
                    'items' => [

                        ['label' => '系统首页', 'url' => ['/product/statistics'], 'icon' => 'icon-wrench'],
                        ['label' => '栏目管理', 'url' => ['/product/statistics'], 'icon' => 'icon-wrench'],
                    ], 'icon' => 'icon-collapse'
                ],
                ['label' => '内容',
                    'items' => [
                        ['label' =>  '内容管理', 'url' => ['order/index'], 'icon' => 'icon-bar-chart'],
                        ['label' =>  '评论管理', 'url' => ['order/statistics'], 'icon' => 'icon-bar-chart'],
                        ['label' =>  '专题管理', 'url' => ['order/statistics'], 'icon' => 'icon-bar-chart'],
                        ['label' =>  '单页管理', 'url' => ['order/statistics'], 'icon' => 'icon-bar-chart'],
                    ], 'icon' => 'icon-collapse'
                ],

                ['label' => '用户',
                    'items' => [
                        ['label' =>  '管理员列表', 'url' => ['account/role'], 'icon' => 'icon-file'],
                        ['label' => '管理员权限', 'url' => ['user/index'], 'icon' => 'icon-file'],
                        ['label' => '管理员日志', 'url' => ['user/index'], 'icon' => 'icon-file'],
                        ['label' => '留言反馈', 'url' => ['user/index'], 'icon' => 'icon-file'],
                    ], 'icon' => 'icon-collapse'
                ],

                [
                    'label' => '设置',
                    'items' => [
                        ['label' => '站点设置', 'url' => ['content/index'], 'icon' => 'icon-file'],
                        ['label' => 'SEO设置', 'url' => ['content/index'], 'icon' => 'icon-file'],
                        ['label' => '上传设置', 'url' => ['content/index'], 'icon' => 'icon-file'],
                        ['label' => '自定义设置', 'url' => ['content/index'], 'icon' => 'icon-file'],
                    ]
                ],
            ];
            echo Nav::widget([
                'options' => ['class' => 'nav navbar-nav side-nav'],
                'items' => $leftMenuItems,
            ]);
            app\widgets\LeftNavBar::end();
            ?>

            <!-- #leftmenu-->
        </div> <!-- /.navbar-collapse -->
        <?php
        NavBar::end();
    }
    ?>
    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1><?= Html::encode($this->title) ?></h1>
                <?=
                Breadcrumbs::widget([
                    'homeLink' => ['label' => 'Backend Home','url' => Yii::$app->homeUrl],
                    'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                ])
                ?>
                <?= Alert::widget() ?>
            </div>
        </div>

        <?= $content ?>

    </div>
    <!-- #page-wrapper -->
</div>
<!-- #wrapper -->
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
