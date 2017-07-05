var sliderimg = document.getElementsByTagName("img")[0];
sliders= [ "img/images2.jpg","img/images1.jpg"];
function Funcleft(){
	sliderimg.setAttribute("src", sliders[0])

}	
function Funcright(){
	sliderimg.setAttribute("src" , sliders[1])

}