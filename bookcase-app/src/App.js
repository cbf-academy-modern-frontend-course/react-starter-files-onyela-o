import React, { useState } from 'react'
import Book from './components/Book'
import data from './models/books.json'

function App() {
  const [books] = useState(data)

  const createBook = (book) => {
    const { title, authors } = book.volumeInfo
    const { thumbnail } = book.volumeInfo.imageLinks
    return (
      <Book
        key={book.id}
        title={title}
        image={thumbnail}
        authors={authors}
        price={book?.saleInfo?.retailPrice?.amount}
      ></Book>
    )
  }
  return books.map(createBook)
}

export default App
