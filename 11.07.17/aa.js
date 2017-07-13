var img = document.querySelectorAll("img")

for(i=0; i<img.leght;i++){
	img[i].addEventListener("click",function(){
	this.style.marginLeft = "200px";
})
}
