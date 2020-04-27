 window.onload = function () {
	 var shi = document.getElementById('shi')
	 var fen = document.getElementById('fen')
	 var miao = document.getElementById('miao')
	 
	          countDown();
	          function addZero(i) {
	              return i < 10 ? "0" + i: i + "";
	          }
	          function countDown() {
	              var nowtime = new Date();
	              var endtime = new Date("2020/04/26,00:00:00");
	              var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
	              var d = parseInt(lefttime / (24*60*60))
	              var h = parseInt(lefttime / (60 * 60) % 24);
	              var m = parseInt(lefttime / 60 % 60);
	              var s = parseInt(lefttime % 60);
				  h =d*24+h;
	              d = addZero(d)
	              h = addZero(h);
	              m = addZero(m);
	              s = addZero(s);
				  
				  shi.innerHTML=`${h}`
				  fen.innerHTML=`${m}`
				  miao.innerHTML=`${s}`
	              if (lefttime <= 0) {
					  document.getElementById('countdown').innerHTML = '活动已结束'
					  return ;
	              }
	              setTimeout(countDown, 1000);
	            }
	        }