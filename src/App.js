import './App.css';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Personas from './Personas';
import Responsive from './Responsive';
import { Nav } from 'react-bootstrap';
import Development from './Development';
import IterativeDesign from './IterativeDesign';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <a id="top"></a>
            <NavBar />
            <AppHeader title="home" />
            <Home />
          </>
        } />
        <Route path="/PersonasAndStoryboard" element={
          <>
            <a id="top"></a>
            <NavBar />
            <AppHeader title="Spin User Assesment" subtitle="Personas & Storyboard" />
            <Personas />
            <a href='/#' className="HomeButton">
              Return To Home</a>
          </>
        } />
        <Route path="/ResponsiveRedesign" element={
          <>
            <a id="top"></a>
            <NavBar />
            <AppHeader title="MetroNails Redesign" subtitle="Responsive Redesign" />
            <Responsive />
            <a href='/#' className="HomeButton">
              Return To Home</a>
          </>
        } />
        <Route path="/Development" element={
          <>
            <a id="top"></a>
            <NavBar />
            <AppHeader title="My Super Great Candle Shop" subtitle="Development" />
            <Development />
            <a href='/#' className="HomeButton">
              Return To Home</a>
          </>
        } />
        <Route path="/IterativeDesign" element={
          <>
            <a id="top"></a>
            <NavBar />
            <AppHeader title="Lancey" subtitle="Iterative Design" />
            <IterativeDesign />
            <a href='/#' className="HomeButton">
              Return To Home</a>
          </>
        } />
      </Routes>
    </div>
  )
}

function AppHeader(props) {
  if (props.title == "home") {
    return (
      <div className="App-header">
        <div className='header-text'>
          Hey there, I'm sleepycow228!
          <br />
          <div className='header-sub'>
            {"Welcome to my UI/UX Portfolio :)"}
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App-header">
        <div className='header-text'>
          {props.title}
          <div className='header-sub'>
            {props.subtitle}
          </div>
        </div>
      </div>
    )
  }
}

function NavBar() {
  return (
    <div className='NavBar' id='NavBar'>
      <nav>
        <Link to="/" className='NavBarElement'> Home</Link>
        <a className='NavBarElement' href="/#AboutMe"> About Me</a>
      </nav>
    </div>
  )
}

export default App;
