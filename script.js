

function submitBook(e){
  e.preventDefault()
  const title = document.getElementById("name").value;
  const imageUrl = document.getElementById("image_url").value;
  const author = document.getElementById("author").value;
  const publisher = document.getElementById("publisher").value;
  const pageCount = document.getElementById("page-count").value;

  const book = {
    name: title,
    image: imageUrl,
    Author: author,
    Publisher: publisher,
    "Page count": pageCount,
  };

  fetch("https://bookdata-xji4.onrender.com/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
  .then(response => response.json())
  .then(newBook => {
   
    showBook(newBook);

      
      document.getElementById("name").value = "";
      document.getElementById("image_url").value = "";
      document.getElementById("author").value = "";
      document.getElementById("publisher").value = "";
      document.getElementById("page-count").value = "";
    })
    .catch(error => {
      console.error("Error:", error);
    });

}

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

        <div class="actions">
      <button type="button" id="like-button-${book.id}">Like
      
      <span class="like-count">${book.likes ? book.likes : 0}</span>
<span class="heart-icon ${book.likes ? 'liked' : ''}">&#10084;</span>


      </button>
    </div>

        `;
        let image = card.querySelector("img")
        image.addEventListener("click", ()=>{
          const bookDetails = document.querySelector(`#book-details-${book.id}`);
          bookDetails.innerHTML = `
            <p>Author: ${book.Author}</p>
            <p>Page Count: ${book['Page count']}</p>
            <p>Publisher: ${book.Publisher}</p>
            <button  type="button" id="read-button-${book.id}">Read Book</button >
          `;

          const readButton = card.querySelector(`#read-button-${book.id}`);
          readButton.addEventListener('click', () => {
            window.open('./assets/Into the Wild PDF.pdf', '_blank');
          });
        } 
        );
        const likeButton = card.querySelector(`#like-button-${book.id}`);
        likeButton.addEventListener('click', () => {
          likeBook(book.id, likeButton);
        })
    

   document.querySelector("#main").appendChild(card);
    }
    
function likeBook(bookId, likeButton) {

      fetch(`https://bookdata-xji4.onrender.com/books/${bookId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: true }),
      })
      .then(response => response.json())
      .then(updatedBook => {
        const likeCountElement = likeButton.querySelector(".like-count");
        const heartIcon = likeButton.querySelector(".heart-icon");
    
        updatedBook.likes = updatedBook.likes || 0;
        likeCountElement.textContent = updatedBook.likes;
        heartIcon.classList.toggle("liked");
    })
    
      }
      

    function getBooks() {
      fetch("https://bookdata-xji4.onrender.com/books")
      .then(books => books.json())
      .then(books => {
        books.forEach(book => {
          showBook(book);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
    
document.addEventListener("DOMContentLoaded", getBooks());