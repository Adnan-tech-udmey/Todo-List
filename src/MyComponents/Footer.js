import React from 'react'

export const Footer = () => {
  let fotterStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    border: "2px solid red"
    

  }

  return (
    <fotter className="bg-dark text-light py-3" style={fotterStyle}>
    <p className="text-center">
    Copyright &copy; MyTodoList.com
    </p>
    </fotter>
  )
}

export default Footer
