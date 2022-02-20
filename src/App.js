import React, { useEffect, useState } from 'react';
import './App.css';
import { Books } from "./components/Books";
import { BookForm } from "./components/BookForm";
import { Container } from "semantic-ui-react";
import axios from 'axios';
 
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {

    const fetchdata = async () => {
      try {
          const { data: response } = await axios.get(`/api/books`);
          setBooks(response.books);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchdata();

    }, []);

    console.log(books)



  return (
    <Container style={{ marginTop: 40 }}>
      <BookForm onNewBook={book => setBooks(currentBooks => [book, ...currentBooks])} />
      <Books books={books}/>
    </Container>
  );
}

export default App;

