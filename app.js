function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log("Section:", section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome da linguagem</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log("Campo Pesquisa:", campoPesquisa);
    console.log("Dados:", dados);

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        
        // Se título inclui campoPesquisa ou descrição inclui campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }    
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados || "<p>Nenhum resultado encontrado.</p>";
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("button").addEventListener("click", pesquisar);
});
