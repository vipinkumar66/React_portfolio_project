import React, { useEffect } from 'react'
import './home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    AOS.init({duration:1500});
    return () => {
      AOS.refresh();
    };
  },[])

  return (
    <div className='home'>
      <div className='container main home__container'>
        <div className='intro__text'>
          <h1>Hey, I am a <strong>web developer </strong>!</h1>
          <p>who is still in development mode...</p>
        </div>
        <div className=' main author__image'>
          <img src='images/1674727737645.jpg'></img>
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
      <div className='container-fluid skills-container ' data-aos="fade-right">
        <div className='row '>
          <div className='col-sm-1'></div>
          <div className='col-sm-7 border-bottom'><img src="images/skills.svg" alt="skills-logo" className='img-fluid'/></div>
          <div className='col-sm-3 border-bottom'>
            <div className="card skills-card">
              <div className="card-header h4">
                <strong className='text-primary fst-italic'>Skills</strong>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>Python</p>
                  <p>Django</p>
                  <p>Django Restframework</p>
                  <p>Flask</p>
                  <p>React js</p>
                  <p>Bootstrap</p>
                  <p>Rest API development</p>
                  <p>MySQL</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container connect__container'>
        <div className='row border-bottom'>
          <h3>If found this portfolio interseting, why not to have a conversation? Contact me here.. </h3>
          <div className='col'>
            <button type='button btn-sm'><a href="https://www.linkedin.com/in/vipin-kumar-382923248/" target="_blank">Connect</a></button>
          </div>
        </div>
        <div className='row projects__intro'data-aos="fade-down">
          <h2 className='text-danger justify-content-center'>Projects</h2>
        </div>
        <div className='row projects__card'>
          <div className='col-sm-1'></div>
          <div className='col-sm-4' data-aos="fade-down">
            <div className='card'>
              <img src="images/react.svg" alt="react-logo" />
              <div className='card-body'>
                <h5 className='card-title'>Jobs Web App</h5>
                <p className='card-text'>This is a web application developed using react as a frontend and flask as backend, which pulls the details about the latest jobs from the SQL database for the company given by the user as a input and display them.</p>
                <a href="#" className='btn btn-primary'>Read More</a>
              </div>
            </div>
          </div>
          <div className='col-sm-1'></div>

          <div className='col-sm-4 project2__card' data-aos="fade-down">
            <div className='card'>
              <img src="images/django.svg" alt="django-logo"/>
              <div className='card-body'>
                <h5 className='card-title'>Django Study App</h5>
                <p className='card-text'>This application comes with full CRUD functionality and login-registration features. People with similar interest can connect with each other and have discussion on the different topics.</p>
                <a href="#" className='btn btn-primary'>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home