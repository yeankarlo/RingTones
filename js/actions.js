// Funcionalidad de RingTones
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		var src="";
		//alert('Acciones');
		$('#main ul li a').tap(function(){
			//alert($(this).attr('rel'));
			src=$(this).attr('rel');
			nom=$(this).text();
			$('#descargar').attr('title',nom);
		});
		$('#descargar a').tap(function(){
			if ($(this).text()=='Descargar'){
				// Descarga archivos con transaction
				var fileTransfer = new FileTransfer();
				fileTransfer.download(
					src,
					// Envío a la tarjeta SD
					//'file:///mnt/sdcard/ringtoneApp/'+nom+'.mp3',
					
					// Envío a la carpeta raíz del teléfono
					'file:///mnt/ringtoneApp/'+nom+'.mp3',
					function(entry) {
						// Verificar que no exista el archiv en la carpeta
						navigator.notification.alert("Archivo descargado.",null,"Completado","Ok");
					},
					function(error) {
						navigator.notification.alert("Error en la descarga"+error.code,null,"Error","Ok");
					}
				);
			}
			if ($(this).text()=='Probar'){
				// Reproduce el archivo con MEDIA de phonegap
				my_media = new Media(src, null, function(){
					alert('Error :-(');
				});
				my_media.play();
			}
		});
	},false);
});