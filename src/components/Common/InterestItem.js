import React from 'react'

class InterestItem extends React.Component {
    render() {
        return <React.Fragment>
            <p>{this.props.part1}</p>
            <p className="mb-0">{this.props.part2}</p>
        </React.Fragment>
    }
}
export default InterestItem