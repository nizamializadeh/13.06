// var img = document.getElementsByClassName("item")[0]
// img.addEventListener("click",function(){
// 	img.style.marginLeft = "-200px";
// 	console.log(this)
// })
// var az = document.getElementsByTagName("img")[0];

var a = document.createElement("div");
document.body.appendChild(a);

var aqa= ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg",];
for (var i=0;i<aqa.length;i++){
	

var b = document.createElement("img")
a.appendChild(b);
b.setAttribute("src", aqa[i])

}

var imgs = document.querySelectorAll("img")
for(var i=0;i<imgs.length;i++){
	imgs[i].addEventListener("click", func)

}

function func(){
	for( var i=0;i<imgs.length;i++){
		imgs[i].style.zIndex = 0

this.style.marginLeft = "100px"
		
	}
	
	this.style.zIndex =1
	console.log(this.style.zIndex)

}

	


	
// 		this.addEventListener("click",function(this){	
		
// 		this.style.zIndex = [i];
// 		this.style.position = 'absolute';
// 		this.style.transform = 'translateX(-20px)'	

// })






// 		var a=document.querySelectorAll("img")

// for(var i=0; i<a.length;i++){
// 	a[i].addEventListener("click",myfunc)
// }

// function myfunc(){
// 	for(var i=0; i<a.length;i++){
// 		a[i].style.zIndex = -1
// 	}
// 	this.style.zIndex = 1
// }