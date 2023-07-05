function showbook(){

    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML =`


        <div class="cardContainer">
        <img src="">
        <div id="details">
        <p></p>
        </div>
        <div></div>
        </div>

        `
   document.querySelector("main").appendChild(card);
    }