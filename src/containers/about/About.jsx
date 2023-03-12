import React, { useEffect } from 'react'
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';


const About = () => {

  useEffect(()=>{
    AOS.init({duration:1500});
    return () => {
      AOS.refresh();
    };
  },[])

  return (
    <div className='about'>
      <div className='container about__container'>
        <div className='row about__container-intro mb-5'>
          <div className='col-sm-6'>
            <img src="images/hello.svg" alt="hello" className='img-fluid'/>
          </div>
          <div className='col-sm-5  d-flex align-items-center justify-content-center'>
            <h1 className='text-primary'>Heyy you here..</h1>
            <h3>that means you are intersted in my <strong className='text-danger'> portfolio...</strong></h3>
          </div>
        </div>
      </div>
      <div className='container about__container-graduation mb-5' data-aos="fade-down">
        <h1>Education</h1>
        <div className='about__container-graduation__small'>
          <h3>Higher Secondary Education</h3>
          <p>I completed my 11th and 12th from APS Bathinda, Punjab and KV Bathinds, Punjab respectively with 70%. My stream in 12th was PCM (physics/chemistry/mathematics).</p>
          <h3>Graduation</h3>
          <p>I completed my BE (Bachelors of Engineering) in Electronics and communication form Vemana Institute of Technology, Bangalore with 5.8 cgpa.</p>
        </div>
      </div>
      <div className='container about__container-social' data-aos="fade-left">
        <div className='about__container-social__image'>
          <img src="/images/social_media.svg" alt="social" />
        </div>
        <div className='about__container-content'>
          <h4>The power of social media is that it allows you to connect with people on a deeper level, to build relationships, and to create a community around shared interests and values</h4>
          <h1>Connect with ME...</h1>
          <p><FaGithub/> <a href="https://github.com/vipinkumar66" target="_blank">Github</a></p>
          <p><FaLinkedin/> <a href="https://www.linkedin.com/in/vipin-kumar-382923248/" target="_blank">Linkedin</a></p>
          <p><FaInstagram/> <a href="">Instagram</a></p>
          <p><FaYoutube/> <a href="https://www.youtube.com/channel/UCvSeIylWNRHZLP6rTdsCnNA" target="_blank">Youtube</a></p>
        </div>
      </div>
      <div className='container about__resume'>
        <div className='about__resume-content'>
          <p>Want to have a look at my resume?</p>
        </div>
        <div className='about__resume-btn'>
          <button type='text'><a href="/images/resume.pdf" target='_blank'>Download</a></button>
        </div>
      </div>
    </div>
  )
}

export default About
