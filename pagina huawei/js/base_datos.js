const contenedor = document.getElementById('portfolio')

const url = "https://raw.githubusercontent.com/los-duales/API/main/API/API.json"
const uri = "https://raw.githubusercontent.com/los-duales/API/main/API/"
fetch(url).then(function(response){
	return response.json();
}).then(function(datos){
	console.log(datos);
	for (let i = 1; i <datos.length; i++)

        contenedor.innerHTML += "<div class='portfolio'><p class='info'>" + datos[i]["infoo"] + "</p></div> ";
	
})
