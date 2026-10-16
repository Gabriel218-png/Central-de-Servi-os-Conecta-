function mostrar(tela) {
    document.getElementById("catalogo").hidden = true;
    document.getElementById("solicitacao").hidden = true;
    document.getElementById("painel").hidden = true;

    document.getElementById(tela).hidden = false;
}

let busca = document.querySelector("input");

busca.addEventListener("input", function() {
    let nome = busca.value;

    if (nome == "") {
        document.querySelector("#catalogo p").textContent = "Escolha um serviço";
    } else {
        document.querySelector("#catalogo p").textContent = "Buscando " + nome;
    }
});

let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let servico = formulario.querySelector("input").value;
    let descricao = formulario.querySelector("textarea").value;

    if (servico == "" || descricao.length < 15) {
        alert("Preencha tudo direito");
        return;
    }

    let novo = document.createElement("p");
    novo.textContent = servico + " - Aberto";

    document.querySelector("#painel").appendChild(novo);

    alert("Enviado!");

    formulario.reset();
    mostrar("painel");
});

let filtro = document.querySelector("select");

filtro.addEventListener("change", function() {
    alert("Filtro escolhido: " + filtro.value);
});

mostrar("catalogo");
