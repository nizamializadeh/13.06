var chenged = 'off'
function change() {
	var img = document.getElementById('light')
	
	if(chenged=='off'){
		img.src="img/pic_bulbon.gif"
		chenged='on'
	}
	else{
		img.src="img/pic_bulboff.gif"
		chenged='off'
	}
}