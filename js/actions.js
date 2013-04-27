// Funcionalidad de RingTones con PHONE GAP
/*$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		var src="";
		//alert('Acciones');
		$('#main ul li a').tap(function(){
			//alert($(this).attr('rel'));
			src=$(this).attr('rel');
			nom=$(this).text();
			
			// ---Cambiar el titulo de la página (ambas hace lo mismo)
			//$('#descargar').attr('title',nom);
			$.ui.setTitle(nom);
		});
		$('#descargar a').tap(function(){
			if ($(this).text()=='Descargar'){
				// Descarga archivos con transaction
				var fileTransfer = new FileTransfer();
				fileTransfer.download(
					src,
					// Envío a la tarjeta SD
					'file:///mnt/sdcard/ringtoneApp/'+nom+'.mp3',
					
					// Envío a la carpeta raíz del teléfono
					//'file:///mnt/ringtoneApp/'+nom+'.mp3',
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
		$('#descargar a').tap(function(){
			// ---Muestra la notificación de descarga
			//$('.over').show();
			$.ui.showMask('Descargando');
			
		});
	},false);
});*/
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		var src="";
		var nom="";
		$('#main ul li a').tap(function(){
			src=$(this).attr('rel');
			//alert(src);
			nom=$(this).text();
			//alert(nom);
			$('#screen2').attr('title',nom);
		});		
		var audio = document.getElementById('Reproductor');
		$('#screen2 a').tap(function(){
			//alert($(this).text());
			if($(this).text()=='Descargar'){
				window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
					var ruta=fileSystem.root.fullPath;
					alert(ruta);
					}, null);
				// Acción de descargar
				var fileTransfer = new FileTransfer();
				fileTransfer.download(
					src,
					// Envío a la tarjeta SD
					ruta+'/ringtoneApp/'+nom+'.mp3',
					
					// Envío a la carpeta raíz del teléfono
					//'file:///mnt/ringtoneApp/'+nom+'.mp3',
					function(entry) {
						// Verificar que no exista el archiv en la carpeta
						navigator.notification.alert("Archivo descargado.",null,"Completado","Ok");
					},
					function(error) {
						navigator.notification.alert("Error en la descarga"+error.code,null,"Error","Ok");
					}
				);
			}else{
				// Acción de reproducir
				//alert(src);
				audio.src = src;
				audio.play();
			}
		});
	},false);
});