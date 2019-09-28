# Data Lovers - Dashboard
 
## Índice
 
* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Histórias do Usuário - H.U.](#2-historia-do-usuario)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Protótipo do projeto](#4-prototipo-do-projeto)
* [5. Considerações gerais](#5-considerações-gerais)
* [6. Testes de Usabilidade](#6-testes-de-usabilidade)
* [7. Ferramentas Utilizadas](#7-ferramentas-utilizadas)
 
***
 
## 1. Resumo do projeto
 
Esse foi o segundo projeto proposto no curso de desenvolvimento front-end da Laboratória, realizado em dupla.
 
O objetivo do projeto foi introduzir o uso de um banco de dados, onde nos foram passados diferentes temas, e pudemos escolher um de nossa preferência para trabalhar.
 
O banco de dados escolhido foi o Pokémons. A partir daí, foram criadas histórias de usuários, que nos permitiram desenvolver diferentes funcionalidades.

Link para acessar nossa plataforma:
[PokeWorld](https://bfloriano.github.io/SAP003-data-lovers/src/index)
 
## 2. Histórias de Usuários - H.U.
 
### Personas
 
Para o desenvolvimentos das histórias de usuários, criamos protótipos de personas:
 
 - Persona 1 -![Protótipo 1](/src/imagens/persona1.jpeg)
 
 - Persona 2  -![Protótipo 1](/src/imagens/persona2.jpeg)
 
 - Persona 3  -![Protótipo 1](/src/imagens/persona3.jpeg)
 
 - Persona 4  -![Protótipo 1](/src/imagens/persona4.jpeg)

 - Persona 5 -![Protótipo 1](/src/imagens/persona5.jpeg)

 - Persona 6  -![Protótipo 1](/src/imagens/persona6.jpeg)

De acordo com as proto-personas criadas, desenvolvemos diversas histórias de usuários para basear a criação de funcionalidades que atendem os pré-requisitos do projeto.
 
### H.U. 1 - Exibir dados na tela
 
“Como jogador de pokémon, eu gostaria de ver todos eles em uma única plataforma, além de poder visualizar suas características mais importantes, para me organizar e ter um acesso fácil das informações.”
 
### H.U. 2 - Filtrar pokémons por tipo
 
“Como um jogador de pokémon, eu quero filtrá-los por tipo, para poder separá-los mais facilmente e evoluir de maneira proporcional meus pokémons do tipo água e do tipo fogo.“ 
 
### H.U. 3 - Filtrar pokémons por fraqueza
 
“Como um jogador de pokémon, eu quero poder consultá-los de acordo com suas fraquezas, para que eu possa entrar numa batalha e saber qual pokémon atacar com mais possibilidade de vitória.“
 
### H.U. 4 - Ordenação por nome em ordem alfabética
 
“Como um usuário da plataforma, eu quero poder visualizar meus pokémons em ordem alfabética, para encontrar mais facilmente um pokémon específico.“
 
### H.U. 5 - Ordenação dos pokémons por raridade
 
“Como um jogador de pokémon, eu quero saber quais pokémons são os mais raros para poder ir à caça e me tornar um jogador de alto nível.“
 
### H.U. 6 - Cálculo de média
 
“Como um usuário da plataforma, gostaria de ter acesso a informações a nível de curiosidade, como qual o pokémon mais pesado por exemplo, para poder conversar com outros jogadores sobre isso.“
 
## 3. Funcionalidades
 
As histórias de usuário criadas, nos permitiram focar em três funcionalidades básicas, que são:
- filtro
- ordenação
- cálculos relacionados à média
 
Exploramos cada uma das funcionalidades de maneira a tornar a experiência do usuário mais agradável e fazer da plataforma algo realmente útil aos jogadores de pokémons.
 
Ao explorar a funcionalidade filtro, optamos por filtrar dois tipos de dados diferentes. Primeiramente o filtro baseado no tipo do pokémon, que oferece opções como Water`, `Ice` ou `Flying` por exemplo. E o filtro baseado nas fraquezas de cada pokémon.
 
A funcionalidade de ordenação, foi explorada visando oferecer ao usuário mais praticidade, permitindo a consulta dos dados ordenando os pokémons pelo nome em ordem alfabética, e também permite ao usuário ordená-los de acordo com o quão raro eles são.
 
Por último, os cálculos relacionados à média, foram dispostos no formato de curiosidades, onde é possível visualizar a média de altura de todos os pokémons, e a média de peso entre eles. Além de informar os pokémons que estão nos extremos dessas categorias, o mais baixo deles, o mais alto, o mais leve, e o mais pesado. 
 
Para a criação de cada funcionalidade, foram estabelecidos critérios que deveriam ser atendidos para a funcionalidade atender a `definição de pronto`.
 
 
## 4. Protótipo do projeto
Depois das proto-personas criadas e histórias dos usuários feitas, fizemos alguns protótipos de como pensamos que ficaria o site, tanto na tela de um computador quanto na tela de celular, sempre pensando em atender as necessidades do usuário da melhor forma.
 
Estes foram alguns rascunhos que criamos do projeto:
 
 - Protótipo da criação no papel <br/>![Protótipo 1](/src/imagens/prototipo1.jpeg)<br/><br/>
 - Link do app Marvel
 [Clique para ver](https://marvelapp.com/project/4344075/)<br/>
![Protótipo ](/src/imagens/tela1.jpeg)
 

 - protótipo da criação no computador <br/>  ![Protótipo ](/src/imagens/prototipo2.jpeg)
 
 
## 5. Considerações Gerais
 
O projeto tinha como objetivo desenvolver uma interface clara e objetiva, focando em atender as necessidades do usuário e visando deixar o projeto final da melhor forma possível.
Além disso, pensar na melhor forma de manipulação dos dados, com intuito de sempre otimizar o código e deixar a visualização e entendimento cada vez melhores.
 
No arquivo main.js foi desenvolvida toda a parte de exibição dos dados na tela e a interação com o usuário a partir dos eventos DOM. 
O arquivo data.js armazena as funções referentes às funcionalidades criadas, ou seja, nele estão expressas as funções responsáveis pelo filtro, ordenação, e cálculo da média dos dados. Essas funções são chamadas e utilizadas no arquivo main.js de acordo com as interações do usuário com a plataforma.
 
Para atender as definições de pronto, cada uma das funcionalidades deveria passar por testes unitários, que comprovariam seu funcionamento correto de acordo com o estabelecido. Foram criados então, alguns testes unitários, mais especificamente, dois testes para cada funcionalidade, que comprovaram que as funções estavam funcionando corretamente.
 
## 6. Testes de Usabilidade
 
Testes de usabilidades são testes realizados com os usuários para obter feedbacks e a partir disso, realizar as melhorias que passaram despercebidas. Realizando esses testes, conseguimos identificar que algumas cores que usamos não estava sendo agradável para os usuários. Outro ítem que pudemos identificar foi sobre a parte de curiosidades, que para nós a melhor opção seria na vertical, do lado esquerdo da tela, mas para nossos usuários a melhor opção foi na horizontal logo no início da página.
 
## 7. Ferramentas Utilizadas
 
 - Visual Studio CODE
 - Vanilla JavaScript
 - HTML
 - CSS
 - Framework de testes Jest
 - GIT
 - GitHub
