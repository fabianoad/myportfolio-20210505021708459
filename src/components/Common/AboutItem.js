import React from 'react'
import {Link} from 'react-router-dom'

class AboutItem extends React.Component {
    render() {
        return <React.Fragment>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        {this.props.firstName}
                        <span className="text-primary">{this.props.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">
                        {this.props.address}
                        <Link to="mailto:name@email.com">&nbsp;|&nbsp;{this.props.email}</Link>
                    </div>
                    <p className="lead mb-5">{this.props.aboutMe}</p>
                    <div className="social-icons">
                        <Link className="social-icon" to="#"><i className={`fab ${this.props.iconLinkedin}`}></i></Link>
                        <Link className="social-icon" to="#"><i className={`fab ${this.props.iconGithub}`}></i></Link>
                        <Link className="social-icon" to="#"><i className={`fab ${this.props.iconTwitter}`}></i></Link>
                        <Link className="social-icon" to="#"><i className={`fab ${this.props.iconFacebook}`}></i></Link>
                    </div>
                </div>
            </section>

        </React.Fragment>
    }
}

export default AboutItem