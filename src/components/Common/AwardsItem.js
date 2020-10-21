import React from 'react'

class AwardsItem extends React.Component {
    render() {
        return <React.Fragment>
            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            {this.props.award}
        </React.Fragment>
    }
    
}
export default AwardsItem