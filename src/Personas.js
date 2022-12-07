import './Personas.css';
import './Project.css';

function Personas() {
    return (
        <div className="Project">
            <div className="ProjectSection">
                <h1> So... Scooters? </h1>
                <p> I find the increasing popularity of electric scooters as a form of transportation fascinating. As this is a growing industry I wondered if the current user interface is efficient, usable or could be improved upon. In order to improve any interface, understanding your users behavior and goals is crucial. In this project to better understand the users, I  created two personas representing these users and illustrated a storyboard for one of these personas. </p>
                <img src="images/small_scooter.jpg" width={'419px'}></img>
            </div>
            <div className="ProjectSection">
                <h1>Research & Background</h1>
                <p> The first step in creating personas and a storyboard was to step into a user’s shoes as they interact with a scooter interface. To do so I observed users interact with the scooter interface, created interview questions and conducted interviews with real users. Based on the responses from the interviews I then created two personas with empathy maps and a storyboard.
                </p>
                <img src="images/SpinInterface.jpg"></img>
            </div>
            <div className='Personas'>
                <h1>Personas</h1>
                <div class="persona-container">
                    <div class="persona">
                        <h2>Late Larry </h2>
                        <p> Larry is a college student who is running late for a class across campus. The Spin Scooter interface allows
                            Larry to quickly connect his ride to the app, operate the scooter and monitor his speed. Larry
                            represents users who are in a rush and looking for a quick and easy mode of transportation.</p>
                        <img src="images/personas/PersonaEmpathyMap1.jpg" alt="Sketch of the spin scooter user interface" width={'90%'} />
                    </div>
                    <div class="persona">
                        <h2>Social Suzy</h2>
                        <p> Suzy is a young woman who is looking for a fun and inexpensive way to travel with her sister to meet her
                            friends at a bowling alley. The Spin Scooter interface allows her to easily connect the ride to her app,
                            operate
                            the scooter at the speed she desires, and monitor the battery of the scooter. Suzy represents users who's
                            priority is a inexpensive and fun way to travel to a given destination. </p>
                        <img src="images/personas/PersonaEmpathyMap2.jpg" alt="Sketch of the spin scooter user interface" width={'90%'} />
                    </div>
                </div>
            </div>
            <div className='Storyboards'>
                <h1>Storyboard</h1>
                <div class="gallery-container">
                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard1.jpeg" alt="Panel 1 of Storyboard" />
                        <p> Larry just got out of a meeting that ran over time. He is now running late to his class that is across
                            campus.</p>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard2.jpg" alt="Panel 2 of Storyboard" />
                        <p> Larry sees a spin scooter and debates running to class or riding the spin scooter.</p>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard3.jpg" alt="Panel 3 of Storyboard" />
                        <p> Larry takes out his phone, opens the Spin app and scans the QR code on the top of the handlebar on the
                            scooter.</p>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard4.jpg" alt="Panel 4 of Storyboard" />
                        <p> Looking at the screen on the scooter Larry checks that the scooter has enough battery to get him to his
                            class.</p>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard5.jpg" alt="Panel 5 of Storyboard" />
                        <p> He then begins his ride on the Spin app and gets on the scooter. </p>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard6.jpg" alt="Panel 6 of Storyboard" />
                        <p> Using the brakes and the acceleration lever on the user interface on the handlebar Larry navigates to class.
                        </p>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard7.jpg" alt="Panel 7 of Storyboard" />
                        <p> Larry also checks his current speed on the interface to make sure he is complying with street safety laws.
                        </p>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src="images/personas/Storyboard8.jpg" alt="Panel 8 of Storyboard" />
                        <p> Larry ends his ride and arrives to class on time!</p>
                    </div>
                </div>
            </div>
            <div className="ProjectSection">
                <h1>Process and Design Iterations</h1>
                <p> While I was confident in my decision to include the Late Larry persona. I also played with the idea of other persons instead of the Social Suzy persona including professors and other students. But ultimately, I decided that ultimately that the Social Suzy persona best reflected my observations and interviews. I also took inspiration from the examples in class and other online personas to decide on the format of the personas and am happy with the look of the final personas. I also created my first storyboard for my Late Larry persona, I began, stopped and restarted many times for this portion of the project but ended up hand drawing the scenario.</p>
            </div>
            <div className="ProjectSection">
                <h1>Conclusions & Takeaways</h1>
                <p> This project gave me better insight not only into who the users of Spin Scooters are, but also helped me better understand the principles behind the  user experience of any product. From this project I took a new way of thinking about product and interface design and was more aware of them in my everyday life.</p>
            </div>
        </div >
    );
}


export default Personas;
