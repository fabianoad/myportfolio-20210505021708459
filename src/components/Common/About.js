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
                    role="Full-Stack Developer"
                    aboutMe="
                    I am a former civil engineer turned programmer/web developer, with experience in designing and building web applications within the
                    NodeJS / Express environment. My goal is to further my career as a professional developer, and since all of my studies and IT training
                    have been directed towards it, I believe that in this role I can contribute positively to the results of the company.
                    I have more than fifteen years of experience working for large corporations, which demand the highest quality information technology
                    services, therefore I have also acquired solid knowledge from networking, and system administration fields. Nevertheless, I am a
                    coding enthusiastic, and a lifelong learner.
                    "
                    iconLinkedin="fa-linkedin-in"
                    iconGithub="fa-github"
                    iconTwitter="fa-twitter"
                    iconFacebook="fa-facebook-f"

                />

        </React.Fragment>
    }
}
export default About