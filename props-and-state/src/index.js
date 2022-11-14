import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import data from './models/headphones.json'

import GadgetList from './components/GadgetList'
import ClickCounter from './components/ClickCounter'
const mainStyle = { fontFamily: 'Arial' }

const App = () => {

  const [headphonesList] = useState(data)

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
