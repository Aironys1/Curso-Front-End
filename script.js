let botaohtml = document.getElementById("html");
let paragrafoHtml = document.getElementById("paragrafoHtml");

let botaocss = document.getElementById("css");
let paragrafoCss = document.getElementById("paragrafoCss");

let botaojs = document.getElementById("js");
let paragrafoJs = document.getElementById("paragrafoJs");



botaohtml.addEventListener("click", () => {
    
});

botaocss.addEventListener("click", () => {
  
});

botaojs.addEventListener("click", () => {
});

// Define a função de clique
function html() {
  // Modifica o conteúdo do parágrafo
  paragrafoHtml.textContent = 
  `"O HTML existe desde 1991 e atualmente está na versão 5, 
  que veio recheada de recursos e funcionalidades que trazem melhorias para o 
  desenvolvimento web, sua responsabilidade principal é demarcar a estrutura de 
  uma página da web. Essa estrutura do HTML é formada por um conjunto de elementos, 
  ou seja, os hipertextos, que se conectam entre si formando a página. Os elementos HTML 
  ou também chamados de tags HTML, são utilizados para informar ao navegador que tipo de 
  estrutura é essa que está sendo construída, podendo ser títulos, parágrafos, imagens, links, 
  entre outros.";
  `
}
// CSS
function css() {
  // Modifica o conteúdo do parágrafo
  paragrafoCss.textContent = 
  `"CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos 
  escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação 
  visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor 
  do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações
   de layouts, ajustar imagens para suas respectivas telas e assim por diante.";
  `
}

// JavaScript
function js() {
  // Modifica o conteúdo do parágrafo
  paragrafoJs.textContent = 
  `"JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet.
   As funções de JavaScript podem melhorar a experiência do usuário durante a navegação em um site, 
   como, por exemplo, desde a atualização do feed na página da mídia social até a exibição de animações e 
   mapas interativos. Como uma linguagem de script do lado do cliente, ele é uma das tecnologias principais 
   da World Wide Web. Por exemplo, ao navegar na Internet, é possível visualizar a qualquer momento um carrossel
    de imagens, um menu suspenso “clicar para visualizar” ou mesmo mudar dinamicamente as cores dos elementos de
     uma página da Web. Tudo isso graças ao JavaScript.";
  `
}




// Adiciona um ouvinte de evento de clique ao botão
botaohtml.addEventListener("click", html);
botaocss.addEventListener("click", css);
botaojs.addEventListener("click", js);