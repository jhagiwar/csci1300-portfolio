import './App.css';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Personas from './Personas';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <AppHeader title="home" />
            <Home />
          </>
        } />
        <Route path="/PersonasAndStoryboard" element={
          <>
            <AppHeader title="Personas & Storyboard" />
            <Personas />
            <h1><Link className="HomeButton" to="/">
              See All Projects</Link></h1>
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
        UI/UX Portfolio
      </div>
    )
  }
  else {
    return (
      <div className="App-header">
        {props.title}
        <Link className="HomeButton" to="/">
          See All Projects</Link>
      </div>
    )
  }
}

export default App;
