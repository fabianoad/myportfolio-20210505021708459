import React from 'react'
import EducationItem from './EducationItem'


const item = [
    {college: "Langara College", 
        degree: "Certificate", 
        course: "Computer Science - Internet and Web Technology", 
        gpa: "GPA: 3.83", 
        date: "January 2019 - April 2020"},
    {college: "College DeVry - Ruy Barbosa Campus", 
    degree: "Post-graduate Diploma", 
    course: "Computer Science - Computer Networks and Security", 
    gpa: "GPA: 3.56", 
    date: "April 2005 - June 2007"},
    {college: "UCSAL", 
    degree: "Bachelor", 
    course: "Engineering - Civil Engineering", 
    gpa: "GPA: 3.83", 
    date: "August 1993 - August 1998"},
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