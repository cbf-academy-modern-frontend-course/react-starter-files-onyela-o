import React from 'react'

const GadgetList = (props) => {
  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item, index) => (
        <div key={`headphone-product-${index}`}>
          <div>{item.title}</div>
          <div style={{ color: 'red' }}>{item.price}</div>
        </div>
      ))}
    </main>
  )
}

export default GadgetList
