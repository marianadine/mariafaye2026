import stripImage from '../imgs/homepageimg.png';

import kmc from '../imgs/book-kmc.png';
import sm from '../imgs/book-sm.png';
import jpcs from '../imgs/book-jpcs.png';
import umak from '../imgs/book-umak.png';

import greysImg from '../imgs/cristina.png';
import catsImg from '../imgs/cats.png';
import booksImg from '../imgs/books.png';
import musicImg from '../imgs/cds.png';

import '../styles/commonstyles.css';
import '../styles/home.css';

import TechStack from '../components/techStack';

export default function Home() {

    const hobbiesList = [
        {
            id: 1,
            image: greysImg,
            alt: 'Grey\'s Anatomy',
            label: 'rewatching greys anatomy',
        },
        {
            id: 2,
            image: catsImg,
            alt: 'Playing with cats',
            label: 'playing with cats',
        },
        {
            id: 3,
            image: booksImg,
            alt: 'Reading books',
            label: 'reading books',
        },
        {
            id: 4,
            image: musicImg,
            alt: 'Listening to Abel and Olivia',
            label: 'listening to abel and olivia',
        },
    ];

    return (
        <div>
            {/* FIRST SECTION */}
            <section className='first-section'>
                <h3 className='introText'>hey, it’s nadz ☆</h3>

                <div className="image-wrapper">
                    <img src={stripImage} alt="Film strip photos of Nadz" className="film-strip" />
                </div>

                <div className='two-column'>
                    <p>maria nadine faye rufo</p>
                    <code>an aspiring UI/UX Designer and QA Engineer with a passion for clean design and smooth user experiences.</code>
                </div>
            </section>

            {/* THIRD SECTION */}
            <section className='third-section'>
                <h3 className='section-name'>side quests</h3>
                <code className='section-description'>not just work, but wins — the timeline of companies i have worked with, organizations, and competitions</code>

                <div className="image-wrapper">
                    <img src={sm} alt="SM Experience" className="book-card" />
                    <img src={kmc} alt="KMC Experience" className="book-card" />
                    <img src={jpcs} alt="JPCS Experience" className="book-card" />
                    <img src={umak} alt="UMAK Experience" className="book-card" />
                </div>
            </section>

            {/* FOURTH SECTION */}
            <TechStack />

            {/* FIFTH SECTION */}
            <section className="hobbies-section">
                <h3 className="section-name">you can catch me doing:</h3>

                <div className="hobbies-grid">
                    {hobbiesList.map((item) => (
                        <div key={item.id} className="hobby-card">
                            <div className="hobby-image-wrapper">
                                <img src={item.image} alt={item.alt} className="hobby-image" />
                            </div>
                            <code className="hobby-label">{item.label}</code>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}