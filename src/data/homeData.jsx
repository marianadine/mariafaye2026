import solarSphereIcon from '../imgs/icons/solarspherelogo.png';
import byahekoIcon from '../imgs/icons/byahekologo.png';
import maisonIcon from '../imgs/icons/maisonsucrelogo.png';
import madeByFeiIcon from '../imgs/icons/madebyfeilogo.png';
import jpcsIcon from '../imgs/icons/jpcslogo.png';

import greysImg from '../imgs/cristina.png';
import catsImg from '../imgs/cats.png';
import booksImg from '../imgs/books.png';
import musicImg from '../imgs/cds.png';

// front pages
import kmc from '../imgs/book-kmc.png';
import sm from '../imgs/book-sm.png';
import jpcs from '../imgs/book-jpcs.png';
import umak from '../imgs/book-umak.png';

// back pages
import kmcBack from '../imgs/pages/kmcback.png';
import smBack from '../imgs/pages/smback.png';
import jpcsBack from '../imgs/pages/jpcsback.png';
import umakBack from '../imgs/pages/umakback.png';

// sm pages
import smPage1 from '../imgs/pages/sm1.png';
import smPage2 from '../imgs/pages/sm2.png';
import smPage3 from '../imgs/pages/sm3.png';
import smPage4 from '../imgs/pages/sm4.png';
import smPage5 from '../imgs/pages/sm5.png';
import smPage6 from '../imgs/pages/sm6.png';
import smPage7 from '../imgs/pages/sm7.png';
import smPage8 from '../imgs/pages/sm8.png';

// kmc pages
import kmcPage1 from '../imgs/pages/kmc1.png';
import kmcPage2 from '../imgs/pages/kmc2.png';
import kmcPage3 from '../imgs/pages/kmc3.png';
import kmcPage4 from '../imgs/pages/kmc4.png';
import kmcPage5 from '../imgs/pages/kmc5.png';
import kmcPage6 from '../imgs/pages/kmc6.png';
import kmcPage7 from '../imgs/pages/kmc7.png';
import kmcPage8 from '../imgs/pages/kmc8.png';

// jpcs pages
import jpcsPage1 from '../imgs/pages/jpcs1.png';
import jpcsPage2 from '../imgs/pages/jpcs2.png';
import jpcsPage3 from '../imgs/pages/jpcs3.png';
import jpcsPage4 from '../imgs/pages/jpcs4.png';
import jpcsPage5 from '../imgs/pages/jpcs5.png';
import jpcsPage6 from '../imgs/pages/jpcs6.png';
import jpcsPage7 from '../imgs/pages/jpcs7.png';
import jpcsPage8 from '../imgs/pages/jpcs8.png';

export const projects = [
    {
        id: 1,
        title: 'SolarSphere',
        description: 'smart solar planning platform with solar visualization and personalized recommendations',
        icon: solarSphereIcon,
        tags: ['Solar Planning', 'Energy Saver', 'Cost Estimation'],
        links: [
            // { label: 'Case Study ↗', url: '/works/solarsphere' },
            { label: 'Website ↗', url: 'https://solarsphere-web.vercel.app/' },
            { label: 'SITCON 2026 ↗', url: 'https://drive.google.com/file/d/1_P2t5V6EVNYI2SHpshSRr_yvn08KG0pl/view?usp=sharing' },
        ],
        badge: 'Capstone Project',
    },
    {
        id: 2,
        title: 'ByaheKo',
        description: 'mobile app for discovering routes and making local commuting more convenient',
        icon: byahekoIcon,
        tags: ['Transportation', 'Route Discovery', 'Local Commuting'],
        links: [
            { label: 'Case Study ↗', url: '/works/byaheko' },
        ],
        badge: 'End to End Project',
    },
    {
        id: 3,
        title: 'JPCS NU MOA',
        description: 'An Interactive platform focused on connecting JPCS NU MOA Members with content.',
        icon: jpcsIcon,
        tags: ['React', 'JavaScript', 'Web App', 'UI/UX'],
        links: [{ label: 'Website ↗', url: 'https://jpcsnumoa.github.io/community/' }],
        badge: 'Web Application',
    },
    {
        id: 4,
        title: 'Maison Sucre',
        description: 'Elegant bakery website showcasing products and brand identity.',
        icon: maisonIcon,
        tags: ['Web Design', 'UI/UX', 'HTML', 'CSS', 'JavaScript', 'Branding'],
        links: [{ label: 'Website ↗', url: 'https://maisonsucre.vercel.app/' }],
        badge: 'Web Application',
    },
];

export const hobbiesList = [
    {
        id: 1,
        image: greysImg,
        alt: "Grey's Anatomy",
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

export const bookPagesMap = {
    sm: [sm, smPage1, smPage2, smPage3, smPage4, smPage5, smPage6, smPage7, smPage8, smBack],
    kmc: [kmc, kmcPage1, kmcPage2, kmcPage3, kmcPage4, kmcPage5, kmcPage6, kmcPage7, kmcPage8, kmcBack],
    jpcs: [jpcs, jpcsPage1, jpcsPage2, jpcsPage3, jpcsPage4, jpcsPage5, jpcsPage6, jpcsPage7, jpcsPage8, jpcsBack],
};