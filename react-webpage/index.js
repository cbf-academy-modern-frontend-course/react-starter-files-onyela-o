'use strict'
function ClickableButton() {
  const [clicked, setClick] = React.useState(false)

  if (clicked) {
    return React.createElement('h1', { className: 'text' }, 'Hello World! :) ')
  }

  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'button',
      {
        className: 'main',
        onClick: () => setClick(true),
      },
      'Press Here'
    )
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(React.createElement(ClickableButton))
