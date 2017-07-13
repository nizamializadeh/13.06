// var img = document.getElementsByClassName("item")[0]
// img.addEventListener("click",function(){
// 	img.style.marginLeft = "-200px";
// 	console.log(this)
// })
var aqa= ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg",];
for (i=0;i<aqa.length;i++){
var a = document.createElement("div");
document.body.appendChild(a);
var b = document.createElement("img")
a.appendChild(b);
b.setAttribute("src", aqa[i])
b.addEventListener("click",function(){
	
	this.style.zIndex = [9]
	console.log(b)
	console.log(b.style.zIndex = [i+9]);
	console.log(this)
	b.style.position = 'relative';

	b.style.transform = 'translateX(20px)'

})
	
}



