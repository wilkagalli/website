var receitas = [
  {
    nome: "Barra de Cereal",
    img: "img/barra-de-cereal.jpg",
    informacoes: `
PREPARO: 15 minutos
TEMPO DE ESPERA: 4 horas
RENDIMENTO: 7 a 10 barrinhas`,
    descricao: `
Uma ótima opção pra lanchinho ou pra matar aquela vontade de um docinho ou até mesmo uma opção pré-treino. 
Fica essa dica super prática e deliciosa pra vocês fazerem em casa.`,
    ingredientes: `• 2 colheres de pasta de amendoim 🥜
• 1/2 xícara aveia em flocos
• 1/4 xícara de granola 1colher de farinha de linhaça
• 2 colheres de sopa de iogurte grego sem sabor
• 60g de chocolate 70% cacau 🍫 
`,
    modoPreparo: `1. Misture bem todos os ingredientes e despeje a mistura em uma forma de bolo inglês untada com óleo de coco. 
2. Derreta o chocolate em banho maria e coloque por cima da mistura. Leve à geladeira por 4 horas. 
3. Depois é só retirar da forma e cortar. 😋`,
  },

  {
    nome: "Goiabinha",
    img: "img/goiabinha.jpeg",
    informacoes: `
PREPARO: 30 minutos
TEMPO DE ESPERA: 1 horas
RENDIMENTO: 30 goiabinhaas`,
    descricao: `
Que tal aquela receitinha delicios pra um lanchinho da tarde? Quem não gostaria de aprender a fazer essa delícia da padaria?
Aproveita a receita que é ótima pra fazer com a família e fazer aquela baguncinha gostosa.`,
    ingredientes: `• 1xicara se manteiga
• 2xicaras de farinha de trigo
• 4colheres de sopa de açúcar`,
    modoPreparo: `1. Misture a manteiga com o açúcar, depois acrescente o trigo e amasse até virar uma massa homogênea. 
2. Depois é só fazer as bolinhas, colocar a goiabada e levar ao forno em temperatura alta até que a parte de baixo do biscoitinho fique dourada e está pronto.
3. Fácil e prático 🤤😍😋
`,
  },

  {
    nome: "Panquecas",
    img: "img/panquecas.jpg",
    informacoes: `
PREPARO: 15 minutos
TEMPO DE COZIMENTO: 20 minutos
RENDIMENTO: 15 panquecas`,
    descricao: `
Aquela opção deliciosa e saudável para o café da manhã. 
As famosas panquecas americanas. Aproveita a receita pra fazer aquele café da manhã especial pra pessoa que você ama :)`,
    ingredientes: `• 1 colher de açúcar de coco 🥥
• 3 cs de chá de fermento em pó
• 2 ovos levemente batidos,🥚
• 1 xc de leite 🥛
• 2 cs de óleo de coco 🥥
• pitada de sal 🧂`,
    modoPreparo: `1. Misture a farinha, o açúcar, o fermento e o sal.
2. Separadamente misture os ovos, o leite e o óleo.
3. Acrescente os líquidos aos secos, sem misturar em excesso.
4. Aqueça e unte a frigideira com óleo, depois é só fazer as panquecas do tamanho que preferir (em fogo médio) 😋 🥞`,
  },
];

function carregaListaReceita() {
  var lista = $("#lista-receita");

  receitas.forEach((receita) => {
    lista.append(montaReceita(receita));
    lista.append(montaSeparador());
  });
}

function montaReceita(receita) {
  var div = $("<div>").addClass("uma-receita");
  var titulo = $("<h2>").text(receita.nome);
  var descricao = $("<p>").text(receita.descricao);

  var ingredientes = $("<p>").text(receita.ingredientes);
  var modoPreparo = $("<p>").text(receita.modoPreparo);

  var img = $("<img>").attr("src", receita.img);
  var informacoes = $("<p>").text(receita.informacoes);

  var divImg = $("<div>").addClass("img-container");

  divImg.append(img).append(informacoes);

  var tituloIngredientes = $("<h3>").text("INGREDIENTES");
  var tituloPreparo = $("<h3>").text("MODO DE PREPARO");

  var divReceita = $("<div>").addClass("receita-container");

  divReceita
    .append(descricao)
    .append(tituloIngredientes)
    .append(ingredientes)
    .append(tituloPreparo)
    .append(modoPreparo);

  div.append(titulo);
  div.append(divImg);

  div.append(divReceita);

  return div;
}

function montaSeparador() {
  var div = $("<div>").addClass("separador");
  var img1 = $("<img>").attr("src", "img/separador1.png");
  var img2 = $("<img>").attr("src", "img/separador2.png");
  var img3 = $("<img>").attr("src", "img/separador3.png");

  div.append(img1);
  div.append(img2);
  div.append(img3);

  return div;
}

carregaListaReceita();
