//window.alert("Jogadores disponíveis: neymar, lucas paqueta, vinicius junior");

function busca() {
    let busca = document.getElementById("busca").value.toUpperCase();

    if (busca === "NEYMAR" || busca === "NJ" || busca === "NJR" || busca === "NEY") {
        document.getElementById("topo").innerHTML = "<h2>Neymar Junior.</h2>";
        document.getElementById("imag").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/220px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg" alt="">';
        document.getElementById("tela").innerHTML = "<p>Neymar da Silva Santos Júnior (Mogi das Cruzes, 5 de fevereiro de 1992) é um futebolista brasileiro que atua como atacante. Atualmente joga no Al-Hilal, da Arábia Saudita.</p>";
        document.getElementById("tela2").innerHTML = "<p>Revelado pelo Santos em 2009, desde cedo correspondeu às expectativas e conquistou diversos títulos com o clube, incluindo dois Campeonatos Paulistas seguidos, uma Copa do Brasil e uma Libertadores, sendo esta a primeira do Peixe desde 1963. Ganhou por duas vezes seguidas o prêmio de melhor jogador sul-americano do ano, em 2011 e 2012, e um prêmio Puskás de gol mais bonito do ano em 2011. Em 2013, após ser protagonista no título da Copa das Confederações pela Seleção Brasileira.</p>";
        document.getElementById("tela3").innerHTML = "<p>Confira mais na <a href=\"https://pt.wikipedia.org/wiki/Neymar\">wikipédia</a></p>";

    } else if (busca === "VINICIUS JUNIOR" || busca === "VINI" || busca === "VN" || busca === "VINICIUS") {
        document.getElementById("topo").innerHTML = "<h2>Vinicius Junior.</h2>";
        document.getElementById("imag").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vinicius_Jr_2021.jpg/200px-Vinicius_Jr_2021.jpg" alt="Vinícius Júnior">';
        document.getElementById("tela").innerHTML = "<p>Vinicius José Paixão de Oliveira Junior (São Gonçalo,[1] 12 de julho de 2000) é um futebolista brasileiro que atua como ponta-esquerda. Atualmente joga pelo Real Madrid e pela Seleção Brasileira.</p>";
        document.getElementById("tela2").innerHTML = "<p>Em 2017, o atacante entrou para a história do futebol mundial. Com apenas 16 anos, foi vendido pelo Flamengo ao Real Madrid por 45 milhões de euros. Este valor representou, à época, a 2ª maior venda da história do futebol brasileiro, atrás apenas da venda de Neymar, e ainda o maior valor já pago por um futebolista com menos de 19 anos de idade.[4] No dia 28 de maio de 2022, foi autor do gol que deu o 14° título de Liga dos Campeões da UEFA ao Real Madrid.[5] Atualmente sua carreira é agenciada pela agência Play9.[6]</p>";
        document.getElementById("tela3").innerHTML = '<p>Confira mais na <a href="https://pt.wikipedia.org/wiki/Vin%C3%ADcius_J%C3%BAnior">wikipédia</a></p>';

    } else if (busca === "LUCAS PAQUETA" || busca === "LUCAS" || busca === "PAQUETA" || busca === "PAQUEBET") {
        document.getElementById("topo").innerHTML = "<h2>Lucas Paquetá.</h2>";
        document.getElementById("imag").innerHTML = '<img src="https://64.media.tumblr.com/f91c98221992804c1fe24c7dfce1e702/f696c9b3f3269850-d3/s540x810/54244e066e3df40e44bc769c036dc4409155d523.jpg" alt="Lucas Paquetá">';
        document.getElementById("tela").innerHTML = "<p>Lucas Tolentino Coelho de Lima (Rio de Janeiro, 27 de agosto de 1997), popularmente conhecido como Lucas Paquetá, é um futebolista brasileiro que atua como meio-campista. Atualmente joga pelo West Ham e pela Seleção Brasileira.</p>";
        document.getElementById("tela2").innerHTML = "<p>Revelado pelo Flamengo, no ano de 2018 foi um dos escolhidos para fazer parte da lista de 12 suplentes chamados pelo técnico da Seleção Brasileira, Tite, para a disputa da Copa do Mundo de 2018, sendo o mais novo dentre os 35 convocados. No mesmo ano, atuando pelo clube rubro-negro, recebeu o Troféu Bola de Prata da ESPN, o Troféu Mesa Redonda da TV Gazeta, e o Prêmio Craque do Brasileirão, da CBF e do site GloboEsporte.com, ambos como melhor meia do Campeonato Brasileiro daquele ano.</p>";
        document.getElementById("tela3").innerHTML = '<p>Confira mais na <a href="https://www.bet365.com/#/HO/">wikipédia</a></p>';

    }

    if (busca === "") {
        document.getElementById("tela").innerHTML = "";
        document.getElementById("imag").innerHTML = "";
        document.getElementById("topo").innerHTML = "";
        document.getElementById("tela2").innerHTML = "";
        document.getElementById("tela3").innerHTML = "";
    }
}

function preencherBusca(valor) {
    document.getElementById("busca").value = valor;
    busca(); // Chama a função de busca após definir o valor
}
