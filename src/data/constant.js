import logoImg from "../assets/images/logo/123logo123.svg";

// all services
export const services = [
  {
    id: 1,
    title: "Web Development (Full Stack)",
    subtitle: "Dynamic Web Platforms for Modern Businesses",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We deliver scalable and secure full-stack web applications that align with your goals. Our solutions are fast, flexible, and designed to perform across all devices and browsers.",
    keywords: [
      "Full Stack Web Development",
      "Custom Web Applications",
      "Frontend & Backend Development"
    ],
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle: "Mobile Solutions That Scale With You",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "From idea to app store, we develop powerful mobile apps that perform flawlessly across devices. Native, hybrid, or cross-platform — we build apps that users love and businesses rely on.",
    keywords: [
      "Mobile App Development Company",
      "iOS & Android App Development",
      "Cross-Platform App Developers"
    ],
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "Artificial Intelligence Development",
    subtitle: "Smarter Systems for Smarter Business",
    icon: require("../assets/images/icons/ai.png"),
    description:
      "From machine learning algorithms to automation tools, we build AI-powered solutions that learn, adapt, and solve real business problems.",
    keywords: [
      "AI Development Services",
      "Machine Learning Solutions",
      "Intelligent Automation",
      "Predictive Analytics"
    ],
    link: "/services/ai-ml-development",
  },
  {
    id: 4,
    title: "Blockchain Development",
    subtitle: "Decentralized Solutions for a Transparent World",
    icon: require("../assets/images/icons/blockchain.png"),
    description:
      "Build trust with custom blockchain apps, smart contracts, and decentralized systems tailored to your business use case.",
    keywords: [
      "Blockchain App Development",
      "Smart Contracts",
      "dApp Development",
      "Web3 Projects"
    ],
    link: "/services/blockchain-solutions",
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    subtitle: "Resilient Infrastructure That Grows With You",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    description:
      "We help businesses migrate, manage, and scale on the cloud — whether it’s AWS, Azure, or GCP. Improve performance, reduce costs, and build flexible systems.",
    keywords: [
      "Cloud Computing Services",
      "Cloud Migration",
      "DevOps Cloud Solutions",
      "AWS Cloud Architecture"
    ],
    link: "/services/cloud-computing-services",
  },
  {
    id: 6,
    title: "UI/UX Design",
    subtitle: "Design That Drives Engagement",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "We design intuitive, human-centered interfaces that enhance user experience and drive better engagement. From wireframes to pixel-perfect UIs, we combine strategy with creativity.",
    keywords: [
      "UI/UX Design Services",
      "User Experience Design",
      "App Interface Design",
      "Design Thinking Agency"
    ],
    link: "/services/ui-ux",
  },
  {
    id: 7,
    title: "Chatbot Development",
    subtitle: "24/7 Support Powered by AI",
    icon: require("../assets/images/icons/chatbot.png"),
    description:
      "Enhance customer engagement and support with intelligent chatbots built using NLP and deep learning. Perfect for websites, apps, and messaging platforms.",
    keywords: [
      "AI Chatbots",
      "Custom Chatbot Development",
      "Conversational AI",
      "Automated Customer Support"
    ],
    link: "/services/chatbot-development",
  },
  {
    id: 8,
    title: "Data Analytics & Business Intelligence",
    subtitle: "Unlock Hidden Insights, Make Better Decisions",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We help you transform raw data into meaningful dashboards and reports. Get the clarity you need to make informed, data-driven decisions.",
    keywords: [
      "Data Analytics",
      "Business Intelligence Solutions",
      "Data Visualization",
      "Power BI & Tableau Experts"
    ],
    link: "/services/data-analytics-business",
  },
  {
    id: 9,
    title: "IoT Development",
    subtitle: "Smart, Connected Solutions for the Real World",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "We build secure and scalable IoT ecosystems for smart homes, industrial automation, and connected devices. End-to-end development from hardware integration to data management.",
    keywords: [
      "IoT Development Company",
      "Smart Device Integration",
      "Industrial IoT Solutions"
    ],
    link: "/services/iot-development",
  },
  {
    id: 10,
    title: "Game Development",
    subtitle: "Interactive Games Built for Immersive Play",
    icon: require("../assets/images/icons/projects.png"),
    description:
      "From hyper-casual mobile games to multiplayer platforms, we bring your game ideas to life with stunning visuals and seamless gameplay mechanics.",
    keywords: [
      "Game Development Studio",
      "Unity & Unreal Game Developers",
      "Mobile Game Development"
    ],
    link: "/services/game-development",
  },
];

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+919347568452",
  location: "Uptown Cyberabad Building, 100ft Rd, Madhapur, Hi-Tech City, Hyderabad, Telangana",
  email: "contactus@vihaangai.com",
};

