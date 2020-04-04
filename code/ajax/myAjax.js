function myAjax(obj){
	// 默认对象 有些参数不用传入也可以
	var defaults =  {
		type:"GET",
		url:"#",
		dataType:"json",
		data:{},
		async:true,
		success:function(){console.log(result)}
	};
	// obj的属性覆盖到defaults的属性
	// 1、如果一些属性只存在obj中，会给defaults中添加属性
	// 2、如果一些属性在obj 和 defaults 中都存在，则 defaults中的属性会被覆盖
	// 3、如果一些属性只存在与 defaults 中，那么将会被保留作为预定义的值
	for(var key in obj){
		defaults[key] = obj[key];
	}
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//获取一下参数 样例： username=jarvis&phonenum=1998
	var params = "";
	for(var attr in defaults.data){
		params += attr + "=" + defaults.data[attr] + "&";
	}
	// 如果只有一个，参数或者多个参数的时候，最后一个参数后面会带有 & ，因此需要去掉，做字符串切割
	if(params){
		params = params.substring(0,params.length-1);
	}
	if (defaults.type == "GET") {
		defaults.url += "?" + params;
	}
	xhr.open(defaults.type,defaults.url,defaults.async);
	if(defaults.type == "GET"){
		xhr.send(null);
	} else if(defaults.type == "POST"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(params);
	}
	if(defaults.async){
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var result = null;
				if (defaults.dataType  == "json") {
					result = xhr.responseText;
					result = JSON.parse(result);
				} else if (defaults.dataType == "xml") {
					result = xhr.responseXML;
				} else {
					result = xhr.responseText;
				}
				defaults.success(result);
			}
		}
	} else {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var result = null;
			if (defaults.dataType  == "json") {
				result = xhr.responseText;
				result = JSON.parse(result);
			} else if (defaults.dataType == "xml") {
				result = xhr.responseXML;
			} else {
				result = xhr.responseText;
			}
			defaults.success(result);
		}
	}
};				
