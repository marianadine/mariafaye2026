import stripImage from '../imgs/homepageimg.png';
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
        </div>
    )
}