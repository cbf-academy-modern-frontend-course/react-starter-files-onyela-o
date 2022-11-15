import React from 'react'

function Book(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        by{' '}
        {props.authors?.length > 1 ? (
          <span>{props.authors.join(' & ')}</span>
        ) : (
          <span>{props.authors}</span>
        )}
      </div>
      {props.price ? <p>£{props.price}</p> : <p>No price</p>}
      <img src={props.image} alt={props.title}></img>
      <br></br>
    </div>
  )
}

export default Book
