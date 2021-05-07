import React from 'react'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header>
      <h1
        style={{
          background: 'red',
          padding: '30px',
          textAlign: 'center',
          margin: '40px 0px',
        }}
      >
        {title}
      </h1>
      <button onClick={onClick} style={buttonStyle}>
        Add
      </button>
    </header>
  )
}
const buttonStyle = {
  color: 'blue',
  padding: '10px 30px',
  fontSize: '1.2rem',
  margin: '5px 500px',
}
export default Header
