import './Development.css';
import './Project.css';
import React from 'react';

function Development() {
    return (
        <div className="Project">
            {/* Context/Problem - What problem does this solve? Why should we care?
                Research/Feedback - What precedent work is out there? Who is our audience? What do they want/think?
                Design Iterations (with justification) - What are the tradeoffs? Explain your design decisions.
                Conclusion - What are your lessons learned, insights, takeaways, etc.?

                Note: Some of your handins from previous assignments might not have a narrative. Feel free to change these pages to better reflect the style and narrative mentioned above. */}
            <div className='ProjectSection'>
                <h1> Interactivity, Filtering and Aggregators</h1>
                <p> Have you ever been online shopping before? Have you ever
                    looked to sort the items from lowest price to hightest? Or
                    maybe you want to filter out the items by type? Here I've
                    implemented a example site that allows users to select
                    items and add them to an aggregator, in this case the shopping cart.
                </p>
            </div>

            <div className='ProjectSection'>
                <p>
                    <a href="https://sleepycow228.github.io/development/">Link to My Super Great Candle Shop!</a>
                </p>
            </div>

            <div className='ProjectSection'>
                <h1>Conclusions & Takeaways</h1>
                <p>
                    Going through this project I gained confidence in my web development skills.
                    I now understand what filters and aggregators may be used for and how to implement them.
                    This opens up many possibilties for applications in the future.

                    <br />
                    <br />

                    Another thing I will be taking away from this project  is the importance
                    of heading into a proect with a design plan. After I had met the functionality
                    requirements that I was going for I only then thought more about my design plan and realized I was not satisfied with the current visual experience.
                    Going forward I learned that taking the time to think about the elements of a project and to make plan before beginning was important.
                    When beginning to make this portfolio I used the lessons I learned to make a project I am much prouder of {":)"}
                </p>
            </div>
        </div >

    )
}
export default Development