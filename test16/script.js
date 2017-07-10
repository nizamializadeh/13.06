clientwitdh = document.querySelector(".item").clientwitdh;
iteration=0;
function right() {
	iteration-=clientwitdh;
	if (iteration<-3200) {
		iteration=0;
	}
	document.querySelector(".imgslide").style.left=iteration+"px";
	console.log(iteration)
}
function left() {
	iteration+=clientwitdh;
	if (iteration>0) {
		iteration=-3200;
	}
	document.querySelector(".imgslide").style.left=iteration+"px";
	console.log(iteration)
}