import React from 'react'

const Book = ({ book }) => {
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
    saleInfo: { retailPrice },
  } = book
  return (
    <div>
      <h1>{title}</h1>
      {authors.length > 1 ? <p>{authors.join(' & ')}</p> : <p>{authors}</p>}
      {retailPrice ? (
        <p>£{retailPrice && retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )}
      <p>{description.substring(0, 400)}...</p>
      <img src={thumbnail} alt={title} />
    </div>
  )
}

export default Book
