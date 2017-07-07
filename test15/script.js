var image =document.getElementsByTagName("img")[0];
 var sliders =["images.jpg","img.jpg","imagess.jpg" ];
 count=0;
 	function funcleft() {
 		image.setAttribute("src", sliders[count] );
 		count--;

 		 if(count<0){	
 		 	count=sliders.length-1;
 	}
 	console.log(count);
 }
	

function funcright() {
	image.setAttribute("src", sliders[count] );
	count++;
	if (count>=sliders.length) {
		count=0
	}
	console.log(count);
}
					

