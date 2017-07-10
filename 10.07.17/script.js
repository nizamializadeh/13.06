var clientWitdh = document.querySelector(".item").clientWidth;
iteration=0;
function left(){
	iteration-=clientWitdh;
	if (iteration<-9000) {
		iteration=0;
	}
	document.querySelector(".imgslide").style.left=iteration+"px";
	console.log(iteration)
}
function right(){
	iteration+=clientWitdh;
	if (iteration>0) {
		iteration=-8060;
	}
	document.querySelector(".imgslide").style.left=iteration+"px";
	console.log(iteration)
}
var a = document.getElementsByTagName("button")[+0];
var img = document.getElementsByTagName("img")[0];
a.addEventListener("click",function () {
	img.style.opacity = "0";
})