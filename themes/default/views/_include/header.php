<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title><?php echo $this->_seoTitle ?></title>
    <meta name="keywords" content="<?php echo $this->_seoKeywords ?>">
    <meta name="description" content="<?php echo $this->_seoDescription ?>">
    <link rel="stylesheet" href="<?php echo $this->_theme->baseUrl ?>/css/mv_style.css">
    <?php Yii::app()->clientScript->registerCoreScript('jquery', CClientScript::POS_END); ?>
    <script type="text/javascript" src="<?php echo $this->_baseUrl ?>/static/js/home.js"></script>
    <script type="text/javascript" src="<?php echo $this->_baseUrl ?>/static/js/jquery/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="<?php echo $this->_baseUrl ?>/static/js/jquery.SuperSlide.2.1.js"></script>

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
                    <li onmouseover="javascript:toggle_nav(<?=$i +=1;?>)"><a href="<?php echo $this->createUrl($row['catalog_name_alias'])?>" title="<?=$row['catalog_name']?>" target="_blank"><?=$row['catalog_name']?><span><?=$row['catalog_name_second']?></span></a></li>
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
                            <a href="<?php echo $this->createUrl($row[$i]['catalog_name_alias'])?>"  title="<?=$row[$i]['catalog_name']?>" target="_blank"><?=$row[$i]['catalog_name']?></a>
                        <?php else:?>
                            | <a href="<?php echo $this->createUrl($row[$i]['catalog_name_alias'])?>"  title="<?=$row[$i]['catalog_name']?>" target="_blank"><?=$row[$i]['catalog_name']?></a>
                        <?php endif;?>
                    <?php }?>
                </div>
            <?php endforeach; ?>
        </div>

    </div></div>
<!--/头-->
