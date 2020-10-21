import React from 'react'
import InterestItem from './InterestItem'

const interests = [
    {part1: "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.", 
    part2: "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."}
]

class Interest extends React.Component {
    render() {
        return <React.Fragment>
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    {interests.map((interests,i) => {
                        return <InterestItem key={i} {...interests} />
                    })}
                </div>
            </section>
        </React.Fragment>
    }
}
export default Interest