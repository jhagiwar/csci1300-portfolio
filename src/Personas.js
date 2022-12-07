import './Personas.css';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Personas() {
    return (
        <div className="Personas">
            <div className="ProjectSection">
                <h1> So... Scooters? </h1>
                <p> I find the increasing popularity of electric scooters as a form of transportation fascinating. As this is a growing industry I wondered if the current user interface is efficient, usable or could be improved upon. In order to improve any interface, understanding your users behavior and goals is crucial. In this project to better understand the users, I  created two personas representing these users and illustrated a storyboard for one of these personas. </p>
            </div>
            <div className="ProjectSection">
                <h1>Research & Background</h1>
                <p> The first step in creating personas and a storyboard was to step into a user’s shoes as they interact with a scooter interface. To do so I observed users interact with the scooter interface, created interview questions and conducted interviews with real users. Based on the responses from the interviews I then created two personas and a storyboard.
                </p>
            </div>
            <h1>Process & Design Iterations</h1>
        </div >
    );
}


export default Personas;
