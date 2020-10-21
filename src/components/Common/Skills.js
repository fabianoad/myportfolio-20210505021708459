import React from 'react'
import SkillItem from './SkillItem'

const icons = [
    "fa-html5", "fa-css3-alt", "fa-js-square", "fa-angular",
    "fa-react", "fa-node-js", "fa-sass", "fa-less", "fa-wordpress",
    "fa-gulp", "fa-grunt", "fa-npm"
]
const skills = [
    "Mobile-First, Responsive Design",
    "Cross Browser Testing & Debugging",
    "Cross Functional Teams",
    "Agile Development & Scrum"
]

class Skills extends React.Component {
    render() {
        return <React.Fragment>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    
                        <SkillItem 
                            title="Programming Languages & Tools"
                            subtitle="Workflow"
                            icons={icons}
                            skills={skills}
                            
                        />
                    
                   
                </div>
            </section>
        </React.Fragment>
    }
}

export default Skills