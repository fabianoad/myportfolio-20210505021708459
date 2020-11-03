import React from 'react'
import IdiomsItem from './IdiomsItem'


const item = [
    {idiom: "English", 
        level: "Advanced - Verified by VanHack"},
    {idiom: "Spanish", 
    level: "Intermediate"},
    {idiom: "French", 
    level: "Basic"},
    {idiom: "Portuguese", 
    level: "Fluent"}
]

class Idioms extends React.Component {
    render() {
        return <React.Fragment>

            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Idioms</h2>
                    
                    {item.map((item,i) => {
                        return <IdiomsItem key={i} {...item} />
                    })}
                    
                </div>
            </section>


        </React.Fragment>
    }
}

export default Idioms