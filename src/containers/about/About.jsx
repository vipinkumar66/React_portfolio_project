import React, { useEffect } from 'react'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Accordion = ({heading1, heading2, heading3, text1, text2, text3}) =>{
  return(
    <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <h5>{heading1}</h5>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <p>{text1}</p> 
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <h5>{heading2}</h5>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    <p>{text2}</p>
                  </div>
                </div>
              </div>
            </div>

  );
}

const About = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div>
      <div className='container about__container'>
        <div className='row about__container-intro '>
          <div className='col-sm-6'>
            <img src="images/hello.svg" alt="hello" className='img-fluid'/>
          </div>
          <div className='col-sm-5  d-flex align-items-center justify-content-center'>
            <h1 className='text-primary'>Heyy you here..</h1>
            <h3>that means you are intersted in my <strong className='text-danger'> portfolio...</strong></h3>
          </div>
        </div>
      </div>
      <div className='container about__container-graduation mt-5 mb-5' data-aos="fade-right">
        <div className='row'>
          {/* <div className='col-sm-5'> */}
          <h3>EDUCATION</h3>
          <Accordion 
            heading1="Higher Secondary Education"
            text1=""
            heading2="Graduation"
            text2=""
          />
        </div>
      </div>
      <div className='container about__container-socialmedia g-2 mt-5' data-aos="fade-left">
        <div className='row'>
          <div className='col-sm-7'>
            <img src="images/social_media.svg" alt="socialmedia" className='img-fluid'/>
          </div>
          <div className='col-sm-4 my-auto text-center'>
            <h3 className='fst-italic'>Stay connected with me on <strong className='text-danger'>social media </strong>...</h3>
            <div className="card skills-card">
                
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                  <h4><FaLinkedin/> <a href="https://www.linkedin.com/in/vipin-kumar-382923248/" target='_blank'>Linkedin</a></h4>
                  <h4><FaGithub/> <a href="https://github.com/vipinkumar66" target='_blank'>Github</a></h4>
                  <h4><FaInstagram/> <a href="">Instagram</a></h4>
                  <h4><FaYoutube/> <a href="https://www.youtube.com/channel/UCvSeIylWNRHZLP6rTdsCnNA" target='_blank'>Youtube</a></h4>
                  </blockquote>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
