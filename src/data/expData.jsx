import smLogo from '../imgs/SMLogo.webp';
import kmcLogoLight from '../imgs/kmclogolight.png';
import nuLogo from '../imgs/nulogo.webp';
import uphsdLogo from '../imgs/uphsdlogo.png';

export const experiences = [
    {
        id: 1,
        company: 'SM Retail',
        period: 'February 2026 - June 2026',
        logo: smLogo,
        roles: [
            {
                title: 'UI/UX Design',
                bullets: [
                    'Used Figma Auto Layout to design dashboards and interface components, specifically leading the design for the SMAC&SHOP Road to Prestige project and an end-to-end transportation application.',
                    'Conducted on-site field research at the Prestige Lounge to analyze day-to-day operational workflows, translating user behaviors and system blueprints into a highly optimized Management System.',
                    'Studied established design systems through the tactical recreation of industry-standard mobile applications, deepening understanding of user navigation, structural consistency, and visual ergonomics.',
                ],
            },
            {
                title: 'Campaign Management',
                bullets: [
                    'Quality assurance testing for SMS, Viber, and Push Notifications within the SMAC&SHOP application to ensure deliverability for live broadcasts.',
                    'Managed end-to-end campaign deployments and documentation, validating technical triggers for high-volume broadcasts.',
                    'Managed comprehensive performance reports to analyze user engagement with promotional campaigns and broadcast communications.',
                ],
            },
        ],
    },
    {
        id: 2,
        company: 'KMC Solutions',
        period: 'November 2025 - February 2026',
        logo: kmcLogoLight,
        roles: [
            {
                title: 'IT Asset Management',
                bullets: [
                    'Maintained well-organized and accurate digital records by structuring asset data and documentation to ensure consistency and reliability.',
                    'Validated inventory data and tracked updates to resolve record discrepancies and maintain data integrity.',
                ],
            },
        ],
    },
];

export const education = [
    {
        id: 1,
        institution: 'National University – Mall of Asia',
        period: 'July 2026',
        logo: nuLogo,
        roles: [
            {
                title: 'Bachelor of Science in Information Technology with Specialization in Mobile and Web Applications',
                bullets: [
                    'CGWA: 3.86 | Summa Cum Laude',
                    "Achievements: First Honor Dean's Lister for 12 consecutive terms (2022 - 2026) | Best Presenter at SITCON 2026",
                    'Capstone Project: SolarSphere: A Web and Mobile Application for Smart Solar Planning with Heatmap Visualization',
                ],
            },
            {
                title: 'Junior Philippine Computer Society | Vice President - Internal & External',
                bullets: [
                    'Coordinated workshops and coding challenges, boosting IT awareness and skills across the campus.',
                    'Increased student engagement through peer-led learning sessions and active participation in JPCS activities.',
                    'Managed the rebranding and partnership efforts, delivering a new logo, website, and increased event support from sponsors and universities.',
                    'Oversaw UI/UX design for organizational websites and integrated programming activities into events.',
                ],
            },
        ],
    },
    {
        id: 2,
        institution: 'University of Perpetual Help – Molino Campus',
        period: 'August 2022',
        logo: uphsdLogo,
        roles: [
            {
                title: 'Senior High School Graduate - STEM Strand',
                bullets: ['Achievements: With High Honors'],
            },
        ],
    },
];