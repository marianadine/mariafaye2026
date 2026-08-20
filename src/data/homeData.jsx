import solarSphereIcon from '../imgs/icons/solarspherelogo.png';
import byahekoIcon from '../imgs/icons/byahekologo.png';

import greysImg from '../imgs/cristina.png';
import catsImg from '../imgs/cats.png';
import booksImg from '../imgs/books.png';
import musicImg from '../imgs/cds.png';

import page1 from '../imgs/pages/page1.png';
import page2 from '../imgs/pages/page2.png';
import page3 from '../imgs/pages/page3.png';
import page4 from '../imgs/pages/page4.png';

export const projects = [
    {
        id: 1,
        title: 'SolarSphere',
        description: 'smart solar planning platform with solar visualization and personalized recommendations',
        icon: solarSphereIcon,
        tags: ['Solar Planning', 'Energy Saver', 'Cost Estimation'],
        links: [
            { label: 'Website ↗', url: '#' },
            { label: 'Mobile Application ↗', url: '#' },
            { label: 'Capstone ↗', url: '#' },
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
            { label: 'Case Study ↗', url: '#' },
        ],
        badge: 'End to End Project',
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
    sm: [page1, page2, page3, page4, page2, page3, page4],
    kmc: [page3, page4],
    jpcs: [page1, page2],
    umak: [page3, page4],
};