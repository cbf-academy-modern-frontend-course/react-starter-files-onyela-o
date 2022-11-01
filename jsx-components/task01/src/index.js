import React from 'react'
import ReactDOM from 'react-dom'

function Greeting(name) {
  if (name) {
    return (
      <main id='content' role='main' className='base'>
        <h1>{name}'s React Page</h1>
        <p>[Your short bio goes here]</p>
      </main>
    )
  }
  return (
    <main id='content' role='main' className='base'>
      <h1>Just a React Page</h1>
      <p>Nothing to see here!</p>
    </main>
  )
}

ReactDOM.render(
  [
    Greeting('Ameley'),
    // Greeting(),
  ],
  document.getElementById('root')
)
