"use strict";

//1.1 bookslist
{
  const bookTitles = ["the_lord_of_the_rings", "alice_adventures_in_wonderland" ];
  
  //1.3 
  const rootDiv = document.getElementById("root");

  function generateList(arr) {
    let list = document.createElement("ul");
    rootDiv.appendChild(list);
    for (let i = 0; i < arr.length; i++) {
      let listItems = document.createElement("li");
      listItems.setAttribute("id", arr[i]);
      listItems.innerText = arr[i];
      list.appendChild(listItems); 
    }
  }
  
  //1.4
  let bookInformation = {
    the_lord_of_the_rings: {
      title: "The Lord Of The Rings",
      author: "J. R. R. Tolkien",
      language: "English"
    },
    alice_adventures_in_wonderland: {
      title: "Alice's Adventures In Wonderland",
      author: "Lewis Carroll",
      language: "English"
    }
  };

  function generateListModification(obj) {
    let list = document.createElement("ul");
    rootDiv.appendChild(list);
    for (let i = 0; i < Object.keys(obj).length; i++) {
      let listItem = document.createElement("li");
      listItem.setAttribute("id", Object.keys(obj)[i]);
      list.appendChild(listItem);
      let listTitle = document.createElement("h2");
      listTitle.innerText = "Title: " + obj[Object.keys(obj)[i]].title;
      list.appendChild(listTitle);
      let listAuthor = document.createElement("h3");
      listAuthor.innerText = "Author: " + obj[Object.keys(obj)[i]].author;
      list.appendChild(listAuthor);
      let listLanguage = document.createElement("h4");
      listLanguage.innerText = "Language: " + obj[Object.keys(obj)[i]].language;
      list.appendChild(listLanguage);
      let sepLine = document.createElement("hr");
      listLanguage.appendChild(sepLine);
    }
  }
  generateListModification(bookInformation);

  //1.7
  let bookCovers = {
    the_lord_of_the_rings: "./lord-of-the-rings-the-one-ring.jpg",
    alice_adventures_in_wonderland: "./14772058082_60a95ddfa2_b.jpg"
  };

  function viewImages(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      let test = document.getElementById(Object.keys(obj)[i]);
      let picture = document.createElement("img");
      picture.setAttribute("src", obj[Object.keys(obj)[i]]);
      picture.setAttribute("alt", "books cover");
      picture.setAttribute("class", "bookCovers");

      test.appendChild(picture);
     
    }
  }
  viewImages(bookCovers);
}


