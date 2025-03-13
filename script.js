import {collection} from "./data/players.js";

let allplayers = [... collection];
let copie = [... collection];

function createCards(position = "all") {
    
    const main = document.querySelector("main");
    let containerAlreadyExists = main.querySelector(".players-container");
    if(containerAlreadyExists) {
        containerAlreadyExists.remove();
    }

    const container = document.createElement("div");
    container.classList.add("players-container");

    for(let player of copie) {
        const newSection = document.createElement("section");
        newSection.classList.add("player");

        const playerId = player.name.replace(/\s/, "-");
        newSection.id = playerId;

        newSection.innerHTML =
        `<img src="${player.image}" alt="${player.name}">
        <h2>${player.name}</h2>
        <div class="container">
            <p>${player.number}</p><p>${player.position}</p><p>${player.nationality}</p>
        </div>
        <p>${player.bio}</p>
        <hr>
        <a href="${player.instagram}" target="_blank"><img src="assets/instagram_logo_white.png" alt="Instagram Logo"></a>
        <button type="button" id="${newSection.id}" class="button"><img src="assets/bin.png" alt="Bin Logo"></button>
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
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', function() {
            for(let player of copie) {
                if(this.id.replace(/-/, " ") === player.name) {
                    let index = copie.indexOf(player);
                    let confirmation = confirm(`Are you sure you want to delete ${player.name} from your collection?`);
                    if(confirmation === true){
                        copie.splice(index, 1);
                    createCards(document.getElementById("position").value);
                    }           
                }
            }
        });
    });
    }
createCards();

const filter = document.addEventListener("change", function () {
    let position = document.getElementById("position").value;
    createCards(position);
    })  

const reset = document.getElementById("reset").addEventListener("click", function() { 
    copie = [... allplayers]; 
    createCards(document.getElementById("position").value);       
})