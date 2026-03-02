export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  category: "SaaS" | "Cybersecurity" | "Healthtech" | "Fintech";
  tags: string[];
  description: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    slug: "pendo",
    name: "Pendo",
    subtitle: "Machine Learning-powered product analytics",
    category: "SaaS",
    tags: ["Product Design", "SaaS"],
    description: "Pendo, an American SaaS web app worth $2.6 billion with clients all over the world, aims to give product managers the best tools to analyze and improve their digital product using useful insights. The Israeli site focuses on multiple features, but mainly on integrating machine learning for the first time in the company.\n\nBy joining forces with Pendo, we sought to integrate the power of Machine Learning and design an impressive next generation version of their NPS tool. To achieve this, we made sure to refine the existing NPS tool, giving it the incredible superpowers of ML technology to boost its capabilities.\n\nIn addition to the extensive redesign of the NPS tool, our team has also crafted a brand new transformative product within Pendo called \"Churn Insights\" – a state-of-the-art machine learning tool that aids users in predicting how to reduce customer churn and maximize user retention rates through enhancing or reducing certain events on their product.",
    thumbnail: "/images/projects/pendo.jpg",
  },
  {
    slug: "lunar",
    name: "Lunar.dev",
    subtitle: "Production-grade API consumption management",
    category: "SaaS",
    tags: ["Product Design", "Motion Design", "Illustrations", "SaaS"],
    description: "Lunar.dev is an Israeli startup and the all-in-one platform built to monitor and manage egress traffic and API consumption at scale, using no-code workflows to maintain flawless performance and cut costs for any API provider.\n\nAs lunar.dev was primarily a \"backend product\" for developers, this was the first time the Lunar team introduced and implemented UI/UX workflows.\n\nThe product design language was adapted from the existing brand identity, with adjustments to typography and colors to meet modern digital product requirements. A complete \"design tokens\" and \"design system\" was created from scratch to support a rich UI components library.\n\nCollaborating with Lunar's product managers, we successfully converted ideas into delightful user flows, ultimately fulfilling their dream of becoming a worldwide leader in the API consumption industry.\n\nWe also had the pleasure of designing Lunar's website with implementing delightful animations.",
    thumbnail: "/images/projects/lunar.jpg",
  },
  {
    slug: "hysolate",
    name: "Hysolate",
    subtitle: "Cyber-security isolated workspace-as-a-service",
    category: "Cybersecurity",
    tags: ["UX Research", "Illustrations", "Product Design", "Motion Design"],
    description: "Hysolate is an Israeli cybersecurity software company that has developed a secure operating system for large organizations, focusing on user productivity and experience.\n\nWe improved the user experience of the installation process for both pre-sale and post-sale products by tightening the brand's design language, using illustrated characters and elements, and planning and designing the product's onboarding process.\n\nMotion design techniques were leveraged to help the development team with implementation.\n\nAn extensive UX study was carried out to analyze various user scenarios & develop solutions. This resulted in some significant enhancements in the product experience and we collaborated with the product & development teams to create an even better user journey.\n\nFinally, we redesigned key components in the product, such as the end user control panel and the management system used for maintenance.",
    thumbnail: "/images/projects/hysolate.jpg",
  },
  {
    slug: "careology",
    name: "Careology",
    subtitle: "Smart cancer care platform",
    category: "Healthtech",
    tags: ["UX Research", "Illustrations", "Product Design"],
    description: "Careology is a British startup that aims to help cancer patients, clinicians, and caregivers by providing them with a perfect smart platform for both mobile and desktop devices.\n\nWe joined forces with the in-house designers to help them streamline processes and improve collaboration between product and development departments.\n\nEventually, we replaced their in-house designers and fully supported and designed the product.\n\nUnder Adam's leadership, our team was able to dramatically expand the design system with comprehensive documentation and create multi-platform features that worked seamlessly on both mobile and web applications.",
    thumbnail: "/images/projects/careology.jpg",
  },
  {
    slug: "ummanu",
    name: "Ummanu",
    subtitle: "International cross-platform telemedicine",
    category: "Healthtech",
    tags: ["Product Design", "WordPress", "Marketing", "Branding", "Illustrations"],
    description: "Ummanu is an international cross platform telemedicine product. It was created with goals: Save time for patients, make it convenient to consult clinicians; increase efficiency of hospitals; allow clinicians to be more involved with patients.\n\nWe started by designing the UX and UI for the clinician's responsive webapp. Our focus was on creating a simple and intuitive user flow, as well as creating a style guide for white labeling.\n\nOur design team created an interface tailored to both iOS and Android, using native components and custom-designed visuals.",
    thumbnail: "/images/projects/ummanu.jpg",
  },
  {
    slug: "lqfi",
    name: "LQFI",
    subtitle: "Fintech solutions for cryptocurrency",
    category: "Fintech",
    tags: ["Product Design", "UX Research", "Marketing", "Motion Design", "Illustrations"],
    description: "LQFI is an Israeli fintech company that provides sophisticated technological solutions for the cryptocurrency industry.\n\nLQFI sought our assistance to establish a proper product-design-development workflow for their intricate dashboards.\n\nWe provided tools and guidance to build a more efficient system of delivery. We also assisted in marketing efforts, creating products to support the entire marketing funnel from start-to-finish.",
    thumbnail: "/images/projects/lqfi.jpg",
  },
  {
    slug: "aerospheres",
    name: "Aerospheres",
    subtitle: "Aviation solutions rebrand",
    category: "Cybersecurity",
    tags: ["Illustrations", "Marketing", "Branding"],
    description: "Aerospheres is an innovative Israeli aviation solutions company that offers services to the aviation, military and space industries.\n\nWe partnered with them to create a modern new look – refreshing their visual products, redesigning their logo and website for a more contemporary feel.\n\nOur team ensured every aspect of the rebrand was executed perfectly, from creating engaging visuals to crafting a unified brand identity.",
    thumbnail: "/images/projects/aerospheres.jpg",
  },
  {
    slug: "optitex",
    name: "Optitex",
    subtitle: "2D/3D fashion industry solutions",
    category: "SaaS",
    tags: ["Product Design", "Frontend"],
    description: "Efi Optitex is a revolutionary software platform, the world's leading provider of integrated 2D/3D solutions for the fashion industry.\n\nOptitex approached us to provide UX solutions for their cloud web applications. We created wireframes and prototypes, then transformed them into a fully designed UI based on Google's material design guidelines.\n\nEverything was tested and refined for optimal UX on all platforms.",
    thumbnail: "/images/projects/optitex.jpg",
  },
  {
    slug: "perception-point",
    name: "Perception Point",
    subtitle: "Cyber-security threat detection",
    category: "Cybersecurity",
    tags: ["Product Design", "UX Research"],
    description: "Perception Point is a leading Israeli cyber-security company known for cutting-edge threat detection and prevention for large organizations.\n\nOur UX research involved analyzing user behavior data and gathering feedback on existing features. We created UI mockups with intuitive navigation, clear messaging, and visual elements that helped users quickly understand the product.",
    thumbnail: "/images/projects/perception-point.jpg",
  },
  {
    slug: "atera",
    name: "Atera",
    subtitle: "IT service management platform",
    category: "SaaS",
    tags: ["WordPress", "Marketing", "Illustrations", "Branding"],
    description: "Atera is an Israeli software company with a SaaS product for IT service providers, installed on more than 600,000 machines.\n\nUnder Uniqorn Design, the company set up a dedicated design department with five full-time designers at its peak.\n\nWe redesigned their entire web app. Adam traveled to the U.S. for user research, defining new strategic values and key messages for the brand.\n\nWe also introduced Atera's new design language to marketing materials including landing pages & social ads.",
    thumbnail: "/images/projects/atera.jpg",
  },
  {
    slug: "pipelbiz",
    name: "PipelBiz",
    subtitle: "Equity crowdfunding platform",
    category: "Fintech",
    tags: ["Product Design"],
    description: "PipelBiz is the first equity crowdfunding platform in Israel, allowing everyone to invest in startups, businesses, and real estate.\n\nWe conducted thorough research through interviews and surveys, and extensive market research on competitors.\n\nJust one week after launching our new design, conversion rates increased by six times!",
    thumbnail: "/images/projects/pipelbiz.jpg",
  },
  {
    slug: "aetrex",
    name: "Aetrex",
    subtitle: "3D foot scanning & orthotics",
    category: "Healthtech",
    tags: ["Product Design"],
    description: "Aetrex produces the best insoles and orthotics for all types of shoes. With their 3D scanning device, they provide the perfect insole.\n\nWe helped Aetrex rethink the user journey for their scanning device web app. The redesign involved creating six unique UI kits with different styles.",
    thumbnail: "/images/projects/aetrex.jpg",
  },
  {
    slug: "mend",
    name: "Mend",
    subtitle: "Open-source security (formerly WhiteSource)",
    category: "Fintech",
    tags: ["Product Design"],
    description: "Mend, formerly WhiteSource, is an Israeli cyber-security company helping developers find vulnerabilities in open-source code.\n\nWe helped design 'Cure' which became the main strategic product. It proactively detects and warns about potential problems in the codebase.\n\nOur team developed a comprehensive design system that improved the UX and increased product value.",
    thumbnail: "/images/projects/mend.jpg",
  },
];
