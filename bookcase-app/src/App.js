import { useState } from 'react'
import data from './models/books.json'
import Book from './components/Book'

function App() {
  const [books] = useState(data)

  return books.map((book, index) => (
    <Book book={book} key={`book-index-${index}`} />
  ))
}

export default App
