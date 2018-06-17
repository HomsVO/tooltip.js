
var ToolTip = function(id,text,position){
	var showingTooltip;

	var element = document.getElementById(id);
	var init = function(){
		var tooltipText = text;
		var tooltipEl = document.createElement('div');
		tooltipEl.classList.add('tooltip');
		tooltipEl.innerHTML = tooltipText;
		document.body.appendChild(tooltipEl);
		return tooltipEl;
	}
	
	element.addEventListener('mouseover', function(e){
		var tooltipEl = init();
		var coords = e.target.getBoundingClientRect();
		var left = coords.left;
		var top = coords.top;
		switch(position) {
			case 'left':
			left = left - element.offsetWidth - (tooltipEl.offsetWidth - element.offsetWidth/2);
			top = top;
			break;
			case 'right':
			left = left + element.offsetWidth + element.offsetWidth/2;
			top = top;
			break;
			case 'top':
			left = left - element.offsetWidth;
			top = top - tooltipEl.offsetHeight - element.offsetHeight/2;
			break;
			case 'bottom':
			left = left - element.offsetWidth;
			top = top + tooltipEl.offsetHeight + element.offsetHeight/2;
			break;
		}


		tooltipEl.style.left = left + 'px';
		tooltipEl.style.top = top + 'px';

		showingTooltip = tooltipEl;
	})
	element.addEventListener('mouseout', function(e){
		if(showingTooltip){
			document.body.removeChild(showingTooltip);
		}
		
	})
}

var tooltip2 = new ToolTip('btn','awdawdaw','bottom');
var tooltip3 = new ToolTip('btn3','awdawdaw','bottom');