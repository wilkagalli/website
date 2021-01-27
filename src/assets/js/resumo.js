var resumo = [
  {
    img: "assets/img/barra-de-cereal.jpg",
    descricao: `Barra de ceral de pasta de amendoim e aveia com apenas 6 ingredientes :)`,
  },
  {
    img: "assets/img/barra-de-cereal.jpg",
    descricao: `Barra de ceral de pasta de amendoim e aveia com apenas 6 ingredientes :)`,
  },
  {
    img: "assets/img/goiabinha.jpeg",
    descricao: `Goiabinha - aquela receita deliciosa da padaria na sua casa com apenas 3 ingredientes`,
  },
  {
    img: "assets/img/panquecas.jpg",
    descricao: `Panquecas - um opção saudável e deliciosa para o café da manhã`,
  },
];

function carregaListaResumos() {
  var lista = $("#lista-resumo");

  resumos.forEach((resumo) => {
    lista.append(montaResumo(resumo));
  });
}

function montaResumo() {
  var div = $("<div>").addClass("um-resumo");
  var img = $("<img>").attr("src", resumo.img);
  var descricao = $("<p>").text(resumo.descricao);

  divImg.append(img).append(descricao);

  div.append(divImg);
  return div;
}

carregaListaResumos();
