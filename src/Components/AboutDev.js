import React from 'react'
import '../Styles/AboutDev.css'
import upcomingProjectImg from '../Assets/Bliss_at_OKR_Actual.jpg'


const dataJson = {
    upcomingProjects: {
        project1 : {
            id: 1,
            name: 'Pixel City Sentral',
            completion: 'May 2024',
        },
        project2 : {
            id: 2,
            name: 'Nikka City Sentral',
            completion: 'June 2025',
        },
        project3 : {
            id: 3,
            name: 'Amansuri Residensi',
            completion: 'April 2026',
        }
    },

    completedProjects: {
        project1: {
            id: 1,
            name: 'Bliss @ Old Klang Road',
            completion: '2022'
        },
        project2: {
            id: 2,
            name: 'The Zizz @ Damansara North',
            completion: '2018'
        },
        project3: {
            id: 3,
            name: 'Selaseh 36',
            completion: '2015'
        }
    }
}


const AboutDev = () => {
  return (
    <div className='about-dev-container'>
        <h2>About Developer</h2>

        <div className='shayher-logo'>
            <h3>Shayher <br/> Group</h3> 
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <div className='upcoming-projects-container'>
            <h3>Upcoming Projects</h3>
            <div className='upcoming-projects'>
                <div className='upcoming-project'>
                    <img src={upcomingProjectImg} alt='upcoming project' />
                    <h3>{dataJson.upcomingProjects.project1.name}</h3>
                    <h4>Completion {dataJson.upcomingProjects.project1.completion}</h4>
                </div>
                <div className='upcoming-project'>
                    <img src={upcomingProjectImg} alt='upcoming project' />
                    <h3>{dataJson.upcomingProjects.project2.name}</h3>
                    <h4>Completion {dataJson.upcomingProjects.project2.completion}</h4>
                </div>
                <div className='upcoming-project'>
                    <img src={upcomingProjectImg} alt='upcoming project' />
                    <h3>{dataJson.upcomingProjects.project3.name}</h3>
                    <h4>Completion {dataJson.upcomingProjects.project2.completion}</h4>
                </div>
            </div>
        </div>

        <div className='completed-projects-container'>
            <h3>Completed Projects</h3>
            <div className='completed-projects'>
                <div className='completed-project'>
                    <img src={upcomingProjectImg} alt='completed project' />
                    <h3>{dataJson.completedProjects.project1.name}</h3>
                    <h4>Completion {dataJson.completedProjects.project1.completion}</h4>
                </div>
                <div className='completed-project'>
                    <img src={upcomingProjectImg} alt='completed project' />
                    <h3>{dataJson.completedProjects.project2.name}</h3>
                    <h4>Completion {dataJson.completedProjects.project2.completion}</h4>
                </div>
                <div className='completed-project'>
                    <img src={upcomingProjectImg} alt='completed project' />
                    <h3>{dataJson.completedProjects.project3.name}</h3>
                    <h4>Completion {dataJson.completedProjects.project3.completion}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutDev