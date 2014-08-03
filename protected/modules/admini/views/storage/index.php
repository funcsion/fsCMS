<?php $this->renderPartial('/_include/header'); ?>
    <div class="wu-example" id="uploader">
        <div class="queueList">
            <div class="placeholder" id="dndArea">
                <div id="filePicker" class="webuploader-container">
                    <div class="webuploader-pick">点击选择图片</div>
                    <div id="rt_rt_18uee9up0uo0j291irq9a36361"
                         style="position: absolute; top: 0px; left: 448px; width: 168px; height: 44px; overflow: hidden; bottom: auto; right: auto;">
                        <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple"
                               accept="image/*"><label
                            style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: none repeat scroll 0% 0% rgb(255, 255, 255);"></label>
                    </div>
                </div>
                <p>或将照片拖到这里，单次最多可选300张</p>
            </div>
            <ul class="filelist"></ul>
        </div>
        <div style="display:none;" class="statusBar">
            <div class="progress" style="display: none;">
                <span class="text">0%</span>
                <span class="percentage" style="width: 0%;"></span>
            </div>
            <div class="info">共0张（0B），已上传0张</div>
            <div class="btns">
                <div id="filePicker2" class="webuploader-container">
                    <div class="webuploader-pick">继续添加</div>
                    <div id="rt_rt_18uee9up71pnou11lk9j0skt66"
                         style="position: absolute; top: 0px; left: 0px; width: 1px; height: 1px; overflow: hidden;">
                        <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple"
                               accept="image/*"><label
                            style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: none repeat scroll 0% 0% rgb(255, 255, 255);"></label>
                    </div>
                </div>
                <div class="uploadBtn state-pedding">开始上传</div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        // 添加全局站点信息
        var BASE_URL = '<?php echo $this->_baseUrl?>/static/js/webuploade';
    </script>
    <script src="<?php echo $this->_baseUrl ?>/static/js/webuploader/webuploader.js"></script>
    <script src="<?php echo $this->_baseUrl ?>/static/js/webuploader/full.js"></script>
<?php $this->renderPartial('/_include/footer'); ?>