import React from 'react'
import AwardsItem from './AwardsItem'

const awards = [
    "Google Analytics Certified Developer",
    "Mobile Web Specialist - Google Certification",
    "University of Colorado Boulder - Emerging Tech Competition 2009",
    "University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category",
    "University of Colorado Boulder - Emerging Tech Competition 2008",
    "James Buchanan High School - Hackathon 2006",
    "James Buchanan High School - Hackathon 2005"             
]

class Awards extends React.Component {
    render() {
        return <React.Fragment>

            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        
                        {awards.map((item,i) => {
                            return  <li key={i}><AwardsItem award={item} /></li>
                        })}

                       
                            
                        
                    </ul>
                </div>
            </section>

        </React.Fragment>
    }
}

export default Awards