export const landingPageNavLinks = [
  {
    id: 1,
    label: "Home",
    link: "banner",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    label: "Reviews",
    link: "reviews",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

// website pages links
export const websitePagesLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    label: "About Us",
  },
  {
    id: 3,
    link: "/services",
    label: "Services",
  },
  {
    id: 4,
    link: "/blogs",
    label: "Blogs",
  },
  {
    id: 5,
    link: "/contact",
    label: "Contact Us",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Website",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your goals, target audience, and project needs. Through collaborative discussions, we solidify the website's functionalities and user journeys.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric blueprint. We meticulously plan the website's architecture, information flow, and visual identity, ensuring an intuitive and engaging experience.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life. We leverage cutting-edge technologies to build a secure and scalable website or web application that seamlessly integrates with your existing systems.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your website to rigorous testing to ensure flawless performance across all devices. Once satisfied, we launch your masterpiece with a smooth transition and ongoing support.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch. We provide ongoing maintenance, security updates, and expert assistance to keep your website thriving in the ever-evolving digital landscape.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your app's purpose, target audience, and desired functionalities. Through workshops and discussions, we'll solidify your app's foundation.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "We craft a user-centric experience. Our designers create intuitive interfaces, while our planners map out the development roadmap, ensuring a smooth and efficient build.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled engineers bring your app to life. Using cutting-edge tools and following best practices, we meticulously code every feature, ensuring a robust and functional app.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We rigorously test every aspect of your app across different devices and scenarios. Our goal To identify and fix any glitches before launch, guaranteeing a seamless user experience.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Your app's success is our priority. We offer ongoing support to address any issues and provide updates to keep your app functioning at its best.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Gathering",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
  },
];

