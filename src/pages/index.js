import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Keeps', description:
      <p>I enjoy Google apps and love to take notes and that&#39;s why I started using Goole Keep. But there are some features I feel are missing and that&#39;s why I&#39;m building my own version. You can visit the Github <a href="https://github.com/alphaborel/Keeps" target="_blank" rel="noopener noreferrer">here</a>.</p>
    },
    { id: '2', src: full02, thumbnail: thumb02, caption: 'LoanDash', description:
      <p>The last challenge at the Galvanize School is a Capstone project, built in 10 days and using an unfamiliar language or framework. My chosen    framework was Vue.js and I enjoyed working with it very much! You can see a video demo here: <a href="https://www.youtube.com/watch?v=SMe0a-2W7s0">Loan-Dash Demo (Youtube)</a>. The code is here: <a href="https://github.com/alphaborel/capstone">Loan-Dash Github</a></p>
    },
    { id: '3', src: full03, thumbnail: thumb03, caption: 'DocDash', description:
      <p>My first full CRUD app. It is hosted on Heroku, so <a href="https://docdash.herokuapp.com/" target="_blank" rel="noopener noreferrer">give it a try</a>. If you&#39;re the technical type, visit the <a href="https://github.com/alphaborel/docDash" target="_blank" rel="noopener noreferrer">Github</a>. I Built the app in a couple of days and it was a challenge that I relished!</p>
    },
    { id: '4', src: full04, thumbnail: thumb04, caption: 'WordPress Blog', description:
      <p>Ah, the quintessential <a href="http://alphaborel.com/wp/" target="_blank" rel="noopener noreferrer">WordPress Blog</a>. While I&#39;m not a WordPress programmer (yet), I have setup a multisite and am familiar with some of the plugins that extend the usefulness of WordPress. I greatly admire the WordPress community and the ease of WordPress as a CMS.</p>
    },
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Ye Old Home Page', description:
      <p>In the days before I knew JavaScript, I created <a href="http://alphaborel.com/home/" target="_blank" rel="noopener noreferrer">this multi-page site</a> out of CSS and HTML. It&#39;s not fancy but still works decent.</p>
    },
    { id: '6', src: full06, thumbnail: thumb06, caption: 'The To Do List', description:
      <p>Because there is still room on the web for some vanilla JavaScript and good old DOM manipulation. Although one could scarcely call <a href="https://codepen.io/alphaborel/pen/eMovGj" target="_blank" rel="noopener noreferrer">this an app</a>, it was a fun little learning project.</p>
    }
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Anthony Borel Portfolio"
        const siteDescription = "My place on the web to showcase projects."

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>
                              <blockquote>Any sufficiently advanced technology is indistinguishable from magic. <br/><cite>~Arthur C. Clarke</cite></blockquote>
                            </h2>

                        </header>
                        <h3>Technology isn&#39;t magic, except when it works flawlessly. To get there, you need a great team and a great plan. If you&#39;re looking to fill out your team, I&#39;m available and would love to talk. Interested in what I can do? Scroll down and see.</h3>
                    </section>

                    <section id="two">
                        <h3>Right now I am learning: <a href="https://www.udemy.com/python-masterclass-course/" target="_blank" rel="noopener noreferrer">The Complete Python Masterclass</a></h3>
                    </section>

                    <section id="three">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
