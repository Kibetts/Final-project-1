function showBook(book){

    let card = document.createElement("li");
    card.className = "card";

    let bookContainer = document.createElement("div");
  bookContainer.className = "bookContainer";

  let image = document.createElement("img");
  image.src = book.image;
  image.alt = "Book Image";

  image.addEventListener("click", () => {
    renderBookDetails(book);
  });

  let detailsContainer = document.createElement("div");
  detailsContainer.className = "detailsContainer";

  let title = document.createElement("p");
  title.textContent = book.name;
    
  detailsContainer.appendChild(title);
  
  bookContainer.appendChild(image);
  bookContainer.appendChild(detailsContainer);
  
  card.appendChild(bookContainer);

   document.querySelector("#main").appendChild(card);
    }

function RenderBookDetails(book){

    }

function getBooks(){
    fetch("https://bookdata-xji4.onrender.com/books")
    .then(books => books.json())
    .then(books => books.forEach(book =>{
        showBook(book)
    }))
}
document.addEventListener("DOMContentLoaded", getBooks());