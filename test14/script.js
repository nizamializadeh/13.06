	function galereya (witdh,count,margin,height) {
		
	
var galereya = document.createElement("div");
	document.body.appendChild(galereya);
		galereya.setAttribute("class","galereya")
	
    for(i=0;i<count;i++){
    	a=Math.floor(Math.random()*256);
    	b=Math.floor(Math.random()*256);
    	c=Math.floor(Math.random()*256);
	var item = document.createElement("div")
	item.setAttribute ("class", "item")
	galereya.appendChild(item)
	item.style.width = witdh+"px";

	item.style.float="left";
	item.style.margin=margin+"px";
	item.style.height=height+"px"
	item.style.background="rgb("+a+","+b+","+c+")"
}
}
galereya(110,700,2,80);
