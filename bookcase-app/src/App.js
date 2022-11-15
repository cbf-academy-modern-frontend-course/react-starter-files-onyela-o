import React, { useState } from 'react'
import Book from './components/Book'
import data from './models/books.json'

function App() {
  const [books] = useState(data)

  const createBook = (book) => {
    const {
      id,
      volumeInfo: {
        title,
        authors,
        imageLinks: { thumbnail },
      },
      saleInfo: { retailPrice },
    } = book
    return (
      <Book
        key={id}
        title={title}
        image={thumbnail}
        authors={authors}
        price={retailPrice?.amount}
      ></Book>
    )
  }
  return books.map(createBook)
}

export default App
