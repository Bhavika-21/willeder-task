import React from 'react'
import './Details.scss';

const Details = () => {
  return (
    <div className='details'>

      <div className="column"></div>

     <div className='details__content'>
        <p className="heading__mobile">Lorem ipsum</p>
        <div className='details__card-img'></div>

        <div className='details__card-content'>
          <p className="heading">Lorem ipsum</p>
          <p className="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod adipisci repudiandae neque, unde minima? Officia vero possimus eveniet atque!
          </p>
          <div className='card_footer'>
              <p>Lorem ipsum</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <g clip-path="url(#clip0_180_258)">
                  <path d="M51.25 26.5C51.25 40.4452 39.9452 51.75 26 51.75C12.0548 51.75 0.75 40.4452 0.75 26.5C0.75 12.5548 12.0548 1.25 26 1.25C39.9452 1.25 51.25 12.5548 51.25 26.5Z" stroke="#6A45FF" stroke-width="1.5"/>
                  <path d="M16 26.5L36 26.5M36 26.5L28.5 34.5M36 26.5L28.5 18.5" stroke="#6A45FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_180_258">
                    <rect width="52" height="52" fill="white" transform="translate(52 0.5) rotate(90)"/>
                  </clipPath>
                </defs>
              </svg>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Details