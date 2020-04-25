var items = document.getElementsByClassName('imgItem');
var points = document.getElementsByClassName('point');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
// console.log(goNextBtn)
var index = 0;
var time = 0;
// console.log(items)

var clearActive = function() {
	for (var i = 0; i < items.length; i++) {
		items[i].className = 'imgItem'
		points[i].className = 'point'
	}
}

function goIndex() {
	clearActive();
	items[index].className = 'imgItem active'
	points[index].className = 'point active'
}

var goNext = function() {
	index < items.length - 1 ? index++ : index = 0;
	goIndex();
}

var goPre = function() {
	index == 0 ? index = items.length - 1 : index--;
	goIndex();
}

goNextBtn.addEventListener('click', function() {
	goNext();
})

goPreBtn.addEventListener('click', function() {
	goPre();
})


		for (var i = 0; i < points.length; i++) {
			points[i].addEventListener('click',function(){
				var pointIndex = this.getAttribute('data-index')
				index = pointIndex;
				goIndex();
				time = 0
			})
		}
		
		setInterval(function(){
			time++;
			time == 30 ? (goNext(),time=0) : ''
			
		},100)
