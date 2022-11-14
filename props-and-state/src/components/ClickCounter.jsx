import { useState } from 'react'

const ClickCounter = () => {
  var [count, setCount] = useState(0)

  const buttonStyle = {
    backgroundColor: '#1b90ff',
    color: 'white',
    textAlign: 'center',
    fontSize: '20px',
    marginLeft: '20px'
  }

  const handleClick = () => {
    setCount((count += 1))
  }
  const handleUnclick = () => {
    if (count > 0) {
      return setCount((count -= 1))
    }
  }
  return (
    <div>
      <div>Count: {count}</div>
      <div>Click the buttons below to increment the counter</div>
      <button onClick={handleClick} style={buttonStyle}>
        Click!
      </button>
      <button
        onClick={handleUnclick}
        style={{ ...buttonStyle, backgroundColor: 'red' }}
      >
        Unclick!
      </button>
    </div>
  )
}

export default ClickCounter
