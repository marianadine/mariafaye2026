// Import assets for ByaheKo
import byahekoBanner from '../imgs/thumbnail/BYAHEKO.png';
import byahekoDemoVideo1 from '../imgs/videos/byaheko1.mp4';
import byahekoDemoVideo2 from '../imgs/videos/byaheko2.mp4';
import byahekoDemoVideo3 from '../imgs/videos/byaheko3.mp4';
import byahekoDemoVideo4 from '../imgs/videos/byaheko4.mp4';

export const caseStudies = {
  byaheko: {
    banner: byahekoBanner,
    demoVideo: byahekoDemoVideo1,
    meta: {
      badge: "MOBILE CASE STUDY",
      title: "ByaheKo",
      subtitle:
        "Simplifying daily commuting with transit tracking, route planning, and an accessible interface.",
      metaItems: [
        { label: "ROLE", value: "UI/UX Design" },
        { label: "STACK & TOOLS", value: "Figma" },
        { label: "PROJECT SCOPE", value: "Mobile Application" },
      ],
    },
    overviewText: [
      "Navigating daily public transportation in urban centers is plagued by unpredictable schedules, unclear route transfers, and scattered transit information. Commuters waste significant time managing transit transfers without real-time updates.",
      "ByaheKo was built as an all-in-one commute companion that consolidates route options, live fare estimates, and arrival countdowns into an accessible mobile interface.",
    ],
    problemData: [
      {
        title: "The Commuter Problem",
        bullets: [
          {
            highlight: "Zero Live Visibility: ",
            text: "Commuters waste 3–4 hours daily in terminal lines with no real-time vehicle tracking."
          },
          {
            highlight: "Single-Route Trap: ",
            text: "Unexpected floods or traffic leave passengers stranded without dynamic alternative options."
          },
          {
            highlight: "In-Transit Friction: ",
            text: "Static forums work for advance planning, but fail to provide instant updates on active trips."
          }
        ]
      },
      {
        title: "Business & System Impact",
        bullets: [
          {
            highlight: "High User Retention: ",
            text: "Replacing daily commuting anxiety turns the app into an indispensable utility."
          },
          {
            highlight: "Valuable Mobility Data: ",
            text: "Captures proprietary commuter flow and bottleneck insights for LGUs and operators."
          },
          {
            highlight: "Optimized Fleet Operations: ",
            text: "Helps transport lines fill vehicles faster and manage terminal crowds efficiently."
          }
        ]
      }
    ],
    assumptionsData: [
      {
        title: "User Needs",
        desc: "Daily commuters need live vehicle location data, alternative multi-modal routes during disruptions, and clear step-by-step guidance for unfamiliar trips."
      },
      {
        title: "Solution Strategy",
        desc: "Deploying low-cost GPS tracking on transit fleets alongside dynamic 'Plan B' rerouting will eliminate terminal guesswork and keep commuters moving."
      },
      {
        title: "Business Impact",
        desc: "Delivering schedule certainty builds high app retention while generating valuable transit demand insights for operators, hubs, and local government units."
      },
      {
        title: "Technical Scope",
        desc: "The application must be lightweight for low-data environments and flexible enough to handle hardware tracking constraints across informal transit fleets."
      }
    ],
    personasData: [
      {
        name: "Angelo",
        role: "21 | 4th Year College Student",
        quote: '"I\'m exhausted before my first class even starts. Commuting feels like the worst, most unpredictable part of my entire day."',
        goals: [
          "Arrive at campus on time for early classes",
          "Maximize sleep and study time over transit hours",
          "Navigate routes safely on a tight budget"
        ],
        painPoints: [
          "Arrives sweaty and exhausted from crowded lines",
          "Google Maps misses jeepney transfers & tricycle stands",
          "Massive terminal queues with zero arrival updates"
        ]
      },
      {
        name: "Eli",
        role: "26 | Full-Time Corporate Employee",
        quote: '"Waking up at 5:00 AM just to beat the rush hour traffic is physically draining over time. My energy is completely spent before my workday ends."',
        goals: [
          "Avoid tardiness penalties by arriving before 7:00 AM",
          "Find reliable routes during floods or blockages",
          "Protect evening downtime over 3-hour commutes"
        ],
        painPoints: [
          "2-to-3-hour chaotic evening rush hour commute",
          "Navigation apps give driving routes unsafe for commuters",
          "Uncertainty around bus schedules & terminal moves"
        ]
      },
      {
        name: "Dora",
        role: "24 | Casual Commuter",
        quote: '"Before going anywhere unfamiliar, I spend the night before digging through social media just to piece together the actual commute route."',
        goals: [
          "Explore new locations safely without getting lost",
          "Combine maps with real-time local street guidance",
          "Switch to walking options easily during gridlocks"
        ],
        painPoints: [
          "Laggy walking navigation in smaller streets",
          "Must cross-check multiple apps just to find one route",
          "Outdated maps missing street blocks & strike disruptions"
        ]
      }
    ],
    screensData: [
      {
        step: "01",
        title: "Commuter Customization & Quick Access",
        desc: "Personalizes the daily travel experience by providing instant access to saved routes, frequent destinations, and custom commuter profiles.",
        video: byahekoDemoVideo1,
      },
      {
        step: "02",
        title: "P2P Bus Trips Live Status & Schedules",
        desc: "Enables searching for P2P terminals and viewing real-time trip statuses, departure intervals, and full schedule timetables.",
        video: byahekoDemoVideo2,
      },
      {
        step: "03",
        title: "Smart Route Search & Discovery",
        desc: "Searches available transit routes instantly based on start and endpoint locations, optimizing paths for efficiency and cost.",
        video: byahekoDemoVideo3,
      },
      {
        step: "04",
        title: "Detailed Trip Plans & Boarding Guide",
        desc: "Provides clear step-by-step navigation including exact boarding and drop-off points, discount-adjusted fares, travel durations, and vehicle guides.",
        video: byahekoDemoVideo4,
      },
    ],
    feedbackData: [
      {
        tagClass: "feature",
        tagText: "VISUAL TRACKING",
        title: "Live Map Display",
        feedback: "Users wanted an interactive live map to visually trace vehicle locations instead of relying solely on text lists.",
        iteration: "Embedded a live map view above the route timeline with real-time moving vehicle markers."
      },
      {
        tagClass: "usability",
        tagText: "QUICK NAVIGATION",
        title: "Multi-Route Home Access",
        feedback: "Commuters were limited to one primary route on the dashboard, making it tedious to switch between frequent trips.",
        iteration: "Added a customizable multi-route shortcut carousel on the home screen for instant access to Home, Campus, and Work routes."
      }
    ],
    takeawaysData: [
      {
        highlight: "Single-Screen Efficiency: ",
        text: "Consolidating live ETAs, seat counts, and multi-modal routes into one minimalist dashboard eliminated navigation friction for daily commuters."
      },
      {
        highlight: "Value of Estimated Schedules: ",
        text: "Even with minor real-world transit variations, giving users immediate visibility into estimated arrival times drastically reduces commute anxiety."
      },
      {
        highlight: "Clarity Over Realism in UI: ",
        text: "Abstract, high-contrast vector icons and explicit text labels outperform realistic vehicle images when users need to identify transit modes at a quick glance."
      }
    ]
  },
};