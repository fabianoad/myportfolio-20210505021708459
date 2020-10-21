import React from 'react'
import ExperienceItem from './ExperienceItem'

const experience = [
        {role: "Senior Web Developer", company: "Intelitec Solutions", 
            activity: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
            date: "March 2013 - Present"},
        {role: "Web Developer", company: "Intelitec Solutions",
            activity: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
            date: "December 2011 - March 2013"},
        {role: "Junior Web Designer", company: "Shout! Media Productions",
            activity: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
            date: "July 2010 - December 2011"},
        {role: "Web Design Intern", company: "Shout! Media Productions",
            activity: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
            date: "September 2008 - June 2010"},
]

class Experience extends React.Component {

  

    render() {
        return <React.Fragment>


<section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    
                    {experience.map((experience,i) => {
                        return <ExperienceItem key={i} {...experience} />
                    })}
                    
                </div>
            </section>



        </React.Fragment>
    }
}
export default Experience
