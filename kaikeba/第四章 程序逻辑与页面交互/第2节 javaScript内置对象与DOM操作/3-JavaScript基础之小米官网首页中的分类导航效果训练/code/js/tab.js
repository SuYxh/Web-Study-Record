window.onload = function (){
	var sliderItem = document.getElementsByClassName('sliderItem');
	var flChild = document.getElementById('flChild')
	var flChildP = document.getElementById('flChild').getElementsByTagName('p')
	
	for (let i = 0; i < sliderItem.length; i++) {
		sliderItem[i].onmouseover =function(){
			console.log('鼠标移入'+(i+1))
			// active()
			for (let j = 0; j < sliderItem.length; j++) {
				if(i == j){
					flChild.style.display = 'block';
					sliderItem[j].className = 'sliderItem active'
					flChildP[j].className = 'flChildP active'
				} else {
					sliderItem[j].className = 'sliderItem'
					flChildP[j].className = 'flChildP'
				}
			}
		}
		
		sliderItem[i].onmouseout =function(){
			flChild.style.display = 'none';
		}
		
		
	}
	

}