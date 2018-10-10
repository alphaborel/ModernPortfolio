import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import resume from '../assets/files/anthony_borel_resume.pdf'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="alphaborel.com" className="image avatar"><img src={avatar} alt="Tonys Logo" /></a>
                    <h1><strong>Hello my name is Anthony,</strong> troubleshooter, computer guru and
                    your next developer.<br />
                    </h1>
                    <a href={resume} target="_blank" rel="noopener noreferrer">Résumé (PDF)</a>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
