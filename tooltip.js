
var ToolTip = function(id,text,position){
	var showingTooltip;

	var element = document.getElementById(id);
	var createTooltip = function(){
		var tooltipText = text;
		var tooltipEl = document.createElement('div');
		tooltipEl.classList.add('tooltip');
		tooltipEl.innerHTML = tooltipText;
		document.body.appendChild(tooltipEl);
		return tooltipEl;
	}
	element.addEventListener('mouseover', function(e){
		var tooltipEl = createTooltip();
		var coords = e.target.getBoundingClientRect();
		var left = coords.left;
		var top = coords.top;
		switch(position) {
			case 'left':
			left = left - tooltipEl.offsetWidth - 20;
			top = (top + element.offsetHeight/2) - tooltipEl.offsetHeight/2;
			break;
			case 'right':
			left = left + element.offsetWidth + 20;
			top = (top + element.offsetHeight/2) - tooltipEl.offsetHeight/2;
			break;
			case 'top':
			left =(left + element.offsetWidth/2) - tooltipEl.offsetWidth/2;
			top = top - tooltipEl.offsetHeight - 20;
			break;
			case 'bottom':
			left = (left + element.offsetWidth/2) - tooltipEl.offsetWidth/2;
			top = top + element.offsetHeight + 20;
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
var ToolTip1 = new ToolTip('btn','Слева','left');
var ToolTip2 = new ToolTip('btn','Справа','right');
var ToolTip3 = new ToolTip('btn','Сверху','top');
var ToolTip4 = new ToolTip('btn','Снизу','bottom');