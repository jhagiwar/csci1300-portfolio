import './Home.css';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const projectData = [
    { name: "Personas & Storyboarding", image: "images/small_scooter.jpg", href: "/PersonasAndStoryboard", shortDescription: "I find the increasing popularity of electric scooters as a form of transportation fascinating. In this project to better understand the users of electric scooters, I  created two personas representing these users and illustrated a storyboard for one of these personas." },
    { name: "Responsive Redesign", image: "images/responsiveredesigncover.png", href: "/ResponsiveRedesign", shortDescription: "MetroNails is a nail salon here in Providence I really enjoyed my experience at. I looked at their online presence however and thought is was outdated and didn't match the quality of the business. Walk through the process of redesigning MetroNails current website with me! I analyze current problems and consider possible solutions before creating an alternative site." },
    { name: "Fake Proj3", image: "landscape.jpg", shortDescription: "must give us pause. There's the respect that makes calamity of so long a life; for who would bear the whips and scorns of time, the oppressor's wrong, the proud man's contumely, the pangs of dispriz'd love, the law's delay, the insolence of office, and the spurns that patient merit of the unworthy takes, when he himself might his quietus make with a bare bodkin? Who would fardels bear, to grunt and sweat under a weary life, but that the dread of something after death, the undiscover'd country from whose bourn no traveller returns, puzzles the will, " },
    { name: "Fake Proj4", image: "landscape.jpg", shortDescription: "and makes us rather bear those ills we have, than fly to others that we know not of? Thus consience doth make cowards of us all; and thus the native hue of resolution is sicklied o'er with the pale cast of thought, and enterprises of great pith and moment with this regard their currents turn awry, and lose the name of action." }
]


function Home() {

    return (
        <div className="Home">
            <h1> Featured Projects </h1>
            <div className='ProjectGallery'>
                {projectData.map((project) => (
                    ProjectCard(project)
                ))}
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
