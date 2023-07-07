function showBook(book){

    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML =`

        <div class="cardContainer" >
      <img src="${book.image}"  style ="width:200px; height:300px" data-id="${book.id}">

        <div id="details" >
        <p >${book.name}</p>
        </div>

        <div id="book-details-${book.id}"></div>
        </div>

        `;
        let image = card.querySelector("img")
        image.addEventListener("click", ()=>{
          const bookDetails = document.querySelector(`#book-details-${book.id}`);
          bookDetails.innerHTML = `
            <p>Author: ${book.Author}</p>
            <p>Page Count: ${book['Page count']}</p>
            <p>Publisher: ${book.Publisher}</p>
          `;
        });
    
   document.querySelector("#main").appendChild(card);
    }
    


function getBooks(){
    fetch("https://bookdata-xji4.onrender.com/books")
    .then(books => books.json())
    .then(books => books.forEach(book =>{
        showBook(book)
    }))
}


document.addEventListener("DOMContentLoaded", getBooks());