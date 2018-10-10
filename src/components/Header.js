import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hello, my name is Anthony</strong>, troubleshooter, computer guru and
                    your next developer.<br />
                    </h1>
                    <a src="#">Résumé (PDF)</a>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
