<?php $this->renderPartial('/_include/header')?>

<!--广告-->
<?php $this->renderPartial('/_include/home_banner')?>
<!--/广告-->


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


    <div class="toutiao">
        <a target="_blank" class="more" title="更多集团头条资讯" href="news.html"></a>
        <div>
            <script type="text/javascript">
                $(document).ready(function () {
                    $(".toutiao a").hover(function () {
                        $(this).find("img").stop().animate({ opacity: "1" }, 1000);
                        $(this).siblings().find("img").stop().animate({ opacity: "0.5" }, 500);
                    }, function () {
                        $(this).parent().find("img").stop().animate({ opacity: "1" }, 500);
                    })
                    $(".scoroll a.n1").click(function () {
                        $("html,body").animate({ scrollTop: $(".p1").offset().top }, 1000);
                    })
                    $(".scoroll a.n2").click(function () {
                        $("html,body").animate({ scrollTop: $(".blackbg").offset().top }, 1000);
                    })
                })
            </script>
            <a target="_blank" title="婚纱摄影 深圳婚纱照 拍摄婚纱照" href="#">
                <img width="540" height="467" alt="婚纱摄影 深圳婚纱照 拍摄婚纱照" src="<?php echo $this->_baseUrl ?>/images/ad_001.jpg" style="opacity: 1;">
            </a>
            <a target="_blank" title="婚礼策划 婚庆服务" href="#">
                <img width="213" height="267" alt="婚礼策划 婚庆服务" src="<?php echo $this->_baseUrl ?>/images/ad_002.jpg" style="opacity: 1;">
            </a>
            <a target="_blank" title="礼服订制 婚纱礼服 婚纱订做" href="#">
                <img width="213" height="267" alt="礼服订制 婚纱礼服 婚纱订做" src="<?php echo $this->_baseUrl ?>/images/ad_003.jpg" style="opacity: 1;">
            </a>
            <a target="_blank" title="微影影像, 微电影,婚纱花絮,婚礼跟拍" href="#">
                <img width="427" height="198" alt="微影影像, 微电影,婚纱花絮,婚礼跟拍" src="<?php echo $this->_baseUrl ?>/images/ad_004.jpg" style="opacity: 1;"></a>
        </div>

    </div>


    <div class="event">
        <a target="_blank" class="more" title="更多新闻活动" href="news.html"></a>
        <div class="event_m">
            <div class="event_v">

            </div>


            <div class="event_b">
                <ul>
                    <li><a target="_blank" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" href="event_view_218.html"><img width="92" height="92" alt="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" src="upload/small/201407/201407021404271745.jpg"><div class="nr"><b>9周年店庆·拍婚纱照送微电影</b><i>HITS:8208 </i><small>TIME:2014-07-02</small><div class="clear"></div><p>蔓延视觉9岁店庆啦!【拍婚纱照送微电影】活动时间7.1-7.20 限量抢订，订完即止！活动期间进店订单另有机会获得大钻戒...</p></div></a></li>
                    <li><a target="_blank" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" href="event_view_205.html"><img width="92" height="92" alt="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" src="upload/small/201406/201406081402200314.jpg"><div class="nr"><b>2014广州夏季结婚展</b><i>HITS:1512 </i><small>TIME:2014-06-08</small><div class="clear"></div><p>2014广州夏季结婚展...</p></div></a></li>
                    <li><a target="_blank" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" href="event_view_192.html"><img width="92" height="92" alt="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" src="upload/small/201404/201404281398678218.jpg"><div class="nr"><b>盛夏光年,蜜爱五月--你好，蔓延！</b><i>HITS:8946 </i><small>TIME:2014-04-28</small><div class="clear"></div><p>...</p></div></a></li>
                    <li><a target="_blank" title="蔓延视觉 深圳婚纱摄影 网络婚博会" href="event/201404/index.htm"><img width="92" height="92" alt="蔓延视觉 深圳婚纱摄影 网络婚博会" src="upload/small/201404/201404171397717609.jpg"><div class="nr"><b>首届网络婚博会,春季最后一波优惠！</b><i>HITS:837 </i><small>TIME:2014-04-15</small><div class="clear"></div><p>【首届春季网络婚博会】最后一波优惠来袭！拍婚纱照、拍微电影、租赁婚纱礼服办婚庆服务......</p></div></a></li>
                    <li><a target="_blank" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" href="event_view_163.html"><img width="92" height="92" alt="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" src="upload/small/201403/201403251395720641.jpg"><div class="nr"><b>百花齐放－千鸟争鸣－万物复苏</b><i>HITS:651 </i><small>TIME:2014-03-25</small><div class="clear"></div><p>今夜还吹着风，想起你好温柔，有你的日子分外轻松，也不是无影踪，只是想你太浓，怎么会无时无刻把你梦...</p></div></a></li>
                    <li><a target="_blank" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" href="event_view_160.html">
                            <img width="92" height="92" alt="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" src="upload/small/201403/201403191395214031.jpg"><div class="nr"><b>佛山蔓延视觉周年庆典</b><i>HITS:5776 </i><small>TIME:2014-03-19</small><div class="clear"></div><p>【佛山#蔓延视觉# -周年庆典】活动时间：3月24-31日；店庆期间特惠套餐专享福利；网络咨询进店订单另有额外惊喜礼品；...</p></div></a></li>
                </ul>
            </div>
        </div>
    </div>



</div>

