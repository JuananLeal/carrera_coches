$(function(){
		

//Genero la cantidad de coches generada cando hago click en seleccionar
$("#seleccionar").click(function(){
	var num_coches = $("#n_coche").val();
	var coches = [];

	//relleno un array con los coches y los muestro
	for(var i = 1; i <= num_coches ;i++){

		coches[i] = i ;
		$("#carrera").append("<img src='img/car"+i+".png' name='coche1' id='coche"+i+"' class='coche'><br>");

	}
	//cuando termino oculto el boton
	$("#seleccionar").hide();
		
});

$("#inicio").click(function(){

	//cuando le doy a iniciar, guardo los datos de tamaño del coche y la meta

	var coche_tam = ($("#coche1").width());
	var meta = ($(window).width() - coche_tam);
	var num_coches = $("#n_coche").val();

 //Si pulso inicio lo oculto y muestro reinicio
	$("#inicio").hide();
	$("#reinicio").show();

	//Genero un array para el movimiento del coche
	
			var movimiento = [];
			movimiento.length = num_coches;
			console.log(movimiento.length);

			//Recorro el array y le doy valores aleatorios a la función animate
	
		for(var i = 0; i < num_coches;i++){

			movimiento[i] = generar_aleatorio(1500,3000);

			var a = i + 1;

			console.log(movimiento[i]);
		
		$("#coche"+a+"").animate({left:meta},movimiento[i]);
	}

	console.log(movimiento);
	orden_llegada(movimiento);
	

});

//El botón reinicio aparece oculto por defecto, cuando se enseña si le vuelvo 
//a dar para la animacion y se vuelve a esconder y muestra inicio
$("#reinicio").hide(function(){

	$("#reinicio").click(function(){
		$("#reinicio").hide();
		$("#inicio").show();

		$(".coche").stop().animate();
		$(".coche").css("left", "0x");
	});
	
});

//Esta funcion genera un numero aleatorio

function generar_aleatorio(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}


//Mediante comparación de los valores obtenidos de la generacion aleatoria, los ordeno de menor a mayor
//Así saco el orden de llegada, lo muestro.

function orden_llegada(array1){

		var array2 = array1.slice();
		array2 = array2.sort(function comparar(a,b){return a-b;});
		console.log(array1);
		console.log(array2);
	for(var i=0; i < array1.length;i++){

		for(var j=0;j < array1.length;j++){

		if(array1[j] == array2[i]){
			j = j + 1;
			console.log("El coche " + j + " ha quedado " + (i+1) + "º");
		}
	}
	}


}






});
