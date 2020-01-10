//criar função que vai add a bola em posição aleatoria

function addBola(){
	var perdeu = verificarDerrota()

	if(perdeu == false){
		var jogo = document.querySelector("#jogo")
		var bola = document.createElement("div")//criando uma div
		bola.setAttribute("class", "bola")//adicionando um atributo à div
		//calcular duas posições aleatorias
		//Math.floor transforma o numero em inteiro
		//Math.random gera um numero aleatorio e o *500 é para definir um intervalor de 0,500	
		var p1 = Math.floor(Math.random() * 320)//gera numero aleatorio para a posição p1
		var p2 = Math.floor(Math.random() * (380 - 83) + 83)//gera numero aleatorio para a posição p2
		var idCor = Math.floor(Math.random() * 9)
		//criar o array das cores
		var cores = ["green", "red", "yellow", "orange", "blue", "gray", "white", "pink", "black"]
		var cor = cores[idCor]
		//vamos inserir esses valores na nossa bola(a posição)
		bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px; background-color:"+cor+";")
		//criar ação de clique para estourar
		bola.setAttribute("onclick", "estourar(this)")

		jogo.appendChild(bola)//vai add um elemento novo

		var aparecidas = document.querySelector("#aparecidas")
		var totalaparecidas = parseInt(document.querySelector("#aparecidas").innerHTML)
		totalaparecidas += 1
		aparecidas.innerHTML = totalaparecidas
	}

}

function estourar(elemento){
	var perdeu = verificarDerrota()

	if(perdeu == false){
		jogo.removeChild(elemento)//removendo o elemento
		var placar = document.querySelector("#placar")
		var total = parseInt(document.querySelector("#placar").innerHTML)
		total += 1
		placar.innerHTML = total

		if(total%10 == 0) {
			interval = 2000 - ((total/20) * 250)
			if(interval == 0) {
				interval = 250
				start(interval)
				console.log(interval)
			} else if(interval > 0){
				start(interval)
				console.log(interval)
			} else if(interval < 0) {
				interval = 250
				start(interval)
				console.log(interval)
			}
		

		} else if(total == 1) {
			interval = 2000
			start(interval)
		}
	}
}
function start(interval){
	var i = 0

	var loop = setInterval(() => {
		addBola()
		if(i == 20){
			clearInterval(loop);
		 }
		 i++;
	}, interval);

}

function verificarDerrota() {
	var total = parseInt(document.querySelector("#placar").innerHTML)
	var totalaparecidas = parseInt(document.querySelector("#aparecidas").innerHTML)
	var perdeu = document.querySelector(".perdeu")
	var frase  = document.querySelector("#frase")
	frase.innerHTML = "PERDEU! SUA PONTUAÇÃO = "+total
	
	
	if(totalaparecidas - total == 20) {
		perdeu.style.display = 'block'
		return true
	} else {
		return false
	}
}
function recomecar() {
	window.location.href='index.html'
}