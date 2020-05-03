import React from 'react'

const defaultImg = "https://i.imgur.com/jYD9RbZ.jpg";

export default function index({imgSrc=defaultImg}) {
  return (
    <div className="card-container">
      <img className="card-image" src={imgSrc} alt="user" />
      <h3 className="card-title">Sastra Nababan</h3>
      <h6 className="card-subtitle">Medan, Indonesia</h6>
      <p className="card-description">Software Engineer <br/> Penggemar Kopi Native</p>
    </div>
  );
}