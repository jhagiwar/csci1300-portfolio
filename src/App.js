import './App.css';
import { useState } from 'react';

const projectData = [
  { name: "Personas & Storyboarding", image: "landscape.jpg", shortDescription: "I find the increasing popularity of electric scooters as a form of transportation fascinating. As this is a growing industry I wondered if the current user interface is efficient, usable or could be improved upon. In order to improve any interface, understanding your users behavior and goals is crucial. In this project to better understand the users, I  created two personas representing these users and illustrated a storyboard for one of these personas." },
  { name: "Fake Proj2", image: "landscape.jpg", shortDescription: "To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end them? To die: to sleep; no more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, 'tis a consummation devoutly to be wish'd. To die, to sleep; to sleep: perchance to dream: ay, there's the rub; for in that sleep of death what dreams may come when we have shuffled off this mort" },
  { name: "Fake Proj3", image: "landscape.jpg", shortDescription: "must give us pause. There's the respect that makes calamity of so long a life; for who would bear the whips and scorns of time, the oppressor's wrong, the proud man's contumely, the pangs of dispriz'd love, the law's delay, the insolence of office, and the spurns that patient merit of the unworthy takes, when he himself might his quietus make with a bare bodkin? Who would fardels bear, to grunt and sweat under a weary life, but that the dread of something after death, the undiscover'd country from whose bourn no traveller returns, puzzles the will, " },
  { name: "Fake Proj4", image: "landscape.jpg", shortDescription: "and makes us rather bear those ills we have, than fly to others that we know not of? Thus consience doth make cowards of us all; and thus the native hue of resolution is sicklied o'er with the pale cast of thought, and enterprises of great pith and moment with this regard their currents turn awry, and lose the name of action." }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        UI/UX Portfolio
      </header>
      <body>
        <h1> Featured Projects </h1>
        <div className='ProjectGallery'>
          {projectData.map((project) => (
            ProjectCard(project)
          ))}
        </div>
      </body>
    </div>
  );


  function ProjectCard(project) {
    return (
      <div className='ProjectCard'>
        <div className='ProjectCardHeader'>
          <h1>{project.name}</h1>
        </div>
        <div className='ProjectCardMain'>
          <img className='ProjectCardMainImage' src={project.image} />
          <div className='hoverText'> <p> {project.shortDescription} </p>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
