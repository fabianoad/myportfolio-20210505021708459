import React from 'react'

class EducationItem extends React.Component {
    render() {
        return <React.Fragment>

                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">{this.props.college}</h3>
                            <div className="subheading mb-3">{this.props.degree}</div>
                            <div>{this.props.course}</div>
                            <p>{this.props.gpa}</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">{this.props.date}</span></div>
                    </div>

        </React.Fragment>
    }
}
export default EducationItem