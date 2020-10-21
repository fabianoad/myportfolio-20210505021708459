import React from 'react'


class ExperienceItem extends React.Component {

    render() {
        return <React.Fragment>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">{this.props.role}</h3>
                            <div className="subheading mb-3">{this.props.company}</div>
                            <p>{this.props.activity}</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">{this.props.date}</span></div>
                    </div>
        </React.Fragment>
    }
}
export default ExperienceItem