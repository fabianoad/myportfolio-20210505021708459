import React from 'react'
import SkillItem from './SkillItem'

const icons = [
    "fa-html5", "fa-css3-alt", "fa-js-square", "fa-angular",
    "fa-react", "fa-node-js", "fa-sass", "fa-less", "fa-wordpress",
    "fa-gulp", "fa-grunt", "fa-npm", "fa-linux", "fa-java",
]
const skills = [
    
    
    "Programming and Markup Languages: Javascript, Typescript, C#, Java, CSS, HTML",
    "Frameworks: ReactJs, VueJs, LoopBackJs, Bootstrap, JQuery, Webpack, Spring MVC, Spring Boot",
    "Mobile-First, Responsive Design",
    "Server-Side Frameworks: NodeJs, Express, PHP, ASP.NET Core 3.1",
    "Databases: MongoDB, MySQL, and Oracle",
    "Other: AWS (Cloud9), Git/GitHub, Gitlab, Jenkins, Ansible, and Docker",
    "Agile Development & Scrum",
    "Leadership experience",
    "Familiar with Red Hat and Debian Linux Systems"
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