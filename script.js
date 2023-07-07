function showBook(book){

    let card = document.createElement("li");
    card.className = "card";

    let bookContainer = document.createElement("div");
  bookContainer.className = "bookContainer";

  let image = document.createElement("img");
  image.src = book.image;
  image.alt = "Book Image";

    
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