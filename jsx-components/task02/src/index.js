import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './Profile'

function App() {
  return (
    <div>
      <Profile />
      <Profile name='Onyela' bio='I am learning on the CBF course' />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
