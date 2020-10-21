import React from 'react'
import AboutItem from '../Common/AboutItem'


class About extends React.Component {
    render() {
        return <React.Fragment>

                <AboutItem 
                    firstName="Fabiano" 
                    lastName="Duarte"
                    address="Av. jurema 200, apto 191C, Moema - Sao Paulo/SP"
                    email="fabianod@yahoo.com.br"
                    aboutMe="Full-Stack Developer"
                    iconLinkedin="fa-linkedin-in"
                    iconGithub="fa-github"
                    iconTwitter="fa-twitter"
                    iconFacebook="fa-facebook-f"

                />

        </React.Fragment>
    }
}
export default About