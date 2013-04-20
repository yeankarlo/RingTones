// Funcionalidad de RingTones
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		var src="";
		//alert('Acciones');
		$('#main ul li a').tap(function(){
			//alert($(this).attr('rel'));
			src=$(this).attr('rel');
			$('#descargar').attr('title',$(this).text());
		});
		$('#descargar a').tap(function(){
			if ($(this).text()=='Descargar'){
				// Descarga archivos con transaction
			}
			if ($(this).text()=='Probar'){
				// Play el archivo con MEDIA
				my_media = new Media(src, null, function(){
					alert('Error :-(');
				});
				my_media.play();
			}
		});
	},false);
});