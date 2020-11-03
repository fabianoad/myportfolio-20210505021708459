import React from 'react'
import AwardsItem from './AwardsItem'

const awards = [
    "LPIC-2",
    "LPIC-1",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaa",
    "aaaa"             
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