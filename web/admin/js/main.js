$(function () {
	//$("#leftmenu").load("leftmenu.html");
	//$('.nav-stacked a:first').tab('show');
	/*色彩选择器
	 $('#colorSelector').ColorPicker({
	 color: '#0000ff',
	 onShow: function (colpkr) {
	 $(colpkr).fadeIn(500);
	 return false;
	 },
	 onHide: function (colpkr) {
	 $(colpkr).fadeOut(500);
	 return false;
	 },
	 onChange: function (hsb, hex, rgb) {
	 $('#colorSelector div').css('backgroundColor', '#' + hex);
	 $('#colorpickerField1').val('#' + hex);
	 }
	 });
	 */
	/*展开增加库存表单*/
	$(".addbtn").click(
		function () {
			$(".form-addku").toggle({display: "block"});
		}
	);
	/*添加产品第二步*/
	//比较两较div高度





	/*上传图片页面要用到的js*/
	/*
	 $("#uploadpicx").load("pic-list.html");
	 $(".uploadpic").click(function(){
	 $.ajax({
	 url: "uppic.html",
	 cache: false,
	 success: function(html){
	 $("#uploadpicx").html(html);
	 }
	 });
	 });

	 $(".librarypic").click(function(){
	 $.ajax({
	 url: "pic-list.html",
	 cache: false,
	 success: function(html){
	 $(".modal-body").html(html);
	 }
	 });
	 });
	 */
	/*设置类别页面要用到的js*/
	$(".cate_select li").click(function () {
		var index = $(this).index();
		$(".cate_select li").css({"border-color": "#b3b3b3", background: "#eee"});
		$(".cate_select li a").css({color: ""});
		$(this).css({"border-color": "#406299", background: "#f1f1f1"});
		$(this).children().css({color: "#406299"});
	});

	$("#listm li").hover(function (e) {
		$("#listm li").css({background: ""});
		$(this).css({background: "#eee"});
	});


	/************
	 booklist page
	 *************/

	$(".btn_more").click(function () {
		var id_wrap = $(this).attr("href");
		var wrap_height = $(id_wrap).height();
		var table_height = $(id_wrap).children("table").height() + 1;
		if (wrap_height != table_height) {
			$(id_wrap).animate({height: table_height + "px"}, 500);
		} else {
			$(id_wrap).animate({height: "115px"}, 500);
		}
	});

	$(".actionalert").click(function () {
		$(".loadding-yimin").hide();
		var alertxt = $(this).attr("title");
		$("#errortxt").html(alertxt);
	});

	$(".loadpage").click(function () {
		var post_data = $(this).attr("data-url");
		$(".loadding-yimin").show();
		$("#errortxt").html("");
		$.ajax({
			url: "index.php?r=account/role&act=assign",
			cache: false,
			type: "POST",
			data: post_data,
			success: function (html) {
				$("#errortxt").html(html);
				$(".loadding-yimin").hide();
			}
		});
	});

	//$('.my-tooltip').tooltip();

	$("#add-member,#addm").click(function () {
		$("#addmember-foot").hide();
		$(".loadding-yimin").show();
		$("#addmember-wrap").html("");
		$.ajax({
			url: "index.php?r=account/role&act=search-user",
			cache: false,
			success: function (html) {
				$("#addmember-wrap").html(html);
				$(".loadding-yimin").hide();
			}
		});
	});


	// 冻结操作
	$(".freeze-edit").click(function () {
		var url = $(this).attr("data-url");
		//alert(url);
		var title = $(this).attr("title");
		$(".loadding-yimin").show();
		$("#addmember-wrap").html(" ");
		$("#addpagetitle").html(" ");
		$.ajax({
			url: url,
			cache: false,
			type: "POST",
			success: function (html) {
				$("#addmember-wrap").html(html);
				$("#addpagetitle").html(title);
				$(".loadding-yimin").hide();
			}
		});

	});

	$("#freeze").click(function () {
		//$('#addpage').modal('hide');
		var url = $(this).attr("data-url");

		// 得到checkbox数组
		var elements = document.getElementsByName("choose");
		var str = "";
		// 取得所选择的角色
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].checked) {
				str += elements[i].value + "-";
			}
		}
		// 输出
		if (str != "") {
			ban_id = str.substring(0, str.length - 1);
			//alert(ban_id);
			$.ajax({
				url: url,
				cache: false,
				//type:"POST",
				data: "ban_id=" + ban_id,
				success: function () {
					//alert("sdsl");
				}
			})
		}
		else {

			alert("请选择需要冻结的项目");
			return false;
		}

	});
});