<?php $this->renderPartial('/_include/header') ?>

    <!--广告-->
<?php //$this->renderPartial('/_include/home_banner')?>
    <!--/广告-->
    <div class="top-banner">
        <a href="http://www.manyvisions.net/event_view_149.html" title="微信订阅"><img
                src="http://www.manyvisions.net/upload/small/201405/201405271401184098.jpg" alt="微信订阅" width="1920"
                height="543"/></a>
    </div>
    <div class="main">

        <div class="kefu">
            <a target="_blank" class="qq" href="#">
                <img src="<?php echo $this->_baseUrl ?>/images/chat_now.jpg"/>
            </a>
            <a class="weibo" href="#">
                <img src="<?php echo $this->_baseUrl ?>/images/line.jpg"/>
            </a>
            <a class="weixin" href="#">
                <img src="<?php echo $this->_baseUrl ?>/images/gift.jpg"/>
            </a>
        </div>

        <script type="text/javascript">

            var idx = 0;
            if (idx == 0) {
                window.setTimeout(function () {
                    $("html,body").animate({ scrollTop: 640 }, 1000);
                }, 1000);
            }
            if (idx == 2) {
                window.setTimeout(function () {
                    $("html,body").animate({ scrollTop: 1300 }, 1000);
                }, 1000);
            }
        </script>
        <a name="#here"></a>

    </div>
    <div class="main">
        <div class="news news_list1">
            <div class="news_auto">


                <div class="news_top news_top1">
                    <div class="news_nav">
                        <ul>
                            <li><a href="http://www.manyvisions.net/news_1_1.html" title="活动印花" class="hover">活动印花<span>ACTIVITIES STAMP</span></a>
                            </li>
                            <li><a href="http://www.manyvisions.net/news_2_1.html"
                                   title="蔓延视觉">蔓延视觉<span>MANY VISIONS</span></a></li>
                            <li><a href="http://www.manyvisions.net/news_5_1.html" title="微影影像">微影影像<span>LAMOVIE</span></a>
                            </li>
                            <li><a href="http://www.manyvisions.net/news_4_1.html"
                                   title="唯婷婚礼顾问">唯婷婚礼顾问<span>V WEDDING</span></a></li>
                            <li><a href="http://www.manyvisions.net/news_3_1.html"
                                   title="嫁日新娘">嫁日新娘<span>MANY BRIDE</span></a></li>
                        </ul>
                    </div>
                    <div class="news_img">
                        <a href="http://www.manyvisions.net/event_view_218.html" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室"
                           target="_blank"><img
                                src="http://www.manyvisions.net/upload/small/201407/201407021404271745.jpg" alt=""
                                width="319" height="319" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室"/></a>
                    </div>
                </div>
                <div class="news_list">
                </div>
            </div>
        </div>
         </div>
<?php $this->renderPartial('/_include/footer')?>