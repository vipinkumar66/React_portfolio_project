import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='main home__container'>
        <div className='intro__text'>
          <h1>Hey, I am a <strong>web developer </strong>!</h1>
          <p>who is still in development mode...</p>
        </div>
        <div className=' main author__image'>
          <img className='author__img' src='images/1674727737645.jpg'></img>
        </div>
      </div>
    </div>
  )
}
