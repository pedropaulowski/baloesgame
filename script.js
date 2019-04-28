//criar função que vai add a bola em posição aleatoria

function addBola(){
	var bola = document.createElement("div");//criando uma div
	bola.setAttribute("class", "bola");//adicionando um atributo à div

	//calcular duas posições aleatorias
	//Math.floor transforma o numero em inteiro
	//Math.random gera um numero aleatorio e o *500 é para definir um intervalor de 0,500	
	var p1 = Math.floor(Math.random() * 500);//gera numero aleatorio para a posição p1
	var p2 = Math.floor(Math.random() * 400);//gera numero aleatorio para a posição p2
	var idCor = Math.floor(Math.random() * 9);
	//criar o array das cores
	var cores = ["green", "red", "yellow", "orange", "blue", "gray", "white", "pink", "black"];
	var cor = cores[idCor];
	//vamos inserir esses valores na nossa bola(a posição)
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px; background-color:"+cor+";");
	//criar ação de clique para estourar
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);//vai add um elemento novo

}
function estourar(elemento){
	document.body.removeChild(elemento);//removendo o elemento
}
function start(){
	setInterval(addBola, 500);
}
