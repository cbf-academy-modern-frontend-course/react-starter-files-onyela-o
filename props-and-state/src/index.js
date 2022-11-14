import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList'
import ClickCounter from './components/ClickCounter'
const mainStyle = { fontFamily: 'Arial' }

const App = () => {
  const headphones = [
    { title: 'Headphones 1', price: '£340' },
    { title: 'Headphones 2', price: '£120' },
    { title: 'Headphones 3', price: '£80' },
    { title: 'Headphones 4', price: '£150' },
    { title: 'Headphones 5', price: '£20' },
  ]
  const [headphonesList] = useState(headphones)

  return (
    <section style={mainStyle}>
      <h1>Electronics Store</h1>

      <GadgetList items={headphonesList} />
      <br></br>
      <ClickCounter />
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
