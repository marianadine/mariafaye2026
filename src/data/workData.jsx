// Icons
import solarSphereIcon from '../imgs/icons/solarspherelogo.png';
import byahekoIcon from '../imgs/icons/byahekologo.png';
import maisonIcon from '../imgs/icons/maisonsucrelogo.png';
import madeByFeiIcon from '../imgs/icons/madebyfeilogo.png';
import uniqloIcon from '../imgs/icons/uniqlologo.png';
import pawsitiveIcon from '../imgs/icons/pawlogo.png';
import atmIcon from '../imgs/icons/atmlogo.png';
import bulldogsExchangeIcon from '../imgs/icons/bulldogsexchangelogodark.png';
import clickdIcon from '../imgs/icons/clickdlogodark.png';
import exploreSphereIcon from '../imgs/icons/espherelogo.png';
import jpcsIcon from '../imgs/icons/jpcslogo.png';

// Thumbnails
import solarSphereThumb from '../imgs/thumbnail/SOLARSPHERE.png';
import byahekoThumb from '../imgs/thumbnail/BYAHEKO.png';
import maisonThumb from '../imgs/thumbnail/MAISON SUCRE.png';
import madeByFeiThumb from '../imgs/thumbnail/MADEBYFEI.png';
import clickdThumb from '../imgs/thumbnail/CLICKD.png';
import uniqloThumb from '../imgs/thumbnail/UNIQLO.png';
import pawsitiveThumb from '../imgs/thumbnail/PAWSITIVE care.png';
import atmThumb from '../imgs/thumbnail/ATM.png';
import bulldogsExchangeThumb from '../imgs/thumbnail/NU MOA BE.png';
import exploreSphereThumb from '../imgs/thumbnail/ESPHERE.png';
import jpcsThumb from '../imgs/thumbnail/JPCS NU MOA.png';

export const featuredProjects = [
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
];

export const moreProjects = [
    {
        id: 3,
        title: 'Clickd',
        description: 'Interactive photobooth application for capturing and customizing photos.',
        icon: clickdIcon,
        thumbnail: clickdThumb,
        tags: ['React', 'JavaScript', 'Photobooth', 'UI/UX'],
        links: [{ label: 'Website ↗', url: 'https://clickbyfei.vercel.app/' }],
        badge: 'Web Application',
    },
    {
        id: 4,
        title: 'Maison Sucre',
        description: 'Elegant bakery website showcasing products and brand identity.',
        icon: maisonIcon,
        thumbnail: maisonThumb,
        tags: ['Web Design', 'UI/UX', 'HTML', 'CSS', 'JavaScript', 'Branding'],
        links: [{ label: 'Website ↗', url: 'https://maisonsucre.vercel.app/' }],
        badge: 'Web Application',
    },
    {
        id: 5,
        title: 'Uniqlo Inventory',
        description: 'Inventory management system for tracking and organizing product stock.',
        icon: uniqloIcon,
        thumbnail: uniqloThumb,
        tags: ['Java', 'CRUD', 'Database', 'Inventory', 'UI/UX'],
        links: [{ label: 'Introduction ↗', url: 'https://drive.google.com/file/d/1vYvVto44O4vUJU1cc583WXhv-bm-GV5Q/view?usp=sharing' }],
        badge: 'Desktop Application',
    },
    {
        id: 6,
        title: 'Pawsitive Care',
        description: 'Pet care platform for managing essential pet information and services.',
        icon: pawsitiveIcon,
        thumbnail: pawsitiveThumb,
        tags: ['React', 'Full Stack Development', 'Web App', 'Pet Care', 'UI/UX'],
        links: [{ label: 'Repository ↗', url: 'https://github.com/marianadine/PawsitiveCare' },
        { label: 'Demo ↗', url: 'https://drive.google.com/file/d/1eQahdmNRlvlg6dvJTy2LhEQZVlpUcWSe/view?usp=sharing' }],
        badge: 'Mobile Application',
    },
    {
        id: 7,
        title: 'ATM',
        description: 'ATM simulation demonstrating essential banking transactions and account management.',
        icon: atmIcon,
        thumbnail: atmThumb,
        tags: ['Java', 'OOP', 'Banking', 'CRUD', 'UI/UX'],
        links: [{ label: 'Repository ↗', url: 'https://github.com/marianadine/MONEY-MAUVE' }],
        badge: 'Desktop Application',
    },
    {
        id: 8,
        title: 'NU MOA Bulldogs Exchange',
        description: 'Community marketplace for buying, selling, and exchanging items among students.',
        icon: bulldogsExchangeIcon,
        thumbnail: bulldogsExchangeThumb,
        tags: ['Marketplace', 'React', 'Database', 'Web App', 'UI/UX'],
        links: [{ label: 'Website ↗', url: 'https://bulldogs-exchange-nu.vercel.app/home' }],
        badge: 'Web Application',
    },
    {
        id: 9,
        title: 'JPCS NU MOA',
        description: 'Interactive digital platform focused on connecting users with content and services.',
        icon: jpcsIcon,
        thumbnail: jpcsThumb,
        tags: ['React', 'JavaScript', 'Web App', 'UI/UX'],
        links: [{ label: 'Website ↗', url: 'https://jpcsnumoa.github.io/community/' }],
        badge: 'Web Application',
    },
    {
        id: 10,
        title: 'ExploreSphere',
        description: 'Travel discovery platform for exploring destinations and planning experiences.',
        icon: exploreSphereIcon,
        thumbnail: exploreSphereThumb,
        tags: ['Travel', 'Python', 'Maps', 'Web App', 'UI/UX'],
        links: [{ label: 'Repository ↗', url: 'https://github.com/marianadine/exploresphere' }],
        badge: 'Web Application',
    },
    {
        id: 11,
        title: 'MadeByFei',
        description: 'Creative brand website showcasing handmade products and creative work.',
        icon: madeByFeiIcon,
        thumbnail: madeByFeiThumb,
        tags: ['Web Design', 'UI/UX', 'Branding', 'JavaScript', 'HTML', 'CSS'],
        links: [{ label: 'Website ↗', url: 'https://madebyfei.vercel.app/' }],
        badge: 'Portfolio',
    },
];