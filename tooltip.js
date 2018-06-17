

var ToolTip = function(id,text,position){
	var element = document.getElementById(id);
	var tooltip;

	var init = function(){
		tooltip = document.createElement('div');
		tooltip.innerText = text;
		tooltip.classList.add('tooltip');
		element.style.position = 'relative';
		switch(position) {
			case 'bottom': 
			tooltip.style.bottom = '-100%';
			break;
			case 'top': 
			tooltip.style.top = '-100%';
			break;
			case 'left': 
			tooltip.style.right = '100%';
			tooltip.style.bottom = '45%';
			break;
			case 'right': 
			tooltip.style.left = '100%';
			tooltip.style.top = '45%';
			break;
		}
	}
	init();

	element.addEventListener('mouseover', function(e){
		element.appendChild(tooltip);
	})
	element.addEventListener('mouseout', function(e){
		element.removeChild(tooltip);
	})
}

var tooltip1 = new ToolTip('btn','awdawdaw','bottom');
var tooltip2 = new ToolTip('btn2','awdawdaw','bottom');
var tooltip2 = new ToolTip('btn3','awdawdaw','bottom');