<?php $this->renderPartial('/_include/header')?>

    <!--广告-->
<?php //$this->renderPartial('/_include/home_banner')?>
    <!--/广告-->

    <div class="top-banner">
        <a href="contact.html" title="联系我们"><img src="http://www.manyvisions.net/upload/small/201406/201406161402895267.jpg" alt="联系我们" width="1920" height="543" /></a>
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

<?php $this->renderPartial('/_include/footer')?>