import React from 'react'

class IdiomsItem extends React.Component {
    render() {
        return <React.Fragment>

                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">{this.props.idiom}</h3>
                            <div className="subheading mb-3">{this.props.level}</div>
                        </div>
                        
                    </div>

        </React.Fragment>
    }
}
export default IdiomsItem