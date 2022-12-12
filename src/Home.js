import './Home.css';
import './Project.css'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const projectData = [
    {
        name: "Who Spins There?", image: "images/small_scooter.jpg", href: "/PersonasAndStoryboard", shortDescription: "Come with me on my journey to better understand the users of spin scooters! This includes interview summaries, user personas, and a storyboard"
    },
    {
        name: "MetroNails Redesign", image: "images/responsiveredesigncover.png", href: "/ResponsiveRedesign", shortDescription: "Makeover time! Take a look at this redesign of the MetroNails website, the website of a Nail Salon in Providence"
    },
    {
        name: "Lancey", image: "images/lancey.png", href: "/IterativeDesign", shortDescription: "and makes us rather bear those ills we have, than fly to others that we know not of? Thus consience doth make cowards of us all; and thus the native hue of resolution is sicklied o'er with the pale cast of thought, and enterprises of great pith and moment with this regard their currents turn awry, and lose the name of action."
    }
    ,
    {
        name: "My Super Great Candle Shop", image: "images/candle.jpg", href: "/Development", shortDescription: "Want to browse some delightful candles? This was my first interactive interface and is a shopping page for a fictional candle shop."
    },
]


function Home() {

    return (
        <div className="Home">
            <div className='gallery-header'>
                <h1> Featured Projects </h1>
                <p> Browse below to explore projects I've completed for a UI/UX I took at Brown University this semester</p>
            </div>
            <div className='ProjectGallery'>
                {projectData.map((project) => (
                    ProjectCard(project)
                ))}
            </div>
            <a name="AboutMe"></a>
            <div className='AboutMe ProjectSection' id='AboutMe'>
                <h1>About sleepycow228:</h1>
                <p>sleepycow228 is currently a Senior at Brown University. Their interests include full-stack development, sports, cooking and puzzles. </p>
            </div>
        </div>
    );


    function ProjectCard(project) {
        return (
            <div className='ProjectCard'>
                <div className='ProjectCardHeader'>
                    <h1>{project.name}</h1>
                </div>
                <a className='ProjectCardMain' href={project.href}>
                    <img className='ProjectCardMainImage' src={project.image} />
                    <div className='hoverText'> <p> {project.shortDescription} </p>
                    </div>
                </a>
            </div >
        )
    }
}


export default Home;
