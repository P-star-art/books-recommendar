import React, { useState } from "react";
import "./styles.css";

const bookLibrary = {
  fiction: [
    {
      title: "Harry Potter",
      author: "JK Rowling",
      rating: "4.9 / 5"
    },
    {
      title: "Game of Thrones",
      author: "George Martin",
      rating: "4.8 / 5"
    }
  ],
  nonFiciton: [
    {
      title: "Sapiens",
      author: "Yuval Harari",
      rating: "4.7 / 5"
    },
    {
      title: "In Cold Blood",
      author: "Trauman Capate",
      rating: "4.5 / 5"
    }
  ],
  autobiography: [
    {
      title: "Long walk to Freedom",
      author: "Nelson Mandela",
      rating: "4.9 / 5"
    },
    {
      title: "The story of my Life",
      author: "Helen Keller",
      rating: "4.7 / 5"
    }
  ],
  selfHelp: [
    {
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      rating: "4.9 / 5"
    },
    {
      title: "Rich dad Poor dad ",
      author: "Robert Kiyosaki",
      rating: "4.7 / 5"
    }
  ]
};

var books = Object.keys(bookLibrary);

export default function App() {
  const [genre, setGenre] = useState("fiction");

  function clickHandler(i) {
    setGenre(i);
  }

  return (
    <div className="App">
      <h1>Book Recommendations</h1>
      {books.map((item, id) => {
        return (
          <button
            key={id}
            onClick={() => clickHandler(item)}
            style={{
              padding: "7px",
              margin: "3px",
              backgroundColor: "#A5B4FC",
              border: "none",
              borderRadius: "5px"
            }}
          >
            {item}
          </button>
        );
      })}
      <ul>
        {bookLibrary[genre].map((book, id) => {
          return (
            <div key={book} style={{ padding: "3px" }}>
              <h2>{book.title}</h2>
              <h4>Author: {book.author}</h4>
              <h5>Rating: {book.rating}</h5>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
