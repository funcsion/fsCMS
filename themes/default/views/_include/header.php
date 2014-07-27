<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title><?php echo $this->_seoTitle?> - Powered By FunsionCMS</title>
    <meta name="generator" content="FunsionCMS CMS" />
    <meta name="author" content="Funsion" />
    <meta name="keywords" content="<?php echo $this->_seoKeywords?>">
    <meta name="description" content="<?php echo $this->_seoDescription?>">
    <link href="<?php echo $this->_theme->baseUrl?>/theme/style.css"  type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="<?php echo $this->_theme->baseUrl?>/theme/jquery-1.7.2.min.js" ></script>
    <script type="text/javascript" src="<?php echo $this->_theme->baseUrl?>/theme/jquery.easing.1.3.js"></script>
    <!--    <meta property="wb:webmaster" content="3dc2c539682e3866" />-->
    <!--    <script src="--><?php //echo $this->_theme->baseUrl?><!--/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>-->
    <link href="<?php echo $this->_theme->baseUrl?>/theme/jquery.css" rel="stylesheet" type="text/css" />
    <script src="<?php echo $this->_theme->baseUrl?>/theme/fancy1.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function (){

            //作品列表,弹出大图效果
            $("#indexinlove a[rel=example_group]").fancybox({
                'transitionIn'		: 'elastic',
                'transitionOut'		: 'elastic',
                'overlayColor'		: '#000',
                'overlayOpacity'	: 0.5,
                'titleShow':		false,
                //'titlePosition' 	: 'over',
                'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
                    return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
                }
            });
        });
    </script>
</head>
<body class="bodyTop">


<div id="header">

    <div class="at">

        <h1><a href="<?php echo Yii::app()->homeUrl?>" title="<?php echo $this->_seoDescription?>"></a>

            <!--            <em style="padding-left:30px;"><wb:follow-button uid="2278926603" type="red_2" width="136" height="24" ></wb:follow-button></em>-->



        </h1>
        <script type="text/javascript">
            function fetch_object(idname)
            {
                var my_obj = document.getElementById(idname);
                return my_obj;
            }
            function toggle_nav(obj)
            {
                for (i = 1; i<= 9; i++ )
                {
                    var sub_nav = fetch_object("zzjs_nav" + i);
                    var sub_nav_index = fetch_object("zzjs_nav0");
                    sub_nav_index.style.display = "none";
                    if (obj == i)
                    {
                        if(sub_nav != null)
                            sub_nav.style.display = "block";
                    }
                    else
                    {
                        if(sub_nav != null)
                            sub_nav.style.display = "none";
                    }
                }
            }
        </script>
        <div class="nav">
            <ul>
                <li onmouseover="javascript:toggle_nav(1)"><a href="<?php echo Yii::app()->homeUrl?>" title="首页">首页<span>HOME</span></a></li>
                <?php
                $i =1;
                foreach((array)$this->_big_catalog as $key=>$row):
                    ?>
                    <li onmouseover="javascript:toggle_nav(<?=$i +=1;?>)"><a href="about.html" title="<?=$row['catalog_name']?>" target="_blank"><?=$row['catalog_name']?><span>BRAND STORY</span></a></li>
                <?php endforeach?>
            </ul>
            <div class="clear"></div>
            <div id="zzjs_nav0" class="headt" style="display:block"></div>
            <div id="zzjs_nav1" class="headt" style="display:none"></div>
            <?php
            $j=1;
            foreach((array)$this->_detail_catalog as $row):
                ?>
                <div id="zzjs_nav<?=$j +=1;?>" class="headt" style="display:none">
                    <?php for($i=0;$i<count($row);$i++){?>
                        <?php if($i == 0):?>
                            <a href="about.html"  title="<?=$row[$i]['catalog_name']?>" target="_blank"><?=$row[$i]['catalog_name']?></a>
                        <?php else:?>
                            | <a href="about.html"  title="<?=$row[$i]['catalog_name']?>" target="_blank"><?=$row[$i]['catalog_name']?></a>
                        <?php endif;?>
                    <?php }?>
                </div>
            <?php endforeach; ?>
        </div>

    </div></div>
<!--/头-->
