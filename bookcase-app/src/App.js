import React, { useState } from 'react'
import Book from './components/Book'
import data from './models/books.json'
import createBook from './components/createBook'
import PropTypes from 'prop-types'

function App() {
  const [books] = useState(data)

  return books.map(createBook)
}

export default App
