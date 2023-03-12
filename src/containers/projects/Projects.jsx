import React from 'react'
import './projects.css'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'


const Projects = () => {

  const webScrapping = [
    {'title':'Linkedin Scrapper', 'description':'In this project I used Selenium, Requests and BeautifulSoup library to scrap the data on some conditions like the person should have worked in US for more than 3 years. To get all those details first I have to login and there was no endpoint which I can use with the request so I used selenium. After login I got the page source and made soup of it suing beautifulSoup library and stored the scraped data in a csv file using csv module'},

    {'title':'99 Acres Scrapper', 'description':'In this project I used the request module along with BeautifulSoup to get the data, in this there were api which when called used to give all the data. Here there were some specifications related to properties using those I scrapped the info. There were manier times I was facing captcha issue to solve that I used the python 2Captcha library. Then I stored the data in a csv file.'},

    {'title':'Amazon/Flipkart Scrapper', 'description':'In this project I used request module along with the BeautifulSoup. Here I preffered command line arguments for the input using which user can give the product name and website (amazon or flipkart) if the user dont give any website it will scrap the data for that product from both the website. Apart from scrapping there was one more thing which I attached to it and that was Flask_api, I created an api for it and attached jwt authentication with it and only the registered users can access the data scrapped by the program and they can access it only 5 times a day.'}
  ];

  const webDevProject =[
    {'title':'React Job App', 'description':'This project I did for the Rivan solutions where I am working as a python developer full time intern. In this project I have used Reactjs as frontend tool and flask as a backend tool. In the front end part I have given a search bar in which the user can enter the name of the company or the location for which he searching job, these parameters will be sent to the backend with the endpoint I created, there I have connected the backend to the company database using flask sqlalchemy from which the job data is pulled according to the parameters. And then they are sent to the front end as array of dictionary and then using the map we iterate over the data and render it with the reactjs.'},

    {'title':'Django Study App', 'description':'This project is with full CRUD functionality along with the user authentication system, here the authentication is the default one which is provided by the django that is session based authentication. In this project the user can create a room for any topic which he is interested in and the other users if interested in the topic they can join the room and they all can have discussion their.'},

    {'title':'Flask Web App', 'description':'This project is with the CRUD functionality along with the user authentication system. In this I have provided all the details related to the Armed forces examinsations as I was also interested to join the Armed forces so to help other candidates to understand the syllabus and pattern I created this app. Here user can register and create their account after which they can write blogs to share their thoughts with the other users.'}
  ]

  useEffect(()=>{
    AOS.init({duration:1500});
    return () => {
      AOS.refresh();
    };
  },[])

  return (
    <div className='projects'>
      <div className='container projects__container'>
        <div className='projects__container-image'>
          <img src="/images/project.svg" alt="" />
        </div>
        <div className='project__container-intro_btn'>
          <div className='projects__container-intro'>
            <h1>Want to see their source code.. <strong> Visit Github</strong></h1>
          </div>
          <div className='projects__container-btn'>
            <button type='text'><a href="https://github.com/vipinkumar66" target='_blank'>Visit</a></button>
          </div>
        </div>
      </div>
      <div className='container all__projects-scrapping' data-aos='fade-left'>
        <div className='all_projects-scrapping_heading'>
          <h1>Web Scrapping Projects</h1>
        </div>
        {webScrapping.map((project) => (
          <div className='all_project-scrapping_content'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className='container all__projects-web' data-aos='fade-right'>
        <div className='all__projects-web_heading'>
          <h1>Web Development Projects</h1>
        </div>
        {webDevProject.map((project) => (
          <div className='all__projects-web_content'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Projects
