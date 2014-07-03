/**
 * Created by andywong on 5/8/14.
 */
// 表格数据全选或取消全选
function isSelAll(btnall){
	var className = $(btnall).attr("id");
	if ($(btnall).is(":checked")) {
		$("."+className).prop("checked", true);
	} else {
		$("."+className).prop("checked", false);
	}
}
function checkallbox(btnall){
	var className = $(btnall).attr("class");
	for(i = 0; i < $("."+className).length; i++){
		if($("."+className).eq(i).is(":checked") == false ){
			return false;
		}
	}
	return true;
}

function isSelBoxAll(btnall){
	var className = $(btnall).attr("class");
	if(checkallbox(btnall) == false){
		$("#"+className).prop("checked", false);
	}else{
		$("#"+className).prop("checked", true);
	};
}