const POKEMONS = POKEMON.pokemon;
const cartao = document.getElementById("cartao");
const botaoFiltro = document.getElementById("botao-filtro");
const botaoFraqueza = document.getElementById("botao-fraqueza")
const botaoOrdem = document.getElementById("botao-ordem")

// passo 1 = pegar cada tipo e fazer uma lista em forma de array / criar menu filtro com a array criada anteriormente
// passo 2 = função do filtro (data.js)
// passo 3 = trem que junta TUDO e exibe certo o que eu quero

//executar a função ao abrir a pagina para listar as opções de filtro e os cards
onload = () => {
    exibeCartao(POKEMONS)
    listaTipos(POKEMONS)
    listaFraqueza(POKEMONS)
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
                <div class="card-back">Altura: ${poke.height}</br>Peso: ${poke.weight}</br>Candys para evolução: ${poke.candy_count}</div>
            </div>
        </div>`;
    })
    cartao.innerHTML = cardzinho;
}
    
//FILTRO-TIPO
// passo 1
function listaTipos(POKEMONS) {
    const filterTypes = []; 
    POKEMONS.map(poke => poke.type.map(type => {
        if (!filterTypes.includes(type)) {
            filterTypes.push(type);
        } else {
            return false;
        }   
    }
    ))

botaoFiltro.innerHTML = "";
botaoFiltro.innerHTML = `<option value="none">Tipo</option>`;
botaoFiltro.innerHTML += filterTypes.map(type => `<option value="${type}">${type}</option>`).join("");
}

// botaoFiltro.addEventListener("change", () => {
//     if (botaoFiltro.value == "none") {
//         exibeCartao(POKEMONS);
//     } else {
//         exibeCartao(app.filtrar(POKEMONS, botaoFiltro.value));
//     }
// })


//FILTRO-FRAQUEZA
function listaFraqueza(POKEMONS) {
    const filterWeak = []; 
    POKEMONS.map(poke => poke.weaknesses.map(weaknesses => {
        if (!filterWeak.includes(weaknesses)) {
            filterWeak.push(weaknesses);
        } else {
            return false;
        }   
    }
    ))

botaoFraqueza.innerHTML = "";
botaoFraqueza.innerHTML = `<option value="none">Fraqueza</option>`;
botaoFraqueza.innerHTML += filterWeak.map(weaknesses => `<option value="${weaknesses}">${weaknesses}</option>`).join("");
}

// botaoFraqueza.addEventListener("change", () => {
//     if (botaoFraqueza.value == "none") {
//         exibeCartao(POKEMONS);
//     } else {
//         exibeCartao(app.filtrarf(POKEMONS, botaoFraqueza.value));
//     }
// })


//passo 3
botaoFiltro.addEventListener("change", teste)
botaoFraqueza.addEventListener("change", teste)

function teste() {
    if (botaoFiltro.value == "none" && botaoFraqueza.value == "none") {
        exibeCartao(POKEMONS);
    } else if (botaoFiltro.value == "none" && botaoFraqueza.value != "none") {
        exibeCartao(app.filtrarf(POKEMONS, botaoFraqueza.value));
    } else if (botaoFiltro.value != "none" && botaoFraqueza.value == "none") {
        exibeCartao(app.filtrar(POKEMONS, botaoFiltro.value));
    } else {
        alert("fazer uma função que interpole os dois resultados e exiba os resultados em comum");
    }
}


function listaAlf (POKEMONS){
    POKEMONS.sort()

}


//document.getElementById("botao-ordem").addEventListener("change", ordenacao);//


// function ordenacao() {
//     window.data.ordenar();
// };




