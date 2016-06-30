var myImage = document.querySelector('img');
//funcion al hacer click en objeto contenido en myImage
myImage.onmouseover = function(){
	//obtener el valor del atributo 'src' del objeto myImage
	var mySrc = myImage.getAttribute('src');
	if (mySrc==='images/1.jpg'){
		myImage.setAttribute('src','images/2.jpg');
	}
	else{
		myImage.setAttribute('src','images/1.jpg');
	}
}