import './Responsive.css';
import './Project.css';
import React from 'react'

function Responsive() {
    return (
        <div className="Project">
            <div className='ProjectSection'>
                <h1> Picking a Web Page </h1>
                <p>
                    I encountered MetroNails last year when looking for nail salons near Brown University. I ended up going and really enjoyed my experience there.
                    When I looked at their online presence, I thought their website was outdated and didn't match the quality of the business.
                    Below I analyze current problems and consider different possible solutions before creating an alternative site.
                </p>
            </div>
            <div className='ProjectSection'>
                <a href="https://metronails.webs.com/">Link To MetroNails Current Website</a>
                <img src="images/responsive/current-metronails-website.png" alt="Screenshot of current metronails website" width="520" height="260"
                    style={{ 'border-radius': '25px' }} />
            </div>

            <div>
                <h1> Identifying Usability Problems </h1>
                <h2> Usability Problems By Category </h2>
            </div>
            <div class="rowContainer">
                <div className='catContainer'>
                    <h2>Efficiency: </h2>
                    <p className='usabilityText'>
                        &nbsp; Even users who are familiar with this site would have to
                        scroll and navigate
                        to multiple tabs to get the information they are most interested in. Because there are
                        no clear headings for each section of information and the text is not in an easily recognizable
                        pattern, even familiar users may have to read multiple sections to get the
                        information they are looking for.
                    </p>
                </div>
                <div className='catContainer'>
                    <h2>Learnability: </h2>
                    <p className='usabilityText'>
                        &nbsp; The hours of operation, services available and method of
                        booking all are hidden within paragraphs of text and are not obvious to a first time user. The
                        variation in
                        font,size and color of text also makes it jarring for first time users.It would
                        take multiple visits to the site to remember where to look.
                    </p>
                </div>
                <div className='catContainer'>
                    <h2>Memorability: </h2>
                    <p className='usabilityText'>

                        &nbsp; A user encountering this interface who was once familiar
                        with the site does not have much advantage over a first time user. There are no icons or
                        other
                        elements that would make a user instinctively look at a given portion of the site.
                    </p>
                </div>
                <div className='catContainer'>
                    <h2>Aesthetically: </h2>
                    <p className='usabilityText'>
                        &nbsp; Generally this interface has an unpleasant aesthetic
                        experience. Overall
                        as an interface this did not feel intuitive for me as a user. I think especially for a
                        service where artistry and aesthetics are important their website must be up to a
                        certain standard. As mentioned previously there should be more consistency with the style, size,
                        font and color of the text.
                    </p>
                </div>
            </div>
            <div className='ProjectSection'>
                <h1> Accessibility Problems </h1>
                <p>
                    I chose to redesign this website for a nail salon in Providence. I encountered this website last
                    year when looking for nail salons near Brown University, I
                    immediately noticed it looked outdated, unprofessional and wasn't easy to use.
                </p>
            </div>

            <div>
                <h1> Visual Redesign </h1>
                <p style={{ width: '500px' }}> In my redesign I hoped to address the problems laid out above. I also wanted to make sure this site would be responsive in that it would be a pleasant and informative experience on mobile, tablet and browser windows.</p>
            </div>


            <div className='ProjectSection'>
                <div className='colContainer'>
                    <h2> Low-fidelity Wireframing</h2>
                    <p> The first step in redesigning was to create a low fidelity wireframe. Low-fidelity wireframes are basic wireframes that outlines for web pages or app screens. They help to communicate the product's idea without specific details </p>
                </div>

                <img class="moveleft" src="images/responsive/MetroNails Lo-Fi Wireframe.png"
                    alt="Low-fidelity wireframe of redesigned metronails website" width="900" />
            </div>
            <div className='ProjectSection'>
                <div className='colContainer'>
                    <h2>Style Guide</h2>
                    <p> Here is the style guide I created for this redesign. This defines the elements used in the final project, this helps with consistency and aesthetics. </p>
                </div>

                <img class="moveleft" src="images/responsive/styleguide.png"
                    alt="Style Guide for redesigned metronails website" width="900" style={{ 'border-radius': '25px' }} />

            </div>
            <div className='ProjectSection'>
                <div className='colContainer'>
                    <h2> High-Fidelity Prototype (with Annotation)</h2>
                    <p> This is a computer-based interactive representation of the redesign in its closest resemblance to the final design in terms of details and functionality. This was created in figma and used elements fromthe above style guide.</p>
                </div>

                <div className='colContainer'>
                    <a href="https://www.figma.com/file/ClEPB4Upoe9SH8ezWuWhtL/Metro-Nails-Style-Guide?node-id=4%3A85">Link
                        To High Fidelity Prototype (Figma)</a>
                    <img class="moveleft" src="images/responsive/Hi-Fi Prototype.png"
                        alt="High-Fidelity Prototype for redesigned metronails website" width="900" style={{ 'border-radius': '25px' }} />
                </div>

            </div>
            <div className="ProjectSection">
                <p>
                    Here is a link to my responsive redesign of the MetroNails Website! Feel free to play with the size
                    of your browser to see how the website looks on other computer screens, try changing the font size
                    on your browser, or to see how the website looks on other devices!
                </p>
            </div>
            <div className="ProjectSection">
                <h1>Final Product!</h1>
                <a href="https://sleepycow228.github.io/csci1300-responsive-redesign/">Link
                    To the MetroNails Responsive Redesign</a>
            </div>

            <div className="ProjectSection">
                <h1>Conclusions & Takeaways</h1>
                <p>
                    I really enjoyed this project and think it was a great learning experience for me. I went through the new experience of redesigning a product from start to finish.
                    I'll take with me the ability to analyze usability and accessibility problems and learn to design with these in mind.
                    I will also continue to use style guidles and create prototppes with carying levels of fidelity to make the best products possible.
                </p>
            </div>
        </div >

    )
}
export default Responsive