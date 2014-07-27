<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title><?php echo $this->_seoTitle ?> - Powered By BageCMS</title>
    <meta name="generator" content="BageCMS CMS"/>
    <meta name="author" content="shuguang"/>
    <meta name="keywords" content="<?php echo $this->_seoKeywords ?>">
    <meta name="description" content="<?php echo $this->_seoDescription ?>">
    <link rel="stylesheet" href="<?php echo $this->_theme->baseUrl ?>/css/mv_style.css">
    <?php Yii::app()->clientScript->registerCoreScript('jquery', CClientScript::POS_END); ?>
    <script type="text/javascript" src="<?php echo $this->_baseUrl ?>/static/js/home.js"></script>
    <script type="text/javascript" src="<?php echo $this->_baseUrl ?>/static/js/jquery/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="<?php echo $this->_baseUrl ?>/static/js/jquery.SuperSlide.2.1.js"></script>
</head>
<body>
<div class="container">
    <!--头-->
    <div id="header">

        <div class="at">

            <h1><a title="丘比特婚纱摄影|全国顶尖外景婚纱摄影机构" href="index.htm"></a>

                <em style="padding-left:30px;">
                    <wb:follow-button height="24" width="136" type="red_2" uid="2278926603">
                        <iframe width="136" height="24" frameborder="0"
                                src="http://widget.weibo.com/relationship/followbutton.php?btn=red&amp;style=2&amp;uid=2278926603&amp;width=136&amp;height=24&amp;language=zh_cn"
                                scrolling="no" marginheight="0"></iframe>
                    </wb:follow-button>
                </em>


            </h1>
            <script type="text/javascript">
                function fetch_object(idname) {
                    var my_obj = document.getElementById(idname);
                    return my_obj;
                }
                function toggle_nav(obj) {
                    for (i = 1; i <= 9; i++) {
                        var sub_nav = fetch_object("zzjs_nav" + i);
                        var sub_nav_index = fetch_object("zzjs_nav0");
                        sub_nav_index.style.display = "none";
                        if (obj == i) {
                            sub_nav.style.display = "block";
                        }
                        else {
                            sub_nav.style.display = "none";
                        }
                    }
                }
            </script>
            <div class="nav">
                <ul>
                    <li onmouseover="javascript:toggle_nav(1)">
                        <a title="首页" href="index.htm">首页<span>HOME</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(2)">
                        <a target="_blank" title="品牌故事" href="about.html">品牌故事<span>BRAND STORY</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(3)">
                        <a target="_blank" title="新闻动态" href="news.htmll">新闻动态<span>NEWS</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(4)">
                        <a target="_blank" title="作品大赏" href="works.html">作品大赏<span>WEDDING PHOTO</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(5)">
                        <a target="_blank" title="品牌服务" href="scene.html">品牌服务<span>SITE INTRE</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(6)">
                        <a target="_blank" title="婚礼策划" href="job.html">婚礼策划<span>JOB</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(7)">
                        <a target="_blank" title="景点介绍" href="contact.html">景点介绍<span>CONTACT</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(8)">
                        <a target="_blank" title="联系我们" href="join_view_4.html">联系我们<span>JOIN</span></a>
                    </li>
                    <li onmouseover="javascript:toggle_nav(8)">
                        <a target="_blank" title="在线预约" href="join_view_4.html">在线预约<span>JOIN</span></a>
                    </li>
                </ul>
                <div class="clear"></div>
                <div style="display: none;" class="headt" id="zzjs_nav0"></div>
                <div style="display:none" class="headt" id="zzjs_nav1"></div>
                <div style="display: none;" class="headt" id="zzjs_nav2">
                    <a target="_blank" title="关于我们" href="about.html">关于我们</a> |
                    <a target="_blank" href="course.html">发展历程</a> |
                    <a target="_blank" title="企业理念" href="idea.html">企业理念</a>
                </div>
                <div style="display: none;" class="headt" id="zzjs_nav3">
                    <a target="_blank" href="news_1_1.html">活动印花</a> | <a target="_blank" href="news_2_1.html">蔓延视觉</a>
                    |
                    <a target="_blank" href="news_5_1.html">微影影像</a> |
                    <a target="_blank" href="news_4_1.html">唯婷婚礼顾问</a> |
                    <a target="_blank" href="news_3_1.html">嫁日新娘</a> |
                    <a target="_blank" href="review.html">微点评</a>
                </div>
                <div style="display:none" class="headt" id="zzjs_nav4">
                    <a target="_blank" href="works.html">新作大赏</a> |
                    <a target="_blank" href="works_1_1.html">婚纱摄影作品</a> |
                    <a target="_blank" href="works_2_1.html">主题婚纱作品</a> |
                    <a target="_blank" href="works_3_1.html">时尚写真馆</a> |
                    <a target="_blank" href="works_4_1.html">孕味大赏</a>
                </div>
                <div style="display:none" class="headt" id="zzjs_nav5"></div>
                <div style="display:none" class="headt" id="zzjs_nav6"></div>
                <div style="display: none;" class="headt" id="zzjs_nav7"></div>

            </div>

        </div>
    </div>
    <!--/头-->
