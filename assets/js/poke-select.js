

document.getElementById("pokemonList").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        const pokemonId = event.target.dataset.id;
        displayPokemonDetails(pokemonId);
    }
});

function displayPokemonDetails(pokemonId) {
    const pokemonDescription = getPokemonDescription(pokemonId);
    const descriptionContainer = document.getElementById("pokemonDescription");
    descriptionContainer.innerHTML = `<p>${pokemonDescription}</p>`;

    
    const modal = document.getElementById("pokemonModal");
    modal.style.display = "block";
}


function getPokemonDescription(pokemonId) {
    // Substitua isso com a lógica real para obter a descrição do Pokémon
    return `Description for Pokémon ${pokemonId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
}

function closeModal() {
    const modal = document.getElementById("pokemonModal");
    modal.style.display = "none";
}
