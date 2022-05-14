const contenedor = document.getElementById('portfolio')

const url = "https://raw.githubusercontent.com/los-duales/API/main/API/API.json"
const uri = "https://raw.githubusercontent.com/los-duales/API/main/API/"
fetch(url).then(function(response){
	return response.json();
}).then(function(datos){
	console.log(datos);
	for (let i = 0; i <datos.length; i++)

        contenedor.innerHTML += "<div>" + datos[i]["info"] + "</div>";
	
})