// Updated testimonials with service-specific feedback
export const testimonials = [
  {
    id: 1,
    service: "UI/UX Design",
    quote: "Working with their UI/UX team was a game-changer. They took our vision and transformed it into a seamless, intuitive user journey. Our app retention rate improved by 40% post-launch!",
    client: {
      name: "Ritika Mehra",
      title: "Product Head",
      company: "HealthTech Startup"
    },
    keywords: ["UI/UX Design Services", "App Interface Design"]
  },
  {
    id: 2,
    service: "Mobile App Development",
    quote: "We needed a robust mobile app for both iOS and Android — and they delivered it perfectly. The app runs smooth, looks beautiful, and our customers love it. It's now a major revenue channel for us.",
    client: {
      name: "David Lin",
      title: "CTO",
      company: "Retail eCommerce Brand"
    },
    keywords: ["Mobile App Development Company", "Cross-Platform App Developers"]
  },
  {
    id: 3,
    service: "Web Development (Full Stack)",
    quote: "Their web development team is highly skilled and incredibly responsive. From backend APIs to frontend design, they handled everything. We've scaled 3x since going live!",
    client: {
      name: "Karan Shetty",
      title: "Co-Founder",
      company: "B2B SaaS Platform"
    },
    keywords: ["Full Stack Web Development", "Custom Web Application Development"]
  },
  {
    id: 4,
    service: "Cloud Computing Services",
    quote: "Our infrastructure was a mess before we moved to the cloud with them. They helped us migrate to AWS smoothly, reduced our server costs, and improved our uptime significantly.",
    client: {
      name: "Meenal Ghosh",
      title: "Operations Lead",
      company: "Logistics Company"
    },
    keywords: ["Cloud Migration Services", "AWS DevOps", "Cloud Infrastructure Management"]
  },
  {
    id: 5,
    service: "AI Development",
    quote: "We needed AI-powered automation for our internal tools — and this team nailed it. From ideation to deployment, everything was precise, scalable, and secure.",
    client: {
      name: "Carlos Rivera",
      title: "Innovation Manager",
      company: "Enterprise Software Firm"
    },
    keywords: ["AI Development Services", "Custom Machine Learning Models"]
  },
  {
    id: 6,
    service: "Chatbot Development",
    quote: "They built us a customer support chatbot that cut response time by 80% and improved client satisfaction. It's now handling 70% of our support tickets effortlessly.",
    client: {
      name: "Ankita Shah",
      title: "Customer Success Manager",
      company: "Fintech Company"
    },
    keywords: ["Chatbot Development Company", "AI Conversational Bots"]
  },
  {
    id: 7,
    service: "Data Analytics & Business Intelligence",
    quote: "Their analytics dashboard gave us a new perspective on our sales pipeline. We're now making data-driven decisions daily — and it's showing in our growth numbers.",
    client: {
      name: "Ben Thompson",
      title: "Director of Sales",
      company: "Digital Marketing Agency"
    },
    keywords: ["Business Intelligence Services", "Data Analytics Solutions"]
  },
  {
    id: 8,
    service: "IoT Development",
    quote: "We worked with them on a smart home IoT product — and their technical expertise blew us away. They understood the hardware-software interplay like pros.",
    client: {
      name: "Neha Rathi",
      title: "Product Manager",
      company: "Smart Device Company"
    },
    keywords: ["IoT App Development", "Embedded IoT Solutions"]
  },
  {
    id: 9,
    service: "Blockchain Development",
    quote: "The team helped us build a secure, decentralized voting app for our blockchain startup. Their knowledge of smart contracts and security was spot on.",
    client: {
      name: "Jules Verne",
      title: "Founder",
      company: "CryptoGov Inc."
    },
    keywords: ["Blockchain Development Services", "Smart Contract Development"]
  },
  {
    id: 10,
    service: "Game Development",
    quote: "We collaborated with their game development team on a hyper-casual mobile game. The visuals, gameplay mechanics, and user engagement have been top-tier since day one.",
    client: {
      name: "Rohan Mistry",
      title: "Indie Game Studio Owner",
      company: "Game Studio"
    },
    keywords: ["Game Development Studio", "Unity Game Developers"]
  }
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Connecting devices and systems to enhance automation and operational efficiency",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("../assets/images/industries/Education.webp"),
    desc: " Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 10,
    title: "Telecom",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: " Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];


// portfolio images (web development)
export const webPortfolio = [
  // {
  //   id: 1,
  //   img: require('../assets/images/portfolio/web-development/5ghomes.webp'),
  //   title: "5g Homes",
  //   link: "https://5ghighspeedinternet.co",
  // },
  {
    id: 2,
    img: require('../assets/images/portfolio/web-development/cold-creekcap.webp'),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require('../assets/images/portfolio/web-development/think-reality.webp'),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require('../assets/images/portfolio/web-development/akash-mega-mart.webp'),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require('../assets/images/portfolio/web-development/midwam.webp'),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require('../assets/images/portfolio/app-development/akash_mega_mart-app.webp'),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require('../assets/images/portfolio/app-development/feelit_app.webp'),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require('../assets/images/portfolio/app-development/klikomics.webp'),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require('../assets/images/portfolio/app-development/autosnap-app.webp'),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require('../assets/images/portfolio/app-development/rentop.webp'),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
