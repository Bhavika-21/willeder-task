// Import necessary modules
import React from 'react'

// Import CSS file
import './Cards.scss'

// Define the Cards component
const Cards = () => {
 // Return JSX to render the Cards component
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

// Export the Cards component for use in other modules
export default Cards