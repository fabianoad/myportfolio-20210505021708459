import React from 'react';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom'

//Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Experience from './components/Pages/ExperiencePage'
import Education from './components/Pages/EducationPage'
import Skills from './components/Pages/SkillsPage'
import Interest from './components/Pages/InterestPage'
import Awards from './components/Pages/AwardsPage'


import './App.css';


class App extends React.Component {
  render() {
    return <React.Fragment>
              <Router>
                <PageWrapper>

                  <Route
                    exact={true}
                    path="/"
                    component={Home}
                  />
                   <Route
                    path="/about"
                    component={About}
                  />
                  <Route
                    path="/experience"
                    component={Experience}
                  />
                  <Route
                    path="/education"
                    component={Education}
                  />
                  <Route
                    path="/skills"
                    component={Skills}
                  />
                   <Route
                    path="/interest"
                    component={Interest}
                  />
                  <Route
                    path="/awards"
                    component={Awards}
                  />

                </PageWrapper>
              </Router>
      
    </React.Fragment>
  }
}

export default App;