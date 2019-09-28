const POKEMONS = POKEMON.pokemon;
let cartao = document.getElementById("cartao");
let botaoFiltro = document.getElementById("botao-filtro");
let botaoFraqueza = document.getElementById("botao-fraqueza");
let botaoOrdem = document.getElementById("botao-ordem");
let botaoRaridade = document.getElementById("botao-raridade");
let medias = document.getElementById("medias");
let ver = document.getElementById("ver");
let vertodos = document.getElementById("vertodos");
let busca = document.getElementById("busca");

//executar a função ao abrir a pagina para listar as opções dos botões e os cards
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
   
//BOTÃO FILTRO-TIPO
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

//BOTÃO FILTRO-FRAQUEZA
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

//BOTÕES ORDENAR
botaoOrdem.innerHTML = "<option value=\"none\">Nome</option> <option value=\"A - Z\">A - Z</option> <option value=\"Z - A\"> Z - A</option>";
botaoRaridade.innerHTML = "<option value=\"none\">Raridade</option> <option value=\"maisRaros\">Raros</option> <option value=\"menosRaros\">Comuns</option>";

//Evento dos botões
botaoFiltro.addEventListener("change", filtro);
botaoFraqueza.addEventListener("change", fraqueza);
botaoOrdem.addEventListener("change", ordem);
botaoRaridade.addEventListener("change", raridade);

//FUNÇÕES
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

function ordem () {
  exibeCartao(app.ordenar(POKEMONS, botaoOrdem.value, "name"));
  botaoFiltro.value = "none";
  botaoFraqueza.value = "none";
  botaoRaridade.value = "none";
} 

function raridade () {
  exibeCartao(app.ordenar(POKEMONS, botaoRaridade.value, "spawn_chance"));
  botaoFiltro.value = "none";
  botaoFraqueza.value = "none";
  botaoOrdem.value = "none";
}

//CALCULOS CURIOSIDADES
const arrAltura = (POKEMONS.map(poke => poke.height)).map((i) => Number(i.replace(/[^0-9.,]+/g, "")));
const arrPeso = (POKEMONS.map(poke => poke.weight)).map((i) => Number(i.replace(/[^0-9.,]+/g, "")));

//maiores e menores
const nome = POKEMONS.map(poke => poke.name);

const menorAltura = (Math.min.apply(Math, arrAltura));
const menorPoke = nome[(arrAltura.indexOf(menorAltura))];
const maiorAltura = (Math.max.apply(Math, arrAltura));
const maiorPoke = nome[(arrAltura.indexOf(maiorAltura))];

const menorPeso = (Math.min.apply(Math, arrPeso));
const magrinhoPoke = nome[(arrPeso.indexOf(menorPeso))];
const maiorPeso = (Math.max.apply(Math, arrPeso));
const gordinhoPoke = nome[(arrPeso.indexOf(maiorPeso))];

//tela de curiosidades
medias.innerHTML = `A <strong>média de Altura</strong> de todos os pokemons é: ${app.media(POKEMONS.map(poke => poke.height)).toFixed(2)} metros.</br>
Sendo o menor deles é o ${menorPoke}, medindo apenas ${menorAltura} metros, e o maior é o ${maiorPoke}, medindo ${maiorAltura} metros.</br>`;
medias.innerHTML += `</br>A <strong>média do Peso</strong> de todos os pokemons é: ${app.media(POKEMONS.map(poke => poke.weight)).toFixed(2)} kg.</br>
O mais leve deles é o ${magrinhoPoke}, com apenas ${menorPeso} kg, enquanto o mais pesado é o ${gordinhoPoke}, pesando exatos ${maiorPeso} kg.`;

let pokesExtremos = [POKEMONS[(arrAltura.indexOf(menorAltura))], POKEMONS[(arrAltura.indexOf(maiorAltura))], POKEMONS[(arrPeso.indexOf(menorPeso))], POKEMONS[(arrPeso.indexOf(maiorPeso))]];
const extremos = () => (exibeCartao(pokesExtremos));
const todos = () => {
  (exibeCartao(POKEMONS));
  botaoFiltro.value = "none"; 
  botaoFraqueza.value = "none";
};

ver.addEventListener("click", extremos);
vertodos.addEventListener("click", todos);

// Barra de busca
busca.addEventListener("keyup", () => {
  exibeCartao(app.filtrar(POKEMONS, busca.value, "name"));
  botaoFiltro.value = "none";
  botaoFraqueza.value = "none";
  botaoOrdem.value = "none";
  botaoRaridade.value = "none";
});
