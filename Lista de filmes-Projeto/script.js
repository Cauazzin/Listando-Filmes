divFilme = document.querySelector(".filmes")
var filmes = ["Homem-aranha", "Jumanji", "Vingadores: Ultimato", "Batman", "Carros"];

for (var inicio = 0; inicio < filmes.length; inicio++) {
    divFilme.innerHTML += `<p>${filmes[inicio]}</p>`;
}


