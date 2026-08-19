import stripImage from '../imgs/homepageimg.png';

import kmc from '../imgs/book-kmc.png';
import sm from '../imgs/book-sm.png';
import jpcs from '../imgs/book-jpcs.png';
import umak from '../imgs/book-umak.png';

import '../styles/commonstyles.css';
import '../styles/home.css';

export default function Home() {
    return (
        <div>
            <div className='first-section'>
                <h3 className='introText'>hey, it’s nadz ☆</h3>

                <div className="image-wrapper">
                    <img src={stripImage} alt="Film strip photos of Nadz" className="film-strip" />
                </div>

                <div className='two-column'>
                    <p>maria nadine faye rufo</p>
                    <code>an aspiring UI/UX Designer and QA Engineer with a passion for clean design and smooth user experiences.</code>
                </div>
            </div>

            <div className='third-section'>
                <h3 className='section-name'>side quests</h3>
                <code className='section-description'>not just work, but wins — the timeline of companies i have worked with, organizations, and competitions</code>

                <div className="image-wrapper">
                    <img src={sm} alt="SM Experience" className="book-card" />
                    <img src={kmc} alt="KMC Experience" className="book-card" />
                    <img src={jpcs} alt="JPCS Experience" className="book-card" />
                    <img src={umak} alt="UMAK Experience" className="book-card" />
                </div>
            </div>
        </div>
    )
}