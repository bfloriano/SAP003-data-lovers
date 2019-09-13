
const POKEMONS = POKEMON.pokemon;

const img = document.getElementById("result");
POKEMONS.map(poke => {
    let card = `<div class="card"><div class="card-inner">
    <div class="card-front"><img src="${poke.img}"><p class="nome">${poke.name}</p></div>
    <div class="card-back">Teste</div>
    </div></div>`;
    img.innerHTML += `${card}`;
    // img.innerHTML += `<img src="${poke.img}">${poke.name}</br>`
    
}  
)


document.getElementById("botao-ordem").addEventListener("click", ordenacao);

function ordenacao() {
    window.data.ordenar();
};

// let ordem = document.getElementById("ordem");
// ordem.innerHTML = `teste ${ordenacao}`;






/*
for (let poke of POKEMONS){
    const img = document.getElementById("result");
    img.innerHTML += `<img src="${poke.img}">${poke.name}</br>`    
}
*/
