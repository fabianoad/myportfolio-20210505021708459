import React from 'react'

class SkillItem extends React.Component {
    render() {
        return <React.Fragment>
            <div className="subheading mb-3">{this.props.title}</div>
                
                <ul className="list-inline dev-icons">
                    {this.props.icons.map((icons, i) => {
                        return <li key={i} className="list-inline-item"><i className={`fab ${icons}`}></i></li>
                    })}
                    
                </ul>

                    <div className="subheading mb-3">{this.props.subtitle}</div>
                
                    <ul className="fa-ul mb-0">
                        {this.props.skills.map((skills,i) => {
                            return <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{skills}</li>
                        })}
                        
                    </ul>
        </React.Fragment>
    }
}
export default SkillItem