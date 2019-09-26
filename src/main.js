//const POKEMONS = require("./data/pokemon/pokemon.json");
const POKEMONS = POKEMON.pokemon;
let cartao = document.getElementById("cartao");
let botaoFiltro = document.getElementById("botao-filtro");
let botaoFraqueza = document.getElementById("botao-fraqueza");
let botaoOrdem = document.getElementById("botao-ordem");
let botaoRaridade = document.getElementById("botao-raridade");

//executar a função ao abrir a pagina para listar as opções de filtro e os cards
onload = () => {
  exibeCartao(POKEMONS);
  listaTipos(POKEMONS);
  listaFraqueza(POKEMONS);  
};

//exibição do card
function exibeCartao(arr) {
  let cardzinho ="";
  arr.forEach(poke => {
    cardzinho += `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="${poke.img}" />
              <p class="nome">${poke.name}</p>
          </div>
          <div class="card-back">Altura: ${poke.height}</br>Peso: ${poke.weight}</br>Candys para evolução: ${poke.candy_count ? poke.candy_count : "Ùltima Evolução"}</div>
        </div>
      </div>`;
  });
  cartao.innerHTML = cardzinho;
}
   
// passo 1 = pegar cada tipo e fazer uma lista em forma de array / criar menu com a array criada anteriormente
// passo 2 = função (data.js)
// passo 3 = trem que junta TUDO e exibe certo o que eu quero

// passo 1
//FILTRO-TIPO
function listaTipos(POKEMONS) {
  const filterTypes = []; 
  POKEMONS.map(poke => poke.type.map(type => {
    if (!filterTypes.includes(type)) {
      filterTypes.push(type);
    } else {
      return false;
    }   
  }));

  botaoFiltro.innerHTML = "";
  botaoFiltro.innerHTML = "<option value=\"none\">Tipo</option>";
  botaoFiltro.innerHTML += filterTypes.map(type => `<option value="${type}">${type}</option>`).join("");
}

//FILTRO-FRAQUEZA
function listaFraqueza(POKEMONS) {
  const filterWeak = []; 
  POKEMONS.map(poke => poke.weaknesses.map(weaknesses => {
    if (!filterWeak.includes(weaknesses)) {
      filterWeak.push(weaknesses);
    } else {
      return false;
    }   
  }));

  botaoFraqueza.innerHTML = "";
  botaoFraqueza.innerHTML = "<option value=\"none\">Fraqueza</option>";
  botaoFraqueza.innerHTML += filterWeak.map(weaknesses => `<option value="${weaknesses}">${weaknesses}</option>`).join("");
}

botaoRaridade.innerHTML = "<option value=\"none\">Raridade</option> <option value=\"maisRaros\">Pokemons mais raros</option> <option value=\"menosRaros\">Pokemons menos raros</option>";
botaoOrdem.innerHTML = "<option value=\"none\">Nome</option> <option value=\"A - Z\">A - Z</option> <option value=\"Z - A\"> Z - A</option>";

//passo 3
botaoFiltro.addEventListener("change", filtro);
botaoFraqueza.addEventListener("change", fraqueza);
botaoRaridade.addEventListener("change", raridade);
botaoOrdem.addEventListener("change", ordem);

function filtro() {
  exibeCartao(app.filtrar(POKEMONS, botaoFiltro.value, "type"));
  if (botaoFiltro.value == "none") {
    exibeCartao(POKEMONS);
  }
  botaoFraqueza.value = "none";
  botaoOrdem.value = "none";
  botaoRaridade.value = "none";
}

function fraqueza() {
  exibeCartao(app.filtrar(POKEMONS, botaoFraqueza.value, "weaknesses"));
  if (botaoFraqueza.value == "none") {
    exibeCartao(POKEMONS);
  }
  botaoFiltro.value = "none";
  botaoOrdem.value = "none";
  botaoRaridade.value = "none";
}

function ordem() {
  exibeCartao(app.ordenar(POKEMONS, botaoOrdem.value, "name"));
  botaoFiltro.value = "none";
  botaoFraqueza.value = "none";
  botaoRaridade.value = "none";
}

function raridade() {
  exibeCartao(app.ordenar(POKEMONS, botaoRaridade.value, "spawn_chance"));
  botaoFiltro.value = "none";
  botaoFraqueza.value = "none";
  botaoOrdem.value = "none";
}

/*if (botaoFiltro.value == "none" && botaoFraqueza.value == "none") {
    exibeCartao(POKEMONS);
  } else if (botaoFiltro.value == "none" && botaoFraqueza.value != "none") {
    exibeCartao(app.filtrar(POKEMONS, botaoFraqueza.value,"weaknesses"));
  } else if (botaoFiltro.value != "none" && botaoFraqueza.value == "none") {
    exibeCartao(app.filtrar(POKEMONS, botaoFiltro.value, "type"));
  } else if ((botaoFiltro.value != "none" && botaoFraqueza.value != "none")) {
    alert("não é possivel utilizar dois filtros ao mesmo tempo, por favor, selecione apenas uma opção");
    botaoFiltro.value = "none";
    botaoFraqueza.value = "none";
    exibeCartao(POKEMONS);
  }
}  */



/*CALCULOS
const arrWeight = Object.values(POKEMONS.map(poke => poke.weight));
const listaPesos = arrWeight.map((i) => Number(i.replace(/[^0-9.,]+/g, "")));
const acumulador = listaPesos.reduce(function(somaTotal, valorAtual) {
  return somaTotal + valorAtual;
},);
const calc = (acumulador / listaPesos.length).toFixed(2);
console.log(calc);*/
