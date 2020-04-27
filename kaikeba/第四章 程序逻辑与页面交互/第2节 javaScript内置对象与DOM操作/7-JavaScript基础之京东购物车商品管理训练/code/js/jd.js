	//1.全选按钮
	//1.1将所有的单选按钮和全选按钮保持一致，   并且所有的全选按钮也保持一致
	//1.2将总件数变成单选按钮的个数
	//1.3计算总计
		//找到当前页面上所有的全选按钮
			var checkAlls=document.getElementsByClassName('check-all');
		//找到当前页面上所有的单选按钮
			var checkOnes=document.getElementsByClassName('check-one');
		//找到当前页面上放置总件数的标签(sapn)
			var selectedTotal=document.getElementById('selectedTotal');
		//找到当前页面上放置 每行 小计 的标签
			var subtotal=document.getElementsByClassName('subtotal');
		//找到当前页面中放置 合计 的标签
			var priceTotal=document.getElementById('priceTotal');
			for(var n=0;n<checkAlls.length;n++){
				checkAlls[n].onchange=function(){
			//让所有的单选按钮保持一致
					for(var j=0;j<checkOnes.length;j++){
						checkOnes[j].checked=this.checked;
					}
			//让所有的全选按钮保持一致
					for(var j=0;j<checkAlls.length;j++){
						checkAlls[j].checked=this.checked;
					}
			//根据全选是否选中来判断件数是多少，  如果选中了，件数=单选按钮的个数，如果没有选中，件数=0；
					if (this.checked==true) {
						selectedTotal.innerHTML=checkOnes.length;
			//计算总计， 1.先找到每一行的小计  2.加和到一起
						var sum=0;
						for(var n=0;n<subtotal.length;n++){
							priceTotal.innerHTML = subtotal[n].innerHTML
							sum=sum+parseFloat(subtotal[n].innerHTML);
						}
						priceTotal.innerHTML=sum;
					}else{
						selectedTotal.innerHTML=0;
						priceTotal.innerHTML=0;
					}
				}
			}
			//单选按钮功能：
			//1. 判断单选按钮的选中个数，控制全选按钮是否被选中
			//2. 需要计算当前的合计，以及选中的件数数
			for(var n=0;n<checkOnes.length;n++){
				checkOnes[n].onchange=function(){
					var sum=0;//用来放置选中单选按钮的个数
					var total=0;//用来放置合计
					for(var j=0;j<checkOnes.length;j++){
						if (checkOnes[j].checked==true) {
							sum++;
							total=total+parseFloat(subtotal[j].innerHTML);
						}
					}
			//根据单选按钮选中的个数，判断全选按钮是否需要被选中
					if (sum==checkOnes.length) {
						for(var n=0;n<checkAlls.length;n++){
							checkAlls[n].checked=true;
						}
					}else{
						for(var n=0;n<checkAlls.length;n++){
							checkAlls[n].checked=false;
						}
					}
					selectedTotal.innerHTML=sum;
					priceTotal.innerHTML=total.toFixed(2);
				}
			}
	//加号按钮功能的实现
		//找到所有的加法按钮
			var adds=document.getElementsByClassName("bot");
		//找到所有的input框
			var countInputs=document.getElementsByClassName('count-input');
		//找到所有的单价按钮
			var prices=document.getElementsByClassName('price');
			for(var n=0;n<adds.length;n++){
				adds[n].index=n;
				adds[n].onclick=function(){
				//拿到所对应的input框的数量
					//console.log(this.index)
					var num=countInputs[this.index].value;
					num++;
					countInputs[this.index].value=num;
					//找到对应的单价
					var price=prices[this.index].innerHTML;
					//console.log(price)
					var sum=price*num;
					subtotal[this.index].innerHTML=sum.toFixed(2);
				//如果它对应的合计checked=true,则合计也要发生变化
					if (checkOnes[this.index]) {
						var total=0;
						for(var j=0;j<checkOnes.length;j++){
							if (checkOnes[j].checked) {
								total+=parseFloat(subtotal[j].innerHTML)
							}
						}
						priceTotal.innerHTML=total.toFixed(2);
					}
				}
			}
	//减法按钮功能的实现
			var reduces=document.getElementsByClassName('reduce');
			for(var n=0;n<reduces.length;n++){
				reduces[n].index=n;
				reduces[n].onclick=function(){
					var num=countInputs[this.index].value;
					if (num>1) {
						num--;
					}else{
						alert("亲，不能再减了");
					}
					countInputs[this.index].value=num;
					var price=prices[this.index].innerHTML;
					var sum=price*num;
					subtotal[this.index].innerHTML=sum.toFixed(2);
					if (checkOnes[this.index]) {
						var total=0;
						for(var j=0;j<checkOnes.length;j++){
							if (checkOnes[j].checked) {
								total+=parseFloat(subtotal[j].innerHTML)
							}
						}
						priceTotal.innerHTML=total.toFixed(2);
					}
				}
			}
		//删除功能
			var deletes=document.getElementsByClassName('delete');
			for(var n=0;n<deletes.length;n++){
				deletes[n].onclick=function(){
					var curDiv=this.parentNode.parentNode.parentNode;
					var details =curDiv.parentNode;
					details.removeChild(curDiv);
					var total=0;
					var sum=0;
					for(var j=0;j<checkOnes.length;j++){
						if (checkOnes[j].checked) {
							sum++;
							total+=parseFloat(subtotal[j].innerHTML);
						}
					}
                                        for(var n=0;n<adds.length;n++){
						adds[n].index=n;
					}
					priceTotal.innerHTML=total.toFixed(2);
					selectedTotal.innerHTML=sum;
				}
			}
