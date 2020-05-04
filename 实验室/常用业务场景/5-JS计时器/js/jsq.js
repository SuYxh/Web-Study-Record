window.onload = function(){
	
	var timer = null;
	var flag = false;
	var inputChild = $('top').children;
	// 事件源函数
	function $(id){
		return typeof id === 'string' ? document.getElementById(id) : null;
	}
	// 当时间数值小于10的时候加0
	function addZero(i) {
	    return i < 10 ? "0" + i: i + "";
	}
	// 计算格式化时间
	function compute(sumTime){
		var h = parseInt(sumTime / (60*60) % 24);
		var m = parseInt(sumTime / 60 % 60);
		var s = parseInt(sumTime % 60);
		h = addZero(h);
		m = addZero(m);
		s = addZero(s);
		return {h,m,s};
	}
	
	// 更新时间函数
	 function  updateTime(){
		 // 初始总时间
		var sumTime = parseInt($('hour').value*(60*60)) + parseInt($('minutes').value*60) + parseInt($('second').value);
		//计算时间并格式化，渲染初始时间
		var startValue = compute(sumTime);
		$('time').innerHTML = `${startValue.h}:${startValue.m}:${startValue.s}`
		$('hour').value = startValue.h;
		$('minutes').value = startValue.m;
		$('second').value = startValue.s;
		
		// 判断是否计时结束
		if (sumTime <= 0) {
			swal({
			  title: "计时结束",
			  text: "请不要忘记您的事情哦!",
			  icon: "success",
			  button:"OK"
			});
			clearInterval(timer);
			$('start').className = 'btn'
			flag = false;
			status(flag)
			return
		}
		sumTime--;
		// 后面时间的计算和渲染
		var newValue = compute(sumTime);
		if(newValue.m == 0 && newValue.h != 0){
			newValue.m = 59;
			newValue.h = 0+ '0';
		}
		$('time').innerHTML = `${newValue.h}:${newValue.m}:${newValue.s}`
		$('hour').value = newValue.h
		$('minutes').value = newValue.m;
		$('second').value = newValue.s;
		return sumTime;
	}
	
		
	// 状态判断函数
	function status(flag){
		if(flag == true){
			for (var i = 0; i < inputChild.length; i++) {
				inputChild[i].setAttribute('disabled','disabled')
			}
		} else {
			for (var i = 0; i < inputChild.length; i++) {
				inputChild[i].removeAttribute('disabled');
			}
		}
	}
	
	// 输入检测函数
	function detectionInput(){
		if($('second').value =='' || ($('second').value !='' && $('minutes').value =='' && $('hour').value !='') || ($('second').value >59 || $('minutes').value >59 || $('hour').value > 24) || ($('second').value.length >2 || $('minutes').value.length > 2  || $('hour').value.length > 2)){
			return false ;
		}
	}	
	
	// 开始事件
	$('start').onclick =function(){
		// detectionInput() === false ? (alert('请输入正确时间哦！')) : (flag = true,status(flag),clearInterval(timer),timer = setInterval(updateTime, 1000),updateTime())
		if(detectionInput() === false){
			swal({
			  title: "温馨提示",
			  text: "请输入正确时间哦!",
			  icon: "error",
			  button:"好的"
			});
		}else {
			flag = true;
			status(flag);
			$('start').className = 'btn disable'
			clearInterval(timer);
			timer = setInterval(updateTime, 1000);
			updateTime()
		}
	}
	
	// 暂停事件
	$('stop').onclick  = function(){
		detectionInput() === false ? (swal({title: "温馨提示",text: "请输入正确时间哦!",icon: "error",button:"好的"})) : ($('stop').innerHTML == '暂停' ? (clearInterval(timer),$('stop').innerHTML = '继续',flag = false,status(flag)) : (clearInterval(timer),timer = setInterval(updateTime, 1000),updateTime(),$('stop').innerHTML = '暂停',flag = true,status(flag)))
	}
	
	//结束事件
	$('end').onclick = function (){
		if (detectionInput() === false) {
			swal({
			  title: "温馨提示",
			  text: "请输入正确时间哦!",
			  icon: "error",
			  button:"好的"
			});
		} else{
			flag = false;
			status(flag);
			$('start').className = 'btn'
			clearInterval(timer);
			$('hour').value = 0;
			$('minutes').value = 0;
			$('second').value = 0;
			$('time').innerHTML = `${$('hour').value}:${$('minutes').value}:${$('second').value}`
		}	
	}
	
}