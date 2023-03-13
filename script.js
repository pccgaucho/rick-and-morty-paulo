async function executar() {
    const id = Number(document.getElementById("idPersonagem").value);
    const personagem = await buscarPersonagemDaAPI(id);
    const nPersonagem = personagem.name;
    const iPersonagem = personagem.image;
    const divImagem = document.getElementById("imgPersonagem");
    divImagem.src = iPersonagem;
    const divNome = document.getElementById("nomePersonagem");
    divNome.innerHTML = `${nPersonagem}`;
}

async function buscarPersonagemDaAPI(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const response = await fetch(url)
    return response.json()
}
