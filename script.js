import {collection} from "./data/players.js";

function createCards(position = "all") {
    
    const main = document.querySelector("main");
    let containerAlreadyExists = main.querySelector(".players-container");
    if(containerAlreadyExists) {
        containerAlreadyExists.remove();
    }

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
        <a href="${player.instagram}" target="_blank"><img src="assets/instagram_logo_white.png" alt="Instagram Logo"></a>
        `;
        if (position === "all") {
            container.appendChild(newSection);
        } else if(position !== player.position.toLowerCase()) {
            continue;
        } else {
            container.appendChild(newSection);
        }        
    }
    main.appendChild(container);
    }
createCards();


const event = document.addEventListener("change", function () {
    let position = document.getElementById("position").value;
    createCards(position);
    })   



