import React, { useEffect, useState } from 'react';
import './App.css';
import { Books } from "./components/Books";
import { BookForm } from "./components/BookForm";
import { Container } from "semantic-ui-react";
 
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(`${process.env.REACT_APP_BACKEND_URL}/books`)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/books`).then(response => 
      response.json().then(data => {
        setBooks(data.books);
      })
      );
    }, [])
    console.log(books)

  return (
    <Container style={{ marginTop: 40 }}>
      <BookForm onNewBook={book => setBooks(currentBooks => [book, ...currentBooks])} />
      <Books books={books}/>
    </Container>
  );
}

export default App;

