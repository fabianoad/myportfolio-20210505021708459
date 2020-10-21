import React from 'react'
import EducationItem from './EducationItem'


const item = [
    {college: "University of Colorado Boulder", 
        degree: "Bachelor of Science", 
        course: "Computer Science - Web Development Track", 
        gpa: "GPA: 3.23", 
        date: "August 2006 - May 2010"},
    {college: "James Buchanan High School", 
    degree: "Technology Magnet Program", 
    course: "", 
    gpa: "GPA: 3.56", 
    date: "August 2002 - May 2006"}
]

class Education extends React.Component {
    render() {
        return <React.Fragment>

            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    
                    {item.map((item,i) => {
                        return <EducationItem key={i} {...item} />
                    })}
                    
                </div>
            </section>


        </React.Fragment>
    }
}

export default Education