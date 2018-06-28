
var ToolTip = function(id,text,position){
	if(arguments.length != 3){
		console.log('Не все аргументы введены');
		return false;
	}
	var showingTooltip;
	var self = this;
	var element = document.getElementById(id);
	var createTooltip = function(){
		var tooltipText = text;
		var tooltipEl = document.createElement('div');
		tooltipEl.classList.add('tooltip');
		tooltipEl.innerHTML = tooltipText;
		document.body.appendChild(tooltipEl);

		return tooltipEl;
	}
	this.show = function(){
		showingTooltip = setPosition(this);
	}
	this.hide = function(){
			if(showingTooltip){
			document.body.removeChild(showingTooltip);
		}
	}
	var setPosition = function(context){
		var tooltipEl = createTooltip();
		var coords = context.getBoundingClientRect();
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
		return tooltipEl;
	}
	element.addEventListener('mouseover', this.show);
	element.addEventListener('mouseout', this.hide);
}
var ToolTip1 = new ToolTip('btn','Слева','left');
var ToolTip2 = new ToolTip('btn','Справа','right');
var ToolTip3 = new ToolTip('btn','Сверху','top');
var ToolTip4 = new ToolTip('btn','Снизу','bottom');