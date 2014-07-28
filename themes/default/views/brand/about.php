<?php $this->renderPartial('/_include/header')?>

<!--广告-->
<?php //$this->renderPartial('/_include/home_banner')?>
<!--/广告-->
    <div class="top-banner">
        <a href="about.html" title="品牌故事"><img src="http://www.manyvisions.net/upload/small/201406/201406171402999422.jpg" alt="品牌故事" width="1920" height="543" /></a>
    </div>
    <div class="main">

        <div class="kefu">
            <a target="_blank" class="qq" href="#">
                <img src="<?php echo $this->_baseUrl ?>/images/chat_now.jpg" />
            </a>
            <a class="weibo" href="#">
                <img src="<?php echo $this->_baseUrl ?>/images/line.jpg" />
            </a>
            <a class="weixin" href="#">
                <img src="<?php echo $this->_baseUrl ?>/images/gift.jpg" />
            </a>
        </div>

        <script type="text/javascript">

            var idx=0;
            if(idx==0)
            {
                window.setTimeout(function(){
                    $("html,body").animate({ scrollTop: 640 }, 1000);
                },1000);
            }
            if(idx==2)
            {
                window.setTimeout(function(){
                    $("html,body").animate({ scrollTop: 1300 }, 1000);
                },1000);
            }
        </script>
        <a name="#here"></a>

    </div>
    <div class="main">
        <div class="text about">
            <div class="auto">
                <div class="huannav">
                    <ul>
                        <li><a href="http://www.manyvisions.net/about.html" title="蔓延视觉" class="about1 hover"></a></li>
                        <li><a href="http://www.manyvisions.net/about_15.html" title="微影影像" class="about2 "></a></li>
                        <li><a href="http://www.manyvisions.net/about_13.html" title="嫁日新娘" class="about3 "></a></li>
                        <li><a href="http://www.manyvisions.net/about_14.html" title="唯婷婚礼顾问" class="about4 "></a></li>
                    </ul>
                </div>
                <p>
                    &nbsp;&nbsp;</p>

            </div>
        </div>



    </div>

<?php $this->renderPartial('/_include/footer')?>