function showBook(book){

    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML =`

        <div class="cardContainer" >
      <img src="${book.image}"  style ="width:200px; height:300px" onclick="showBookDetails(${JSON.stringify(
        book
      )})">

        <div id="details" >
        <p >${book.name}</p>
        </div>

        <div id="book-details-${book.id}"></div>
        </div>

        `


   document.querySelector("#main").appendChild(card);
    }

function RenderBookDetails(){

    }

function getBooks(){
    fetch("https://bookdata-xji4.onrender.com/books")
    .then(books => books.json())
    .then(books => books.forEach(book =>{
        showBook(book)
    }))
}
document.addEventListener("DOMContentLoaded", getBooks());