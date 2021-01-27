var viagens = [
  {
    nome: "PONTOS TURÍSTICOS GRATUITOS DO PORTO",
    img: "img/aliados1.jpeg",
    descricao: `
Ta pensando em viajar mas também quer economizar? 
Nada como fazer aquela pesquisa dos lugares que você pode visitar sem precisar gastar seu tão suado dinheiro, certo? 
Deixo aqui pra vocês alguns pontos turísticos do Porto que valem muito a pena visitar.
E o melhor: você não precisa desembolsar nada!`,
  },

  {
    nome: "OS MELHORES PONTOS DO PORTO PARA VER O PÔR DO SOL",
    img: "img/castelo-do-queijo.jpeg",
    descricao: `
Quem também é apaixonado por um pôr do sol?
Confesso que a primeira vez que parei pra apreciar o pôr do sol foi no Porto, e aqui não faltam lugares perfeitos pra esse momento.
Não importa se o lugar é natural ou urbano, o pôr do sol é sempre espetacular, deixo pra vocês alguns lugares pra apreciar esse momento no Porto :)`,
  },

  {
    nome: "LUGARES QUE VOCÊ NÃO PODE DEIXAR DE CONHECER NO PORTO",
    img: "img/porto2.jpeg",
    descricao: `
Se você já deu uma pesquisada, não deve ser novidade pra você que Portugal é um país lindo.
Que vai desde as paisagens naturais até as construlões mais antigas. 
Deixo aqui pra vocês alguns lugares que vocês não podem deixar de visitar no Porto`,
  },
];

function carregaListaViagem() {
  var lista = $("#lista-viagem");
  viagens.forEach((viagem) => {
    lista.append(montaViagem(viagem));
    lista.append(montaSeparador());
  });
}

function montaViagem(viagem) {
  var div = $("<div>").addClass("uma-viagem");
  var titulo = $("<h2>").text(viagem.nome);
  var divDesc = $("<div>").addClass("desc-container");
  var divImg = $("<div>").addClass("img-container");
  var img = $("<img>").attr("src", viagem.img);
  var descricao = $("<p>").text(viagem.descricao);
  var botao = $("<button>")
    .addClass("btn btn-light botao-img")
    .text("Continue lendo...");

  divImg.append(img).append(botao);
  divDesc.append(divImg).append(descricao);

  div.append(titulo);
  div.append(divDesc);
  // div.append(botao);

  return div;
}

function montaSeparador() {
  var div = $("<div>").addClass("separador");
  var img1 = $("<img>").attr("src", "img/separador-plane.png");
  var img2 = $("<img>").attr("src", "img/separador-cloud.png");
  var img3 = $("<img>").attr("src", "img/separador-plane.png");

  div.append(img1);
  div.append(img2);
  div.append(img3);

  return div;
}

carregaListaViagem();
