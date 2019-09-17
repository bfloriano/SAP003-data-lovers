const POKEMONS = POKEMON.pokemon;
const cartao = document.getElementById("cartao");
const botaoFiltro = document.getElementById("botao-filtro");

// passo 1 = criar a variável pra pegar cada tipo e fazer uma lista em forma de array
// passo 2 = criar menu filtro com a array criada anteriormente
// passo 3 = função do filtro (data.js)
// passo 4 = função de exibição do filtro
// passo 5 = trem que junta TUDO  e exibe certo o que eu quero

//executar a função para listar as opções de filtro e os cards
onload = () => {
    exibeCartao(POKEMONS)
    listaTipos(POKEMONS)
}; 

// passo 1:
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

// passo 2:
botaoFiltro.innerHTML = "";
botaoFiltro.innerHTML = `<option value="none">Pokemons do Tipo...</option>`;
botaoFiltro.innerHTML += filterTypes.map(type => `<option value="${type}">${type}</option>`).join("");

}

// passo 5:

botaoFiltro.addEventListener("change", () => exibeCartao(app.filtrar(POKEMONS, botaoFiltro.value)));



function exibeCartao(arr) {
    arr.map(poke => {
        let card = `
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${poke.img}" />
                    <p class="nome">${poke.name}</p>
                </div>
                <div class="card-back">Teste</div>
            </div>
        </div>`;
        cartao.innerHTML += `${card}`; 
    })
    }
    

    
// document.getElementById("botao-ordem").addEventListener("change", ordenacao);


// function ordenacao() {
//     window.data.ordenar();
// };




