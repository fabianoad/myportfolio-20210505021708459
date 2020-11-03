import React from 'react'

//Re-usable components

import About from '../Common/About'
import Education from '../Common/Education'
import Experience from '../Common/Experience'
import Skills from '../Common/Skills'
import Interest from '../Common/Interest'
import Awards from '../Common/Awards'
import Idioms from '../Common/Idioms'


class Home extends React.Component {
    render() {
        return (
            <div>
                <About />
                <hr className="m-0" />
                <Experience />
                <hr className="m-0" />
                <Education />
                <hr className="m-0" />
                <Idioms />
                <hr className="m-0" />
                <Skills />
                <hr className="m-0" />
                <Interest />
                <hr className="m-0" />
                <Awards />
               
            </div>
        )
    }
}
export default Home