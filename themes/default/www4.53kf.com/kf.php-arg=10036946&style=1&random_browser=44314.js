(function(window, undefined) {
	var w = window,
		d = document,
		dd = d.documentElement,
		db = d.body,// db kf.php在head中时获取不到 
		head = d.head || d.getElementsByTagName("head")[0] || dd,
		isStrict = d.compatMode == "CSS1Compat",
		m = Math.max,
		ua = navigator.userAgent,
		np = navigator.platform,
		EN = w.encodeURIComponent,
		DE = w.decodeURIComponent;

	var $53 = function(id) {return d.getElementById(id) ? d.getElementById(id) : null};
	$53.version = '1.0.0';
	$53.global = {};
	$53.getKFscript = function(){
		if (typeof $53.global[''] == 'undefined' || $53.global[''] == null) {
			var scripts = document.getElementsByTagName('script'), len = scripts.length, i = 0;
			for(;i<len;i++){
				if (/kf\.php/img.test(scripts[i].src)) {
					$53.global[''] = scripts[i];
					break;
				}
			}
		}
		return $53.global[''];
	};
	$53.ready = (function(){
		var ie = !!(window.attachEvent && !window.opera),
			wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525),
			fn = [],
			run = function () {isReady = true; for (var i = 0; i < fn.length; i++) fn[i](); },
			d = document,
			isReady = false;
		return function (f) {
			if (d.body) {f();return;}
			if (isReady) {f();return;}
			if (!ie && !wk && d.addEventListener) return d.addEventListener('DOMContentLoaded', f, false);
			if (fn.push(f) > 1) return;
			if (ie) {
				(function () {
					if (!isReady) {
						try { d.documentElement.doScroll('left'); run(); }
						catch (err) { setTimeout(arguments.callee, 0); }
					}
				})();
			} else if (wk) {
				var t = setInterval(function () {
					if (/^(loaded|complete)$/.test(d.readyState))
						clearInterval(t), run();
				}, 0);
			}
		};
	})();
	$53.forEach = function(enumerable, iterator, context) {
		var i, n, t;
		if (typeof iterator == "function" && enumerable) {
			// Array or ArrayLike or NodeList or String or ArrayBuffer
			n = typeof enumerable.length == "number" ? enumerable.length: enumerable.byteLength;
			if (typeof n == "number") {
				if (Object.prototype.toString.call(enumerable) === "[object Function]") {
					return enumerable;
				}
				for (i = 0; i < n; i++) {
					t = enumerable[i];
					t === undefined && (t = enumerable.charAt && enumerable.charAt(i));
					iterator.call(context || null, t, i, enumerable);
				}
				// enumerable is number
			} else if (typeof enumerable == "number") {
				for (i = 0; i < enumerable; i++) {
					iterator.call(context || null, i, i, i);
				}
				// enumerable is json
			} else if (typeof enumerable == "object") {
				for (i in enumerable) {
					if (enumerable.hasOwnProperty(i)) {
						iterator.call(context || null, enumerable[i], i, enumerable);
					}
				}
			}
		}
		return enumerable;
	};
	$53.type = (function() {
		var objectType = {},
			nodeType = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment", ],
			str = "Array Boolean Date Error Function Number RegExp String",
			retryType = {
				'object': 1,
				'function': '1'
			},
			toString = objectType.toString;
		$53.forEach(str.split(" "), function(name) {
			objectType["[object " + name + "]"] = name.toLowerCase();
			$53["is" + name] = function(unknow) {
				return $53.type(unknow) == name.toLowerCase();
			}
		});
		return function(unknow) {
			var s = typeof unknow;
			return ! retryType[s] ? s: unknow == null ? "null": unknow._type_ || objectType[toString.call(unknow)] || nodeType[unknow.nodeType] || (unknow == unknow.window ? "Window": "") || "object";
		};
	})();
	$53.isObject = function(unknow) {
		return typeof unknow === "function" || (typeof unknow === "object" && unknow != null)
	};
	$53.isPlainObject = function(unknow) {
		var key, hasOwnProperty = Object.prototype.hasOwnProperty;

		if ($53.type(unknow) != "object") {
			return false;
		}
		if (unknow.constructor && !hasOwnProperty.call(unknow, "constructor") && !hasOwnProperty.call(unknow.constructor.prototype, "isPrototypeOf")) {
			return false;
		}
		for (key in unknow) {}
		return key === undefined || hasOwnProperty.call(unknow, key);
	};
	$53.extend = function(depthClone, object) {
		var second, options, key, src, copy, i = 1,
		n = arguments.length,
		result = depthClone || {},
		copyIsArray, clone;
		$53.isBoolean(depthClone) && (i = 2) && (result = object || {}); ! $53.isObject(result) && (result = {});
		for (; i < n; i++) {
			options = arguments[i];
			if ($53.isObject(options)) {
				for (key in options) {
					src = result[key];
					copy = options[key];
					if (src === copy) {
						continue;
					}
					if ($53.isBoolean(depthClone) && depthClone && copy && ($53.isPlainObject(copy) || (copyIsArray = $53.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $53.isArray(src) ? src: [];
						} else {
							clone = src && $53.isPlainObject(src) ? src: {};
						}
						result[key] = $53.extend(depthClone, clone, copy);
					} else if (copy !== undefined) {
						result[key] = copy;
					}
				}
			}
		}
		return result;
	}
	$53.extend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		data: function(key, value) {
			if(typeof value == 'undefined') {
				return $53.global[key] === undefined ? null : $53.global[key];
			} else {
				$53.global[key] = value;
			}
		},
		trim: function(text) {
			return text == null ? "": (text + "").replace(new RegExp('(^[\\s\\t\\xa0\\u3000\\uFEFF]+)|([\\u3000\\xa0\\s\\t\\uFEFF]+\x24)', 'g'), '');
		},
		getOs: function() {
			var allOs = ['iphone', 'android', 'macos', 'linux', 'win2008', 'win8', 'win7', 'winvista', 'win98', 'win2000', 'win2003', 'winxp', 'os_other'];
			var isWin = (np == "Win32") || (np == "Windows");
			if (isWin) {
				var winos = {
					'win98': '(Win98)|(Windows 98)',
					'win2000': '(Windows NT 5.0)|(Windows 2000)',
					'winxp': '(Windows NT 5.1)|(Windows XP)',
					'win2003': '(Windows NT 5.2)|(Windows 2003)',
					'win7': '(Windows NT 6.1)|(Windows 7)',
					'winvista': '(Windows NT 6.0)|(Windows Vista)',
					'win8': '(Windows NT 6.2)|(Windows 8)',
					'win2008': '(Windows NT 6.1)|(Windows 2008)'
				};
				for (var i in winos) {
					if (winos.hasOwnProperty(i) && (new RegExp(winos[i], 'i')).test(ua)) return i;
				}
			}
			var isMac = (np == "Mac68K") || (np == "MacPPC") || (np == "Macintosh") || (np == "MacIntel");
			if (isMac) return "macos";
			if ((np == "X11") && !isWin && !isMac) return "unix";
			if ((np.toLowerCase() + ua.toLowerCase()).indexOf('iphone') > -1) return 'iphone';
			if (np.toLowerCase().indexOf("linux") > -1 && ua.toLowerCase().indexOf('android') > -1) return 'android';
			if (np.indexOf("Linux") > -1) return "linux";
			return "os_other";
		},
		getBrowser: function() {
			var browsers = {
				'sogou': 'sogou',
				'maxthon': 'maxthon',
				'opera': 'opera',
				'qq': 'tencent',
				'uc': 'uc',
				'360': '360',
				'firefox': 'firefox',
				'chrome': 'chrome',
				'safari': 'safari',
				'ie10': 'msie 10',
				'ie9': 'msie 9',
				'ie8': 'msie 8',
				'ie7': 'msie 7',
				'ie6': 'msie 6',
				'ie5': 'msie 5'
			};
			for (var i in browsers) {
				if (browsers.hasOwnProperty(i) && (new RegExp(browsers[i], 'i')).test(ua)) return i;
			}
			return 'ua_other';
		},
		getScreen: function() {
			return screen.width + "_" + screen.height;
		},
		setCookie: function(key,value,options) {
			if (!$53.isCookieKey(key)) {return;}
			options = options || {};
			var expires = options.expires;
			if ('number' == typeof options.expires) {
				expires = new Date();
				expires.setTime(expires.getTime() + options.expires*1000);
			}
			document.cookie = key + "=" + EN(value)
			+ (options.path ? "; path=" + options.path : "")
			+ (expires ? "; expires=" + expires.toUTCString() : "")
			+ ("; domain=" + (options.domain ? options.domain : location.hostname))
			+ (options.secure ? "; secure" : "");
		},
		getCookie: function(key) {
			if ($53.isCookieKey(key)) {
				var reg = new RegExp('(^| )' + key + '=([^;]*)(;|\x24)'), result = reg.exec(document.cookie);
				if (result) {
					var value = (result[2] === undefined || result[2] === null) ? '' : result[2];
				}
			}
			if ('string' == typeof value) {
				return DE(value);
			}
			return '';
		},
		isCookieKey:function(key) {
			return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(key);
		},
		getWH: function() { // 获取窗口可用大小 
			return {
				W: (isStrict ? dd: d.body).clientWidth,
				H: (isStrict ? dd: d.body).clientHeight
			};
		},
		getS: function() {// 获取滚动距离 
			return {
				L: m(dd.scrollLeft, d.body.scrollLeft),
				T: m(dd.scrollTop, d.body.scrollTop)
			};
		},
		htmlDecode: function(text) {
			return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&douhao/g, ",").replace(/&jinghao/g, '#');
		},
		creElm: function(o, t, a, loc) {
			loc = loc || 0;
			var b = d.createElement(t || 'div'), c = (a || d.body || dd);
			for (var p in o) {
				if (!o.hasOwnProperty(p)) continue;
				p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
				if(p == 'id' && $53(o[p])) $53(o[p]).parentNode.removeChild($53(o[p]));
			}
			if (!loc) return c.insertBefore(b, c.firstChild);
			else return $53.insertAfter(b, c.lastChild);
		},
		insertAfter: function(newEl, targetEl)
		{
			var parentEl = targetEl.parentNode;
			if(parentEl.lastChild == targetEl)
			{
				return parentEl.appendChild(newEl);
			}else
			{
				return parentEl.insertBefore(newEl,targetEl.nextSibling);
			}
		},
		createScript: function(id,url){
			$53.creElm({
				'id':id == '' ? 'hz6d_script_' + Math.random() : id,
				'src':url,
				'charset':'utf-8'
			},'script',head);
		},
		before: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return (elem.parentNode || d.body || dd).insertBefore(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		after: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return $53.insertAfter(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		insertFixed: function(html){ // 图标嵌入固定模式用 //
			$53.ready(function(){
				var script = $53.getKFscript(), elem = null;
				if (script.parentNode == head) elem = $53.before(html, d.body.firstChild);
				else elem = $53.after(html, script);
			});
		},
		getTimeTo24: function(){
			//get senconds time from now to tomorrow 00:00
			var d1 = new Date(),
				d2 = new Date();
			d1.setDate(d1.getDate() + 1);
			d1.setHours(0);
			d1.setMinutes(0);
			d1.setSeconds(0);
			return (d1.getTime() - d2.getTime())/1000;
		},
		json2str : function(json,code){
			var arr = [];
			var encode =  code == 'urlencode' ? $53.EN : function(data){return data};
			for(var i in json) {
				if (json.hasOwnProperty(i)) {
					arr.push(i + '=' + encode(json[i]));
				}
			}
			return arr.join('&');
		},
		addEvent : function( obj, type, fn ) {
			if ( obj.attachEvent ) {
				obj['e'+type+fn] = fn;
				obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else {
				obj.addEventListener( type, fn, false );
			}
		},
		removeEvent : function( obj, type, fn ) {
			if ( obj.detachEvent ) {
				obj.detachEvent( 'on'+type, obj[type+fn] );
				obj[type+fn] = null;
			} else {
				obj.removeEventListener( type, fn, false );
			}
		}
	});
	// window.open 方法重写 
	// 支持ie/ff/chrome/safari/opera 
	var _open = window.open;
	window.open = function(sURL, sName, sFeatures, bReplace) {
		if (sURL == undefined) {
			sURL = ''
		}
		if (sName == undefined) {
			sName = ""
		}
		if (sFeatures == undefined) {
			sFeatures = ""
		}
		if (bReplace == undefined) {
			bReplace = false
		}
		if (/webCompany.php|webClientMin.php/.test(sURL)) {
			sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
		} else if ('http://www.manyvisions.net/chatwindow.html?arg=10036946&style=1&kflist=off&kf=531e737a89325ac34a7fb369,531e738889325ac34a7fb7ab&zdkf_type=2&language=zh-cn&charset=gbk&lytype=0&referer={hz6d_referer}{hz6d_keyword}&tpl=crystal_blue' != '') {
			var _zdyurl = 'http://www.manyvisions.net/chatwindow.html?arg=10036946&style=1&kflist=off&kf=531e737a89325ac34a7fb369,531e738889325ac34a7fb7ab&zdkf_type=2&language=zh-cn&charset=gbk&lytype=0&referer={hz6d_referer}{hz6d_keyword}&tpl=crystal_blue';
			if (sURL.indexOf(_zdyurl) > -1) {
				sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
			}
		}
		sURL = sURL.replace('&referer={hz6d_referer}',hz6d_referer);
		var win = _open(sURL, sName, sFeatures, bReplace);
		return win;
	}
	window.$53 = $53;
})(window);
	// set my site uid -> crm
	//$53.setCookie('ucust_id','123456',{
			//expires:30*365*24*3600
	//});
	// set 53kf guest_id 设置UV 
	if (!$53.getCookie('53gid0')){
		$53.setCookie('53gid0','38516674404',{
			expires:$53.getTimeTo24()
		});
		$53.data('is_uv',1);
	} else if($53.getCookie('53gid2')){
		$53.data('is_uv',0);
	}
	// 设置RV 
	if (!$53.getCookie('53gid1')){
		$53.setCookie('53gid1','38516674404',{
			expires:86400
		});
		$53.data('is_rv',0);
	} else if($53.getCookie('53gid2')){
		$53.data('is_rv',1);
	}
	// 设置 新老访客 
	if(!$53.getCookie('53gid2')) {
		$53.setCookie('53gid2','38516674404',{
			expires:10*365*24*3600
		});
		// new visitor
		$53.setCookie('visitor_type','new');
	} else if($53.getCookie('53gid2')){
		// old visitor
		$53.setCookie('visitor_type','old');
	}
	// record once visit uuid
	if($53.getCookie('53uvid') != 1) {
		$53.setCookie('53uvid',1);
		$53.data('page_type',1);
	} else {
		$53.data('page_type',2);
	}
	$53.data('visit_uuid','cf30e5fd7f0075a340ef274a826df3ed');
	$53.data('in_time','2014-07-25 11:42:24');
	$53.data('company_id','72036946');
	$53.data('visit_num',$53.getCookie('53uvid'));

	var hz6d_referer = '&referer=' + $53.EN(window.location.href); //当前访问页面 
	var kf_success=1, kftype=2,
			powered_by_53kf_url = 'http://www.53kf.com/',
			powered_by_53kf_txt = 'Powered by 53KF';
	// 获取访问的入口来源页面:搜索引擎/外部链接/直接输入 
	var hz6d_from_page = $53.getCookie("53kf_72036946_keyword"),
			kf_72036946_keyword_ok = $53.getCookie("kf_72036946_keyword_ok");
	if (kf_72036946_keyword_ok != 1)
	{
		hz6d_from_page = document.referrer;
	}
	$53.data('page_referer',hz6d_from_page);

	$53.setCookie("53kf_72036946_keyword",hz6d_from_page);
	$53.setCookie("kf_72036946_keyword_ok",1);
	hz6d_from_page_new = "&keyword=" + $53.EN(hz6d_from_page);
	
	function hz6d_html_replace(html)
	{
		return html.replace(/{hz6d_keyword}/gim, hz6d_from_page_new + "&tfrom=1");
	}

	// has defined <!DOCTYPE... > 

	function hasdoctype()
  {
		if (document.compatMode == "BackCompat")
		{
			ret = false;
		}
		else
		{
			ret = true;
		}
		return ret;
	}

	function detectBrowser()
	{
		var ret = "ie6"; // default
		var user_agent = navigator.userAgent;
		if (user_agent.indexOf("compatible") > -1)
		{
			if (user_agent.indexOf("MSIE 6.0") > -1)
			{
				ret = "ie6";
			}
			else if (user_agent.indexOf("MSIE 7.0") > -1)
			{
				ret = "ie7";
			}
			else if (user_agent.indexOf("MSIE 8.0") > -1)
			{
				ret = "ie8";
			}
			if (user_agent.indexOf("360") > -1)
			{
				ret = "360";
			}
		}
		else if (user_agent.indexOf("Gecko") > -1)
		{
			ret = "firefox";
		}
		if ("" == "TheWorld")
		{
			ret = "TheWorld";
		}
		return ret;
	}
	
	// 间距小于步进，则移动间距的距离 
	function smoothMove(start, end)
	{
		var step = Math.abs(end - start);
		var forword = end - start;
		if (step > 2)
		{
			step = Math.ceil(step * 0.2) * (forword / Math.abs(forword));
		}
		else
		{
			step = step * (forword / Math.abs(forword));
		}
		posi = start + step;
		if (step > 0)
		{
			if (posi > end) posi = end;
		}
		else
		{
			if (posi < end) posi = end;
		}
		return posi;
	}
	
	var hasdoctype = hasdoctype();
	var browser = detectBrowser();
	// 点击图标设置变量 

	function setIsinvited()
	{
		try
		{
			onliner_zdfq = 2;
			if (acc_autotype == 3)
			{
				document.cookie = "onliner_zdfq72036946=" + onliner_zdfq;
			}
		}
		catch (e)
		{}
	}
	var onliner_zdfq = $53.getCookie("onliner_zdfq72036946"); // onliner_zdfq: 0.初始值 2.点击接受 3.点击拒绝 
	if (onliner_zdfq == "")
	{
		onliner_zdfq = 0;
		document.cookie = "onliner_zdfq72036946=" + onliner_zdfq;
	}
	var hz6d_kf_type = 2;
	var hz6d_pos_model = 3;
	var hz6d_hidden = 1;
	var hz6d_close_icon = 0;
	
	function AccCallBack(){}
	// 加载ivt.php，即中间的接受邀请层 
	if (!$53("ivt_script") && !0){
		//document.write("<scr"+"ipt src='http://www4.53kf.com/kf_ivt.php?arg=10036946&test_do=&style=1&isonline=1&kfonline=1&lang=zh-cn&resize=yes&charset=gbk&kflist=off&kf=531e737a89325ac34a7fb369,531e738889325ac34a7fb7ab&zdkf_type=2"+ hz6d_referer + hz6d_from_page_new + "&lytype=0&tpl_name=crystal_blue&tpl_width=703&tpl_height=473' type='text/javascript' id='ivt_script' charset='utf-8'></scr"+"ipt>");
		$53.createScript('ivt_script', 'http://www4.53kf.com/kf_ivt.php?arg=10036946&test_do=&style=1&isonline=1&kfonline=1&lang=zh-cn&resize=yes&charset=gbk&kflist=off&kf=531e737a89325ac34a7fb369,531e738889325ac34a7fb7ab&zdkf_type=2'+ hz6d_referer + hz6d_from_page_new + '&lytype=0&tpl_name=crystal_blue&tpl_width=703&tpl_height=473&' + Math.random());
	}	  

	  var kf_script_num = 0;
	  var script_total = document.getElementsByTagName('script');
	  for (var i = 0; i < script_total.length; i++)
	  {
	    if (script_total[i].src.toLowerCase().indexOf('http://www4.53kf.com/kf.php') != -1)
	    {
	      kf_script_num += 1;
	      break;
	    }
	  }
		if (kf_script_num <= 1)
		{
	    function init_zdytb_arr(zdytb_str)
	    {
	      // 生成 图标 数组 
	      var zdytb_arrs = [];
	      var tmp_arrs = zdytb_str.split('#');
	      for (var i = 0; i < tmp_arrs.length; i++)
	      {
	        zdytb_arrs[i] = [];
	        zdytb_arrs[i] = tmp_arrs[i].split(',');
	      }
	      return zdytb_arrs;
	    }
	
	    function get_input_name_pos(_input_name_arr,_input_name)
	    {
	      // 获取自定义图标 输入值位置 
	      var _pos = 0;
	      for (var i = 0; i < _input_name_arr.length; i++)
	      {
	        if (_input_name_arr[i] == _input_name)
	        {
	          _pos = i;
	          break;
	        }
	      }
	      return _pos;
	    }
	
	    // 组装自定义图标div 
	    function get_zdytb_divs(on_off,zdytb_on_arrs,zdytb_off_arrs,kficon_click_str)
	    {
	      var element_arrs = (String(on_off) == '1') ? zdytb_on_arrs : zdytb_off_arrs;
	      
	      var divs_str = '';
	      for (var i = 0; i < element_arrs.length; i++)
	      {
	        var element_arr = element_arrs[i];
	        var css_arr_1 = css_name_arr_1;
	        //var css_arr_2 = css_name_arr_2;
	        var css_arr_3 = css_name_arr_3;
	        var css_str = '';
	        var link_str = '';
	        var target_str = '';
	        var text_str = '';
	        var click_str = '';
	
	        // 处理css 
	        for (var j = 0;j < css_arr_3.length; j++)
	        {
	          var css_pos = css_arr_3[j];
	          if (element_arr[css_pos] == '' || element_arr[css_pos] == '-')
	            continue;
	          if (css_pos == 8 && element_arr[css_pos].indexOf('http://') == -1)
	            element_arr[css_pos] = "http://" + "www4.53kf.com" + "/" + element_arr[css_pos];
	          css_str += css_arr_1[j].replace("c_c",element_arr[css_pos]) + ';';
	        }
	        
	        // 处理文本内容 
	        var text_type_pos = get_input_name_pos(input_name_arr,'text_type');
	        var text_content_pos = get_input_name_pos(input_name_arr,'text_content');
	        var tmp_type = $53.trim(element_arr[text_type_pos]);
	        var tmp_text = $53.htmlDecode($53.trim(element_arr[text_content_pos]).replace(/&amp;/g, '&'));
	        if (tmp_type != '' && tmp_type != '-' && tmp_text != '' && tmp_text != '-')
	        {
	          text_str = tmp_text; 
	        }
	        
	        // 处理连接 
	        var element_type_pos = get_input_name_pos(input_name_arr,'element_type');
	        var link_href_pos = get_input_name_pos(input_name_arr,'link_href');
	        var tmp_e_type = $53.trim(element_arr[element_type_pos]);
	        var tmp_herf = $53.htmlDecode($53.trim(element_arr[link_href_pos]).replace(/&amp;/g, '&'));
	        var im_account_pos = get_input_name_pos(input_name_arr,'im_account');
	        var tmp_im_account = $53.trim(element_arr[im_account_pos]);
	        if ((tmp_e_type == '' || tmp_e_type == '-') && $53.trim(tmp_herf).replace('http://','') != '' && $53.trim(tmp_herf) != '-')
	        {
	          link_str = $53.trim(tmp_herf);
	        }
	        else
	        {
						switch (tmp_e_type)
	          {
	            case 'chat': click_str = kficon_click_str; break;
	            case 'close': click_str = 'this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)'; break; 
	            case 'etel': click_str = 'window.open(\'http://tb.53kf.com/eht.php?company_id=72036946&style_id=106062406\',\'_blank\',\'height=400,width=300,top=100,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no\')'; break;
	            case 'qq':
								if (tmp_im_account != '' && tmp_im_account != '-'){
									if (tmp_im_account.toLowerCase().indexOf('biz') > -1){ //biz qq
										tmp_im_account = tmp_im_account.replace('biz','');
										link_str = 'http://www4.53kf.com/bizqq.php?qq=' + tmp_im_account + '&from=' + window.encodeURIComponent(window.location.href);
									} else{
										link_str = 'tencent://message/?uin=' + tmp_im_account;
									}
									if(tmp_im_account == '97559766')
										link_str="http://www.53kf.com/?www.53rj.com";
								}
								break;
	            case 'wang': if (tmp_im_account != '' && tmp_im_account != '-') link_str = 'aliim://sendmsg?touid=cntaobao' + tmp_im_account; if(tmp_im_account == 'fonlue') link_str='http://www.53kf.com/?www.53rj.com'; break;
	            case 'msn': if (tmp_im_account != '' && tmp_im_account != '-') link_str = 'msnim:chat?contact=' + tmp_im_account; if(tmp_im_account.indexOf('fonlue') > -1) link_str='http://www.53kf.com/?www.53rj.com'; break;
	            default: link_str = '';click_str = '';
	          }
	        }
	        // 处理是否新窗口 
	        var link_target_pos = get_input_name_pos(input_name_arr,'link_target');
	        var tmp_target = $53.trim(element_arr[link_target_pos]);
	        if (tmp_target == '' || tmp_target == '-' || tmp_target == '_blank') target_str = '_blank';
	        else target_str = '_self';
	        var onclick_str = '';
	        if (link_str == '' && click_str != '') onclick_str = 'onclick="' + click_str + ';"';
	        else if (link_str != ''&& click_str != '') onclick_str = ' onclick="' + click_str + ';window.open(\'' + link_str +'\',\'' + target_str + '\');" ';
	        else if (link_str != ''&& click_str == '') onclick_str = ' onclick="window.open(\'' + link_str +'\',\'' + target_str + '\');" ';
	        
	        if (link_str != '' || click_str != '') css_str += "cursor: pointer;";
	        var height_str = element_arr[get_input_name_pos(input_name_arr,'div_height')];
	        if (text_str != '') css_str += "line-height: " + height_str + "px;";
	        //if (text_str != '') css_str += "padding-top: " + parseInt(height_str/2) + "px;" + "padding-bottom: " + parseInt(height_str/2) + "px;";
	        // 组装成div 
	        
	        var title_str = '';
	        if (text_str != ''&& onclick_str != '')
	        {
	          title_str = 'title=\"' + text_str + '\"';
	        }
				if(tmp_e_type != 'qq' && tmp_e_type != 'msn' && tmp_e_type != 'wang' )	link_str = link_str.replace('http://www.53kf.com/',powered_by_53kf_url);
				if(tmp_e_type != 'qq' && tmp_e_type != 'msn' && tmp_e_type != 'wang' )	onclick_str =  onclick_str.replace('http://www.53kf.com/',powered_by_53kf_url);
	        if(i == 0)
	        {
	          onclick_str = '';
	          divs_str += "<div style=\"position: relative;overflow: hidden;z-index:10086;" + css_str + "\" " + onclick_str + ">";
	        }
	        else if(tmp_im_account != '' && tmp_im_account != '-' && link_str != '')
	        {
	          divs_str += "<a href=\"" + link_str+ "\" target=\"_blank\"><div style=\"position: absolute;overflow: hidden;text-decoration:none;" + css_str + "\" " + title_str + ">" + text_str + "</div></a>";
	        }
	        else
	        {
	          divs_str += "<div style=\"position: absolute;overflow: hidden;" + css_str + "\" " + onclick_str + title_str + ">" + text_str + "</div>";
	        }
	      }
	      divs_str += '</div>';
	      return divs_str;
	    }
	
	    // 定义全局解码数组 
	    var css_name_arr_1 = ["width: c_cpx","height: c_cpx","left: c_cpx","top: c_cpx","z-index: c_c","background-image: url(c_c)","background-repeat: c_c","background-color: #c_c","font-size: c_cpx","color: #c_c","text-align:c_c","font-weight: c_c","font-style: c_c","text-decoration: c_c","font-family:c_c","border-style: c_c","border-width: c_cpx","border-color:#c_c;word-break:break-all;"];
	    var css_name_arr_2 = ["div_width","div_height","div_left","div_top","div_zindex","bg_img_url","bg_img_repeat","bg_color","font_size","text_color","text_align","font_bold","font_italic","text_underline","font_family","border_style","border_width","border_color"];
	    var css_name_arr_3 = [3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23];
	    var input_name_str = 'element_id#element_name#element_type#div_width#div_height#div_left#div_top#div_zindex#bg_img_url#bg_img_repeat#bg_color#im_account#text_type#text_content#font_size#text_color#text_align#font_bold#font_italic#text_underline#font_family#border_style#border_width#border_color#link_href#link_target';
	    var input_name_arr = input_name_str.split('#'); // 初始化解码数组 
		// start 客服图标转义url 
	    function hz6d_clicurl(on_off,zdytb_on_arrs,zdytb_off_arrs,kficon_click_str)
	    {
	      var element_arrs = (String(on_off) == '1') ? zdytb_on_arrs : zdytb_off_arrs;
	      var divs_str = '';
				divs_str = element_arrs.replace(/operating="([^"]*)"/g,function(str){
					var vals = str.split('"');
					if(vals[1])
					{
						var click_str = '';
						var link_str ='';
						var target_str = '_blank';
						var hrs = '';
						var valst = vals[1].split("|");
						switch(valst[0])
						{
							case 'KF': click_str = hz6d_html_replace(kficon_click_str); break;
							case 'CLOSE': click_str = 'this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)'; break;
							case 'ETEL': click_str = 'window.open(\'http://tb.53kf.com/eht.php?company_id=72036946&style_id=106062406\',\'_blank\',\'height=400,width=300,top=100,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no\')'; break;
							case 'QQ': 
								if(valst[1])
								{
									if(valst[1].toLowerCase().indexOf('biz') > -1)
									{
										var qq = valst[1].replace('biz','');
										link_str = 'http://www4.53kf.com/bizqq.php?qq=' + qq + '&from=' + window.encodeURIComponent(window.location.href);
									}
									else
									{
										link_str = 'tencent://message/?uin=' + valst[1];
									}
									if(valst[1] == '97559766')
										link_str="http://www.53kf.com/?www.53rj.com";
								};
								break;
							case 'MSN': if (valst[1]) link_str = 'msnim:chat?contact=' + valst[1]; if(valst[1].indexOf('fonlue') > -1) link_str='http://www.53kf.com/?www.53rj.com'; break;
							case 'WW': 
								if (valst[1]) 
								{
									if(valst[1].toLowerCase().indexOf('###') > -1)
									{
										var wang = valst[1].replace('###','');
										link_str = 'http://amos.alicdn.com/msg.aw?v=2&uid=' + wang +'&site=enaliint&s=21&charset=UTF-8';
									}
									else
									{
										link_str = 'aliim://sendmsg?touid=cntaobao' + valst[1];
										//link_str = 'http://amos.alicdn.com/msg.aw?v=2&uid=' + valst[1]+'&site=cnalichn&s=10&charset=UTF-8';
									}
									if(valst[1] == 'fonlue') link_str='http://www.53kf.com/?www.53rj.com'; 
								}
								break;
							case 'HYLINK': if (valst[1]) link_str = valst[1]; if(valst[2]) target_str = valst[2]; hrs = 1;break;
							default: click_str = '';link_str = '';
						}
						var onclick_str = '';
						if (link_str == '' && click_str != '') onclick_str = 'onclick="' + click_str + ';"';
						else if (link_str != ''&& click_str != '') onclick_str = ' onclick="' + click_str + ';window.open(\'' + link_str +'\',\'' + target_str + '\');" ';
						else if (link_str != ''&& click_str == '' && !hrs) onclick_str = ' onclick="window.open(\'' + link_str +'\');" ';
						else if (link_str != ''&& click_str == '' && hrs) onclick_str = 'href="'+ link_str+'" target="'+ target_str +'"';
						return onclick_str;
					}
				});
				return divs_str;
	    }
			//end 
		}
	  
	if (!$53("stat_script")){
		//document.write("<scr"+"ipt src='http://www4.53kf.com/stat.php?com_id=72036946" + hz6d_referer + hz6d_from_page_new + "' type='text/javascript' id='stat_script'></scr"+"ipt>");
		$53.createScript('stat_script','http://www4.53kf.com/stat.php?com_id=72036946' + hz6d_referer + hz6d_from_page_new);
	}(function() {
	var datas = {
		visit_uuid : 'cf30e5fd7f0075a340ef274a826df3ed',
		company_id : '72036946',
		guest_id : '38516674404',
		site_uid : '11111111',
		in_time : '2014-07-25 11:42:24',
		page_url : location.href,
		browser : $53.getBrowser(),
		ip : 'http://www4.53kf.com/163.179.46.14',
		system : $53.getOs(),
		screen : $53.getScreen(),
		is_uv : $53.data('is_uv'),
		is_rv : $53.data('is_rv'),
		page_referer : $53.data('page_referer'),
		page_type : $53.data('page_type'),
		visitor_type : $53.getCookie('visitor_type') == 'new' ? 1 : 0 ,
		visit_num : $53.data('visit_num')
	};
	if (!$53("stat_new_script")) {
		//document.write("<scr"+"ipt src='http://www4.53kf.com/stat_new.php?" + $53.json2str(datas,'urlencode') + "' type='text/javascript' id='stat_new_script'></scr"+"ipt>");
	}
})();