<div class="main">
    <div class="works1">
        <a target="_blank" class="more" title="更多婚纱大赏" href="works_1_1.html"></a>
        <ul>
            <li><a target="_blank" title="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" href="#">
                    <img width="240" height="336" alt="深圳婚纱摄影 最新动态 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_001.jpg">
                    <span class="png" style="bottom: -64px;"><b>CHENGXILI</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="#">
                    <img width="240" height="336" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_002.jpg">
                    <span class="png" style="bottom: -64px;"><b>ZETING</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="#">
                    <img width="240" height="336" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_003.jpg">
                    <span class="png" style="bottom: -64px;"><b>XUWANA</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="#">
                    <img width="240" height="336" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_004.jpg">
                    <span class="png"><b>ZHAOXIAOQIAO</b></span></a></li>
        </ul>
    </div>

    <div class="works2">
        <a target="_blank" class="more" title="更多主题婚纱作品" href="works_2_1.html"></a>
        <ul>
            <li><a target="_blank" title="深圳婚纱摄影 蔓延视觉 最新作品 深圳婚纱摄影工作室" href="works_view_422.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 蔓延视觉 最新作品 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_005.jpg">
                    <span class="png" style="bottom: -64px;"><b>温柔的遇见</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新样片 深圳婚纱摄影工作室" href="works_view_421.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新样片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_006.jpg">
                    <span class="png" style="bottom: -64px;"><b>最甜的微笑</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_419.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_007.jpg">
                    <span class="png" style="bottom: -64px;"><b>拥抱的初触动</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_420.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_008.jpg">
                    <span class="png" style="bottom: -64px;"><b>爱的意义 </b></span></a></li>
        </ul>
    </div>

    <div class="works4">
        <a target="_blank" class="more" title="更多孕味大赏" href="works_4_1.html"></a>
        <ul>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_413.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_009.jpg">
                    <span class="png" style="bottom: -64px;"><b>ZHAOCHUN</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_405.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_010.jpg">
                    <span class="png" style="bottom: -64px;"><b>XIEDONG</b></span></a></li>
            <li><a target="_blank" title="ZHENRUOMENG" href="works_view_11.html">
                    <img width="239" height="349" alt="ZHENRUOMENG" src="<?php echo $this->_baseUrl ?>/images/photo_011.jpg">
                    <span class="png" style="bottom: -64px;"><b>ZHENRUOMENG</b></span></a></li>
            <li><a target="_blank" title="LW" href="works_view_12.html">
                    <img width="239" height="349" alt="LW" src="<?php echo $this->_baseUrl ?>/images/photo_012.jpg">
                    <span class="png" style="bottom: -64px;"><b>LW</b></span></a></li>
        </ul>
    </div>

    <div class="works3">
        <a target="_blank" class="more" title="更多时尚写真" href="works_3_1.html"></a>
        <ul>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_414.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_013.jpg">
                    <span class="png" style="bottom: -64px;"><b>DUMING</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_411.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_014.jpg">
                    <span class="png" style="bottom: -64px;"><b>GUOXHUNYAN</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_407.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_015.jpg">
                    <span class="png" style="bottom: -64px;"><b>FENGSHENGSI</b></span></a></li>
            <li><a target="_blank" title="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" href="works_view_398.html">
                    <img width="239" height="349" alt="深圳婚纱摄影 最新客片 深圳婚纱摄影工作室" src="<?php echo $this->_baseUrl ?>/images/photo_016.jpg">
                    <span class="png"><b>NANRENBANG</b></span></a></li>
        </ul>
    </div>

    <div class="banner2">
        <a target="_blank" title="盛夏·海韵蓝调-七星湾畔，浩海正蓝，邀您炫世起航" href="">
            <img width="960" height="535" alt="盛夏·海韵蓝调-七星湾畔，浩海正蓝，邀您炫世起航" src="<?php echo $this->_baseUrl ?>/images/big_ad_001.jpg"></a>
    </div>

    <div class="banner2">
        <a target="_blank" title="盛夏·海韵蓝调-七星湾畔，浩海正蓝，邀您炫世起航" href="">
            <img width="960" height="535" alt="盛夏·海韵蓝调-七星湾畔，浩海正蓝，邀您炫世起航" src="<?php echo $this->_baseUrl ?>/images/addr_bg.jpg"></a>
    </div>


    <div class="scene_i">
        <a target="_blank" class="more" title="更多最受欢迎取景地" href="scene.html"></a>
        <ul>
            <li><a target="_blank" title="外景婚纱照---高尔夫球会" href="scene_view_5.html">
                    <img width="479" height="235" src="upload/small/201405/201405031399101268.jpg">
                    <span class="png" style="bottom: -51px;"><b>高尔夫球会</b></span></a></li>
            <li><a target="_blank" title="外景婚纱照---七星湾游艇会" href="scene_view_3.html">
                    <img width="479" height="235" src="upload/small/201405/201405031399101425.jpg">
                    <span class="png"><b>七星湾游艇会</b></span></a></li>
            <li><a target="_blank" title="外景婚纱照---欢乐海岸" href="scene_view_4.html">
                    <img width="479" height="235" src="upload/small/201405/201405031399101454.jpg">
                    <span class="png" style="bottom: -51px;"><b>深圳湾公园</b></span></a></li>
            <li><a target="_blank" title="佛山创意园" href="scene_view_15.htmll">
                    <img width="479" height="235" src="upload/small/201405/201405031399101481.jpg">
                    <span class="png"><b>佛山创意园</b></span></a></li>
        </ul>
    </div>

</div>


<?php $this->renderPartial('/_include/footer')?>


