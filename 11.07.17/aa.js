// var img = document.getElementsByClassName("item")[0]
// img.addEventListener("click",function(){
// 	img.style.marginLeft = "-200px";
// 	console.log(this)
// })
// var az = document.getElementsByTagName("img")[0];
var aqa= ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg",];
for (i=0;i<aqa.length;i++){
	
var a = document.createElement("div");
document.body.appendChild(a);
var b = document.createElement("img")
a.appendChild(b);
b.setAttribute("src", aqa[i])



}

	var name = document.querySelector("img")
	
	name.addEventListener("click",function(){
		
	name.style.zIndex = [5];
	name.style.position = 'relative';
	name.style.transform = 'translateX(-20px)'


	console.log(this);
	console.log(name)
	

})