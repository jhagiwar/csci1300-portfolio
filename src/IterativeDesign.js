import './IterativeDesign.css';
import './Project.css';
import React from 'react';

function IterativeDesign() {
    return (
        <div className="Project">
            <div className='ProjectSection'>
                <h1> What's This? </h1>
                <p>
                    in this project, we created a design from Y Combinator startup Lancey.
                    From their launch statement: "Lancey is a way to create interactive product
                    demos to share with your business' prospects and customers. Lancey gives
                    them the ability to interact and engage with your product without spinning
                    up trial accounts or sandboxes in less than 5 mins right from your website.
                    We needed to design an interface designer, as well as a way for users to
                    keep track of their projects and share them with their users.
                </p>
            </div>
            <div className='ProjectSection'>
                <a href="https://www.ycombinator.com/companies/lancey">Learn More About Lancey Here!</a>
            </div>
            <div className='ProjectSection'>
                <h1>Initial Sketches</h1>
                <p>To start, we created 4 different sketches for our design.
                    In sketches, we explored different flows from the home page, as well as different concepts of editing projects.
                </p>
            </div>
            <p>sketch 1: the edit project page allows users to drag and drop components + add interaction to them by right clicking:</p>
            <div className='ProjectSection'>
                <div>
                    <img class="image-fluid" src="images/lancey/1-HOME.png" alt="home page sketch" />
                    <img class="image-fluid" src="images/lancey/1-DEMO.png" alt="demo page sketch" />
                    <img class="image-fluid" src="images/lancey/1-PROJECT.png" alt="project page sketch" />
                </div>
            </div>
            <p>sketch 2: more component based editing, with a more clearly defined projects page (edit/view/share).</p>
            <div className='ProjectSection'>
                <div>
                    <img class="image-fluid" src="images/lancey/2-USER-PORTAL.png" alt="user portal page sketch" />
                    <img class="image-fluid" src="images/lancey/2-SHARE.png" alt="share page sketch" />
                    <img class="image-fluid" src="images/lancey/2-EDIT.png" alt="edit page sketch" />
                    <img class="image-fluid" src="images/lancey/2-DEMO.png" alt="demo page sketch" />
                </div>
            </div>
            <p>sketch 3: a video based demo software instead of interactive component-based page.</p>
            <div class="ProjectSection">
                <div>
                    <img class="image-fluid" src="images/lancey/3-Landing Screen.png" alt="landing page sketch" />
                    <img class="image-fluid" src="images/lancey/3-Project.png" alt="project page sketch" />
                    <img class="image-fluid" src="images/lancey/3-editor.png" alt="editor page sketch" />
                </div>
            </div>
            <p>sketch 4: a clearly defined analytics page design, with a vertical navbar as a menu for everything you'd want for a single project.</p>
            <div class="ProjectSection">
                <div>
                    <img class="image-fluid" src="images/lancey/4-home.png" alt="home page sketch" />
                    <img class="image-fluid" src="images/lancey/4-startcreating.png" alt="start creating sketch" />
                    <img class="image-fluid" src="images/lancey/4-project.png" alt="project page sketch" />
                </div>
            </div>
            <div className="ProjectSection">
                <h1>
                    Wireframe Prototype
                </h1>
                <p>
                    Then we created a wireframe to flush out a single design.
                    We incorporated different sketch ideas into this single design:
                    Sketch 1/2's component based editors + sketch 4's analytics page.
                </p>
            </div>
            <div className="ProjectSection">
                <div className='container-wrap' >
                    <div className='colContainer'><p>home page</p><img class="image-wireframe" src="images/lancey/wireframe/HOME PAGE.png" alt="home page sketch" /></div>
                    <div className='colContainer'><p>what we do</p><img class="image-wireframe" src="images/lancey/wireframe/WHAT WE DO.png" alt="what we do page sketch" /></div>
                    <div className='colContainer'><p>login</p><img class="image-wireframe" src="images/lancey/wireframe/LOGIN.png" alt="login page sketch" /></div>
                    <div className='colContainer'><p>business user dashboard</p><img class="image-wireframe" src="images/lancey/wireframe/BUSINESS USER DASHBOARD.png" alt="user dashboard page sketch" /></div>
                    <div className='colContainer'><p>analytics</p><img class="image-wireframe" src="images/lancey/wireframe/ANALYTICS PAGE.png" alt="analytics page sketch" /></div>
                    <div className='colContainer'><p>project page</p><img class="image-wireframe" src="images/lancey/wireframe/PROJECT PAGE.png" alt="project page sketch" /></div>
                    <div className='colContainer'><p>new project page</p><img class="image-wireframe" src="images/lancey/wireframe/NEW PROJECT PAGE.png" alt="new project page page sketch" /></div>
                </div>
            </div>
            <div className="ProjectSection">
                <h1>
                    Hi-Fi Prototype
                </h1>
                <p>
                    finally, we created a hi-fi prototype, which refined our wireframe into a more complete product. While designing this prototype, we received some feedback:
                    <br />
                    <br />
                    user dashboard page: affordances weren't super clear... edit project buttons were small. we changed this so that users just click on the thumbnail of a project to edit it.
                    <br />
                    <br />
                    user dashboard page: used to have too much focus on the welcome message, and not enough on projects. We made the thumbnails area bigger to fix this
                    <br />
                    <br />
                    various pages: make sure there is always a back button that goes to the previous page in the flow
                    <br />
                    <br />
                    login page: make distinction between login and signup more clear. we moved the signup button outside of the orange box to fix this.
                    <br />
                    <br />
                    analytics should not be on the same page where users edit their project—it became too cluttered. we separated those pages to fix this.
                </p>
            </div>
            <div className='ProjectSection'>
                <h2> Here's a video showing our hifi prototype's flow! try watching in fullscreen.</h2>
            </div>
            <div className='ProjectSection'>
                <iframe className="hi-fi-vid" src="https://www.youtube.com/embed/ehLDglcQaUY" allowfullscreen=""></iframe>
            </div>
            <div className='ProjectSection'>
                <h1>User Testing</h1>
                <p>
                    We then submitted our hifi prototype to usertesting.com so we could get some real feedback.
                    <br />
                    <br />
                    Generally, all users struggled with the “edit two things about the project” task. After they clicked on the edit button, the options that were presented to “edit” did not map internally with our users signaling that this would function as an edit. They were able to figure it out, but commented on the lack of clarity and were not sure if they had properly completed the task.
                    <br />
                    <br />
                    Overall, our test results were not in-line with our expectations. While most users were able to figure out the task, they all noted the difficulty of doing so. We were expecting the task to be straightforward. Based on the testing, we would add text below the login button in the top right hand corner of the first screen indicating “login”. We would also add functionality to our metrics dashboard that allows users to directly click on each subtitle for further exploration and edits. We would also change the “components” tab on the Video Player edit screen to better represent potential edits that can be made to the project. Unfortunately, our post test questions were not presented to our testers for reasons unknown to us.</p>
            </div>
            <div className='ProjectSection'>
                <h1>Conclusions & Takeaways</h1>
                <p>I learned so much from going through the iterative design process.
                    Working with a group to create a variety of ideas then working together
                    to implement this was a great experience. I also gained a lot from
                    recieving critiques and criticially thinking which responses to
                    accept and modify the product based on. Another thing I'll
                    takeaway from this experience is how to write an introduction
                    to a user testing site. I think we originally made the mistake
                    of assuming users would have a lot of context when wlaking into
                    our product. This was something I now will make sure to consider moving forward.</p>

            </div>
        </div >

    )
}

export default IterativeDesign