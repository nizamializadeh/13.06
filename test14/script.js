	function galereya (witdh,count,bgcolor,margin) {
		
	
var galereya = document.createElement("div");
	document.body.appendChild(galereya);

	
    for(i=0;i<count;i++){
	var item = document.createElement("div")
	item.setAttribute ("class", "item")
	galereya.appendChild(item)
	item.style.width = witdh+"px";
	item.style.background =bgcolor;
	item.style.float="left";
	item.style.margin=margin+"px";
}
}
galereya(100,38,'rgb(' + (Math.floor(Math.random() * 256)),2);
