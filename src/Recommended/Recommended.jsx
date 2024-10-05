import React from 'react'
import './Recommended.css'

const Recommended = ({ handleClick }) => {
  return (
    <section className="recommended">
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" onClick={() => handleClick("All Products")}>All Products</button>
          <button className="btns" onClick={() => handleClick("Nike")}>Nike</button>
          <button className="btns" onClick={() => handleClick("Adidas")}>Adidas</button>
          <button className="btns" onClick={() => handleClick("Puma")}>Puma</button>
          <button className="btns" onClick={() => handleClick("Vans")}>Vans</button>
        </div>
      </div>
    </section>
  )
}

export default Recommended