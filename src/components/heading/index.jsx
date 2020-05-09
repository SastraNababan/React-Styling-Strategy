import React from 'react'
// import './index.css'
// import './index.scss'
// javascript reserved keyword

const titleStyle = {
  "font-size": "40px",
  "color": "#6495ED"
}
export default function Heading({title = "Example of Heading"}) {
  return (
    <h1 style={titleStyle}> {title} </h1>
  )
}
