const url = "https://raw.githubusercontent.com/los-duales/API/main/API/API.json"
const uri = "https://raw.githubusercontent.com/los-duales/API/main"
fetch(url).then(function(respuesta){
	return respuesta.json();
}).then(function(datos){
	console.log(datos);
	for (let i =0; < datos.length; i++){

		contenedor.innnerHTML += "<div class='poster'";
		contenedor.innnerHTML += "<img src'" + uri + datos[1]["imagen"]+"'>";
	}
}).cath(function(error){
	console.log(error);
});