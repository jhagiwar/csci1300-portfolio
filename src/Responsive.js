import './Responsive.css';
import './Project.css';

function Responsive() {
    return (
        <div className="Project">
            <div className='ProjectSection'>
                <h1> Picking a Web Page </h1>
                <p>
                    I chose to redesign this website for MetroNails, a nail salon in Providence. I encountered this
                    website last
                    year when looking for nail salons near Brown University. I
                    immediately noticed it looked outdated, unprofessional and wasn't easy to use.
                </p>
            </div>
            <div className='ProjectSection'>
                <a href="https://metronails.webs.com/">Link To MetroNails Current Website</a>
                <img src="images/responsive/current-metronails-website.png" alt="Screenshot of current metronails website"
                    width="520" height="260" />
            </div>

            <div>
                <h1> Identifying Usability Problems </h1>
                <h2> Usability Problems By Category </h2>
            </div>
            <div class="rowContainer">
                <p className='usabilityText'>
                    <h2>Efficiency: </h2>
                    &nbsp; Even users who are familiar with this site would have to
                    scroll and navigate
                    to multiple tabs to get the information they are most interested in. Because there are
                    no clear headings for each section of information and the text is not in an easily recognizable
                    pattern, even familiar users may have to read multiple sections to get the
                    information they are looking for.
                </p>
                <p className='usabilityText'>
                    <h2>Learnability: </h2>
                    &nbsp; The hours of operation, services available and method of
                    booking all are hidden within paragraphs of text and are not obvious to a first time user. The
                    variation in
                    font,size and color of text also makes it jarring for first time users.It would
                    take multiple visits to the site to remember where to look.
                </p>
                <p className='usabilityText'>
                    <h2>Memorability: </h2>
                    &nbsp; A user encountering this interface who was once familiar
                    with the site does not have much advantage over a first time user. There are no icons or
                    other
                    elements that would make a user instinctively look at a given portion of the site.
                </p>
                <p className='usabilityText'>
                    <h2>Aesthetically: </h2>
                    &nbsp; Generally this interface has an unpleasant aesthetic
                    experience. Overall
                    as an interface this did not feel intuitive for me as a user. I think especially for a
                    service where artistry and aesthetics are important their website must be up to a
                    certain standard. As mentioned previously there should be more consistency with the style, size,
                    font and color of the text.
                </p>
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
            </div>


            <div className='ProjectSection'>
                <h2> Low-fidelity Wireframing</h2>
                <img class="moveleft" src="images/responsive/MetroNails Lo-Fi Wireframe.png"
                    alt="Low-fidelity wireframe of redesigned metronails website" width="900" />
            </div>
            <div className='ProjectSection'>
                <h2> Style Guide </h2>
                <a href="https://www.figma.com/file/ClEPB4Upoe9SH8ezWuWhtL/Metro-Nails-Style-Guide?node-id=0%3A1">Link
                    To Style Guide (Figma)</a>
                <img class="moveleft" src="images/responsive/styleguide.png"
                    alt="Style Guide for redesigned metronails website" width="900" />

            </div>
            <div className='ProjectSection'>
                <h2> High-Fidelity Prototype (with Annotation)</h2>

                <a href="https://www.figma.com/file/ClEPB4Upoe9SH8ezWuWhtL/Metro-Nails-Style-Guide?node-id=4%3A85">Link
                    To High Fidelity Prototype (Figma)</a>
                <img class="moveleft" src="images/responsive/Hi-Fi Prototype.png"
                    alt="High-Fidelity Prototype for redesigned metronails website" width="900" />

            </div>
            <div className="ProjectSection">
                <p>
                    Here is a link to my responsive redesign of the MetroNails Website! Feel free to play with the size
                    of your browser to see how the website looks on other computer screens, try changing the font size
                    on your browser, or to see how the website looks on other devices!
                </p>
                <a href="https://sleepycow228.github.io/csci1300-responsive-redesign/">Link
                    To the MetroNails Responsive Redesign</a>
            </div>

            <div className="ProjectSection">
                <h1>TODO: WRITE CONCLUSION</h1>
            </div>
        </div>

    )
}
export default Responsive