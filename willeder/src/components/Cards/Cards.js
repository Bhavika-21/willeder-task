import React from 'react'
import './Cards.scss'

const Cards = () => {
  return (
    <div className='cards__wrapper' id='page1'>
      <div className="column1"></div>

      <div className="cards__heading">
          <h1>Lorem</h1>
          <h2>subtitle</h2>
      </div>

      <div className="cards">

        <div className="card1">
          <div className="card">
            <p className='card__no'>01</p>
            <p className='card__heading'>Lorem ipsum dolor sit amet.</p>
            <p className='card__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
          </div> 
        </div>

        <div className="card2">
        <div className="card">
            <p className='card__no'>02</p>
            <p className='card__heading'>Lorem ipsum dolor sit amet.</p>
            <p className='card__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="card3">
        <div className="card">
            <p className='card__no'>03</p>
            <p className='card__heading'>Lorem ipsum dolor sit amet.</p>
            <p className='card__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards