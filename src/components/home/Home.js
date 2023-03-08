import React, { useEffect } from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(()=>{
    Aos.init({duration:1300})
  },[])

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
      <div className='container intro__container border-top' data-aos="fade-left">
        <h5 className='small__introheading text-warning'>Small intro</h5>
        <h4 className='small__intro'>
          A Philomath, who appeared for various competitive exams and also cleared UPSC CDS (II)-
          2021 and is now embarked on a journey to find more challenging endeavour in life with aim of 
          continuously developing my knowledge in field of programming and giving best out of it.
        </h4>
      </div>
    </div>
  )
}
