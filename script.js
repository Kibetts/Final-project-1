function showBook(){

    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML =`


        <div class="cardContainer">
        <img src="${book.image}">
        <div id="details">
        <p>${book.name}</p>
        </div>
        <div></div>
        </div>

        `
   document.querySelector("main").appendChild(card);
    }

function getBooks(){
    fetch("https://bookdata-xji4.onrender.com/books")
    .then(books => books.json())
    .then(books => books.forEach(book =>{
        showBook(book)
    }))
}