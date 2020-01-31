const POKEMONS = POKEMON.pokemon;
let cartao = document.getElementById("cartao");
let filterButton = document.getElementById("filter-button");
let weaknessButton = document.getElementById("weakness-button");
let sortButton = document.getElementById("sort-button");
let rarityButton = document.getElementById("rarity-button");
let medias = document.getElementById("medias");
let seeButton = document.getElementById("see-button");
let seeAllButton = document.getElementById("see-all-button");
let searchPokemon = document.getElementById("search-pokemon");

//executar a função ao abrir a pagina para listar as opções dos botões e os cards
onload = () => {
cardDisplay(POKEMONS);
typeList(POKEMONS);
weaknessList(POKEMONS); 
};

//exibição do card
function cardDisplay(arr) {
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
function typeList(POKEMONS) {
const filterTypes = []; 
POKEMONS.map(poke => poke.type.map(type => {
if (!filterTypes.includes(type)) {
filterTypes.push(type);
} else {
return false;
} 
}));

filterButton.innerHTML = "";
filterButton.innerHTML = "<option value=\"none\">Tipo</option>";
filterButton.innerHTML += filterTypes.map(type => `<option value="${type}">${type}</option>`).join("");
}

//BOTÃO FILTRO-FRAQUEZA
function weaknessList(POKEMONS) {
const filterWeak = []; 
POKEMONS.map(poke => poke.weaknesses.map(weaknesses => {
if (!filterWeak.includes(weaknesses)) {
filterWeak.push(weaknesses);
} else {
return false;
} 
}));

weaknessButton.innerHTML = "";
weaknessButton.innerHTML = "<option value=\"none\">Fraqueza</option>";
weaknessButton.innerHTML += filterWeak.map(weaknesses => `<option value="${weaknesses}">${weaknesses}</option>`).join("");
}

//BOTÕES ORDENAR
sortButton.innerHTML = "<option value=\"none\">Nome</option> <option value=\"A - Z\">A - Z</option> <option value=\"Z - A\"> Z - A</option>";
rarityButton.innerHTML = "<option value=\"none\">Raridade</option> <option value=\"maisRaros\">Raros</option> <option value=\"menosRaros\">Comuns</option>";

//Evento dos botões
filterButton.addEventListener("change", filtro);
weaknessButton.addEventListener("change", fraqueza);
sortButton.addEventListener("change", ordem);
rarityButton.addEventListener("change", raridade);

//FUNÇÕES
function filtro() {
cardDisplay(app.filtrar(POKEMONS, filterButton.value, "type"));
if (filterButton.value == "none") {
cardDisplay(POKEMONS);
}
weaknessButton.value = "none";
sortButton.value = "none";
rarityButton.value = "none";
}

function fraqueza() {
cardDisplay(app.filtrar(POKEMONS, weaknessButton.value, "weaknesses"));
if (weaknessButton.value == "none") {
cardDisplay(POKEMONS);
}
filterButton.value = "none";
sortButton.value = "none";
rarityButton.value = "none";
} 

function ordem () {
cardDisplay(app.ordenar(POKEMONS, sortButton.value, "name"));
filterButton.value = "none";
weaknessButton.value = "none";
rarityButton.value = "none";
} 

function raridade () {
cardDisplay(app.ordenar(POKEMONS, rarityButton.value, "spawn_chance"));
filterButton.value = "none";
weaknessButton.value = "none";
sortButton.value = "none";
}

//CALCULOS CURIOSIDADES
const arrHeight = (POKEMONS.map(poke => poke.height)).map((i) => Number(i.replace(/[^0-9.,]+/g, "")));
const arrWeight = (POKEMONS.map(poke => poke.weight)).map((i) => Number(i.replace(/[^0-9.,]+/g, "")));

//maiores e menores
const nome = POKEMONS.map(poke => poke.name);

const lowerHeight = (Math.min.apply(Math, arrHeight));
const smallestPokemon = nome[(arrHeight.indexOf(lowerHeight))];
const higherPokemon = (Math.max.apply(Math, arrHeight));
const biggestPokemon = nome[(arrHeight.indexOf(higherPokemon))];

const lowerWeight = (Math.min.apply(Math, arrWeight));
const skinnyPokemon = nome[(arrWeight.indexOf(lowerWeight))];
const greaterWeight = (Math.max.apply(Math, arrWeight));
const fatPokemon = nome[(arrWeight.indexOf(greaterWeight))];

//tela de curiosidades
medias.innerHTML = `A <strong>média de Altura</strong> de todos os pokemons é: ${app.media(POKEMONS.map(poke => poke.height)).toFixed(2)} metros.</br>
Sendo o menor deles é o ${smallestPokemon}, medindo apenas ${lowerHeight} metros, e o maior é o ${biggestPokemon}, medindo ${higherPokemon} metros.</br>`;
medias.innerHTML += `</br>A <strong>média do Peso</strong> de todos os pokemons é: ${app.media(POKEMONS.map(poke => poke.weight)).toFixed(2)} kg.</br>
O mais leve deles é o ${skinnyPokemon}, com apenas ${lowerWeight} kg, enquanto o mais pesado é o ${fatPokemon}, pesando exatos ${greaterWeight} kg.`;

let pokesExtremos = [POKEMONS[(arrHeight.indexOf(lowerHeight))], POKEMONS[(arrHeight.indexOf(higherPokemon))], POKEMONS[(arrWeight.indexOf(lowerWeight))], POKEMONS[(arrWeight.indexOf(greaterWeight))]];
const extremos = () => (cardDisplay(pokesExtremos));
const todos = () => {
(cardDisplay(POKEMONS));
filterButton.value = "none"; 
weaknessButton.value = "none";
};

seeButton.addEventListener("click", extremos);
seeAllButton.addEventListener("click", todos);

// Barra de busca
searchPokemon.addEventListener("keyup", () => {
cardDisplay(app.filtrar(POKEMONS, searchPokemon.value, "name"));
filterButton.value = "none";
weaknessButton.value = "none";
sortButton.value = "none";
rarityButton.value = "none";
});

