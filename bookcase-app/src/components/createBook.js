import Book from './Book'

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

export default createBook
