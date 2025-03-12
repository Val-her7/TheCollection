import {collection} from "./data/players.js";

function createCards() {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.classList.add("players-container");

    for(let player of collection) {
        const newSection = document.createElement("section");
        newSection.classList.add("player", player.position.toLowerCase());

        const playerId = player.name.replace(/\s/, "-");
        newSection.id = playerId;

        newSection.innerHTML =
        `<img src="${player.image}">
        <h2>${player.name}</h2>
        <div class="container">
            <p>${player.number}</p><p>${player.position}</p><p>${player.nationality}</p>
        </div>
        <p>${player.bio}</p>
        <hr>
        <a href="${player.instagram}" target="_blank"><img src="assets/instagram_logo.png" alt="Instagram Logo"></a>
        `;

        container.appendChild(newSection);
    }
    main.appendChild(container);
    console.log(container.children)
}
createCards();