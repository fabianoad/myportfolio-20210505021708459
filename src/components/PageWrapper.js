import React from 'react'
import {Link} from 'react-router-dom'

class PageWrapper extends React.Component {
    render() {

        return <React.Fragment>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand js-scroll-trigger" to="/">
                <span className="d-block d-lg-none">Fabiano Duarte</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/education">Education</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/interest">Interests</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/awards">Awards</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
            {this.props.children}
        </div>
        </React.Fragment>

    }
}

export default PageWrapper