export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & APIs' | 'Cloud & DevOps' | 'Data & Tools' | 'Methodologies';
  level: number; // 1-100
  featured?: boolean;
  isLearning?: boolean;
  iconName?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  highlights: string[];
  techStack: string[];
  teamSize?: string;
  client?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  period: string;
  description: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'blue';
}

export interface Certification {
  title: string;
  issuer: string;
  topics: string[];
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  techStack: string[];
  featured?: boolean;
  highlight: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  college?: string;
  location: string;
  period: string;
}

export const RESUME_DATA = {
  personal: {
    name: "Rakesh Kumar",
    title: "Full Stack Developer",
    experienceYears: "9+",
    reactExperience: "5+",
    location: "Parramatta, NSW, Australia",
    phone: "+61 493332955",
    email: "rakeshkumarsyd@gmail.com",
    github: "https://github.com/rakeshkumar1994",
    linkedin: "https://www.linkedin.com/in/rakeshkumar1994",
    summary:
      "Full Stack Developer with 9+ years of commercial software development experience, including 5+ years building customer-facing applications with React, Redux and Node.js/Express for enterprise SaaS and financial-services platforms. Strong background designing and consuming RESTful APIs, contributing to architectural and technical design discussions, and delivering within Agile/Scrum teams. Hands-on experience with AWS (EC2) deployments, CI/CD pipelines (Bamboo, CircleCI) and code review practices, with a collaborative, quality-first approach to engineering.",
    coreStrengths: [
      "Customer-Facing Enterprise React & Node.js Applications",
      "Banking & Financial Services Software Engineering",
      "AI Consumer & AI-Assisted Engineering (GitHub Copilot, Amazon Q / Kiro)",
      "RESTful API & GraphQL Integration Architecture",
      "Cloud Infrastructure (AWS EC2) & CI/CD Delivery",
      "Agile/Scrum Leadership & Mentoring (5–20 Delivery Teams)"
    ]
  },

  projects: [
    {
      title: "CulinaryAI - Smart AI Recipe Generator & Kitchen Studio",
      category: "AI & LLM Integration",
      description: "AI-powered culinary recipe engine and kitchen studio built with FastAPI, Pydantic, Next.js, and Google Gemini LLM to generate custom recipes, ingredient swaps, dietary adjustments, and step-by-step cooking guides.",
      liveUrl: "https://demo-recipe-generator.vercel.app/",
      githubUrl: "https://github.com/rakeshkumar1994/recipe_generator_llm",
      techStack: ["Next.js", "React", "Google Gemini", "FastAPI", "Pydantic", "Tailwind CSS"],
      featured: true,
      highlight: "AI & LLM Integration"
    },
    {
      title: "Wilcox Industries Corp Platform",
      category: "React / Next.js & Headless CMS",
      description: "Enterprise web application built with React and Next.js, integrating WordPress REST API as a headless CMS for dynamic content management, product catalogs, and digital asset management.",
      liveUrl: "https://react-wilcoxind.vercel.app/",
      techStack: ["React.js", "Next.js", "WordPress REST API", "Headless CMS", "Tailwind CSS"],
      featured: true,
      highlight: "React + WordPress API Integration"
    }
  ] as Project[],

  metrics: [
    { label: "Years Commercial Exp.", value: "9+", detail: "Enterprise SaaS & Banking" },
    { label: "React & Node.js Focus", value: "5+", detail: "High-scale UI/API building" },
    { label: "Performance Awards", value: "3+", detail: "Westpac Glory & Infosys Insta" },
    { label: "Team Size Led", value: "5-20", detail: "Scrum ceremonies & Mentorship" }
  ],

  skills: [
    // Frontend
    { name: "React.js", category: "Frontend", level: 95, featured: true, iconName: "Atom", description: "State management, Hooks, performance optimization, reusable UI components." },
    { name: "Redux / Redux Saga / Thunk", category: "Frontend", level: 92, featured: true, iconName: "Layers", description: "Complex state architecture for enterprise banking & credit lending apps." },
    { name: "Next.js", category: "Frontend", level: 90, featured: true, iconName: "Globe", description: "App router, SSR, SSG, full-stack React architecture & optimized performance." },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 95, featured: true, iconName: "Code2", description: "Asynchronous programming, closures, promises, DOM manipulation, clean code." },
    { name: "HTML5 & CSS3 / Sass / Less", category: "Frontend", level: 92, featured: false, iconName: "FileCode", description: "Responsive flexbox/grid layouts, dynamic animations, modern design tokens." },
    { name: "Vue.js", category: "Frontend", level: 80, featured: false, iconName: "Layout", description: "Options/Composition API, reactive UI components." },
    { name: "Angular / AngularJS", category: "Frontend", level: 78, featured: false, iconName: "ShieldCode", description: "MVC architecture, dependency injection, enterprise web apps." },
    { name: "Bootstrap & jQuery", category: "Frontend", level: 85, featured: false, iconName: "Terminal", description: "Rapid UI prototyping, legacy migration and responsive components." },

    // Backend & APIs
    { name: "Python", category: "Backend & APIs", level: 40, featured: true, isLearning: true, iconName: "Code2", description: "Actively acquiring & expanding backend capabilities with Python syntax, async execution, data structures, and LLM AI engine development." },
    { name: "FastAPI", category: "Backend & APIs", level: 30, featured: true, isLearning: true, iconName: "Zap", description: "Actively building high-performance asynchronous REST APIs with Pydantic type safety, auto OpenAPI docs, and AI microservices." },
    { name: "Node.js", category: "Backend & APIs", level: 92, featured: true, iconName: "Server", description: "High-concurrency event-driven backends, microservices, non-blocking I/O." },
    { name: "Express.js", category: "Backend & APIs", level: 90, featured: true, iconName: "Cpu", description: "RESTful web services, routing, middleware authentication, error handling." },
    { name: "RESTful API Architecture", category: "Backend & APIs", level: 95, featured: true, iconName: "Network", description: "Scalable API contracts, OpenAPI/Swagger specifications, backend integrations." },
    { name: "GraphQL", category: "Backend & APIs", level: 82, featured: true, iconName: "Share2", description: "Schema definition, queries, mutations, resolving data efficiently." },
    { name: "Swagger / OpenAPI", category: "Backend & APIs", level: 88, featured: false, iconName: "FileText", description: "Interactive API documentation, validation schemas." },
    { name: "Meteor.js", category: "Backend & APIs", level: 75, featured: false, iconName: "Zap", description: "Real-time fullstack JavaScript prototyping." },

    // Cloud & DevOps
    { name: "AWS (EC2)", category: "Cloud & DevOps", level: 85, featured: true, iconName: "Cloud", description: "Virtual server configuration, security groups, application deployment." },
    { name: "CI/CD Pipelines (Bamboo, CircleCI, CARA)", category: "Cloud & DevOps", level: 88, featured: true, iconName: "GitBranch", description: "Automated test execution, SIT/UAT build deployment, release delivery." },
    { name: "Apache Tomcat", category: "Cloud & DevOps", level: 75, featured: false, iconName: "HardDrive", description: "Web server configuration & deployment management." },
    { name: "Agile & DevOps Delivery", category: "Cloud & DevOps", level: 92, featured: false, iconName: "RefreshCw", description: "Sprint planning, continuous integration, zero-downtime releases." },

    // Data & Tools
    { name: "AI-Assisted Engineering (Copilot, Amazon Q / Kiro)", category: "Data & Tools", level: 92, featured: true, iconName: "Sparkles", description: "Leveraging generative AI development tools (GitHub Copilot, Amazon Q / Kiro, Claude) to accelerate full-stack feature delivery, code refactoring, test generation, and architectural design." },
    { name: "AI Consumer & LLM Integration", category: "Backend & APIs", level: 88, featured: true, iconName: "Share2", description: "Engineering AI consumer applications, integrating Large Language Models (LLM APIs like Google Gemini & OpenAI), prompt engineering, and intelligent AI workflows." },
    { name: "MySQL", category: "Data & Tools", level: 88, featured: true, iconName: "Database", description: "Relational database schema design, queries, indexing, joins." },
    { name: "MongoDB", category: "Data & Tools", level: 85, featured: true, iconName: "Boxes", description: "NoSQL document collections, aggregation pipelines, Mongoose ODM." },
    { name: "Git / Stash / Bitbucket", category: "Data & Tools", level: 95, featured: true, iconName: "GitPullRequest", description: "Feature branching strategies, pull request reviews, merge resolution." },
    { name: "Jira / Confluence / Trello / Asana", category: "Data & Tools", level: 90, featured: false, iconName: "Kanban", description: "Agile tracking, sprint backlogs, technical documentation." },
    { name: "Figma & Miro", category: "Data & Tools", level: 82, featured: false, iconName: "Figma", description: "UI design handoff, architectural wireframing, interactive whiteboarding." },

    // Methodologies
    { name: "Agile & Scrum Ceremonies", category: "Methodologies", level: 95, featured: true, iconName: "Users", description: "Leading daily standups, sprint planning, retrospectives, story point estimation." },
    { name: "Code Review & Quality Engineering", category: "Methodologies", level: 95, featured: true, iconName: "CheckCircle", description: "Promoting coding standards, unit test discipline, vulnerability auditing." },
    { name: "Waterfall Lifecycle", category: "Methodologies", level: 80, featured: false, iconName: "Sliders", description: "Structured phase-based development and documentation requirements." }
  ] as Skill[],

  experiences: [
    {
      id: "infosys-sydney",
      role: "Technology Lead",
      company: "Infosys Limited",
      location: "Sydney, Australia",
      period: "Oct 2022 – Present",
      startDate: "2022-10",
      endDate: "Present",
      isCurrent: true,
      client: "Major Australian Banking Platform",
      teamSize: "5–20 delivery team members",
      techStack: ["React.js", "Redux", "Node.js", "Express.js", "REST APIs", "AWS EC2", "CircleCI", "Bamboo", "Jira", "Agile/Scrum"],
      highlights: [
        "Work across the full stack on customer-facing applications and backend services using React, Redux and Node.js/Express, delivering new features and enhancing existing functionality for a major Australian banking platform.",
        "Design, build and maintain RESTful APIs and integrations, collaborating closely with Product Managers, Designers and cross-functional engineering teams to deliver high-quality software solutions.",
        "Participate in technical design discussions and contribute to architectural decisions, including technology stack, coding standards, performance, scalability and security.",
        "Conduct rigorous code reviews and lead scrum ceremonies, promoting engineering best practices and mentoring team members within a 5–20 person delivery team.",
        "Support cloud-based deployments and environment setup for System Integration Testing (SIT), and assist with CI/CD pipeline execution for release delivery.",
        "Perform impact analysis and story-point estimation within an Agile product environment, supporting SIT/UAT test cycles through to production release."
      ]
    },
    {
      id: "infosys-tech-lead-india",
      role: "Technology Lead",
      company: "Infosys Limited",
      location: "India",
      period: "Jul 2022 – Oct 2022",
      startDate: "2022-07",
      endDate: "2022-10",
      client: "Westpac Digital Finance Application",
      techStack: ["React.js", "Redux", "Node.js", "Express.js", "REST APIs", "Git"],
      highlights: [
        "Continued delivery of high-impact React/Node.js features for the Westpac Digital Finance Application prior to relocating to the Sydney client engagement.",
        "Collaborated with cross-border engineering teams to ensure seamless transition and high code quality ahead of Australia deployment."
      ]
    },
    {
      id: "infosys-analyst",
      role: "Technology Analyst",
      company: "Infosys Limited",
      location: "India",
      period: "May 2021 – Jun 2022",
      startDate: "2021-05",
      endDate: "2022-06",
      techStack: ["React.js", "Redux", "Node.js", "Express.js", "REST Web Services", "Jira", "SIT/UAT"],
      highlights: [
        "Developed and enhanced React, Redux and Node.js/Express modules for enterprise credit-assessment and digital-lending web applications, replacing legacy Excel-based workflows.",
        "Built and consumed REST web services, collaborated closely with QA engineers on system test plans, and resolved critical defects identified during SIT/UAT cycles."
      ]
    },
    {
      id: "logiciel-solutions",
      role: "Software Developer",
      company: "Logiciel Solutions",
      location: "India",
      period: "Jul 2019 – May 2021",
      startDate: "2019-07",
      endDate: "2021-05",
      client: "Keller Williams Command SaaS",
      techStack: ["React.js", "Next.js", "PHP", "Laravel", "REST APIs", "CI/CD"],
      highlights: [
        "Built UI features in React.js and Next.js and integrated with PHP/Laravel backend services for a real estate marketing and lead-management SaaS platform (Keller Williams Command).",
        "Delivered code through a CI/CD pipeline to QA environments, and supported enhancements, bug fixes and production issue resolution."
      ]
    },
    {
      id: "evolvan-info",
      role: "Software Engineer",
      company: "Evolvan Info Solutions Pvt. Ltd.",
      location: "India",
      period: "Apr 2017 – Jun 2019",
      startDate: "2017-04",
      endDate: "2019-06",
      techStack: ["React.js", "WordPress REST API", "AWS EC2", "HTML5", "CSS3", "PHP", "Google Analytics"],
      highlights: [
        "Developed React.js and WordPress REST API-driven front ends, deploying applications to AWS EC2 instances.",
        "Built responsive HTML/CSS/PHP web applications and integrated Google Analytics for user activity tracking."
      ]
    }
  ] as ExperienceItem[],

  achievements: [
    {
      title: "Westpac Glory Award",
      organization: "Westpac Banking Platform / Infosys",
      period: "2021 – 2024",
      description: "Honored with the prestigious Westpac Glory Award for best performance, driving architectural quality and exceptional delivery on critical digital banking platform modules.",
      badgeType: "gold"
    },
    {
      title: "Infosys Insta / Rookie / Best Performer Awards",
      organization: "Infosys Limited",
      period: "2021 – 2024",
      description: "Recognized multiple times with Insta, Rookie of the Month, and Best Performer awards for driving operational excellence, leading technical delivery, and mentoring engineering team members.",
      badgeType: "silver"
    },
    {
      title: "Best Team Player Award",
      organization: "Evolvan Info Solutions",
      period: "2017 – 2019",
      description: "Awarded for exceptional collaboration, teamwork mindset, and proactive support in delivering REST-driven web applications and client solutions on schedule.",
      badgeType: "bronze"
    }
  ] as Achievement[],

  certifications: [
    {
      title: "Infosys Certified React.js Specialist",
      issuer: "Infosys Limited",
      topics: ["React Hooks", "Redux State Architecture", "Component Optimization", "JSX & ES6+"],
      icon: "Atom"
    },
    {
      title: "Infosys Certified Node.js Developer",
      issuer: "Infosys Limited",
      topics: ["Express.js Services", "Event Loop Mechanics", "Async I/O", "REST API Security"],
      icon: "Server"
    },
    {
      title: "Infosys Certified Microservices Architecture",
      issuer: "Infosys Limited",
      topics: ["API Gateway Design", "Service Communication", "Scalability", "Resilience Patterns"],
      icon: "Cpu"
    },
    {
      title: "Infosys Certified Cloud & AI Practitioner",
      issuer: "Infosys Limited",
      topics: ["AWS EC2 Deployment", "Cloud Infrastructure", "AI Application Fundamentals", "CI/CD Integration"],
      icon: "Cloud"
    }
  ] as Certification[],

  education: {
    degree: "B.Tech",
    field: "Information Technology",
    institution: "I.K. Punjab Technical University",
    college: "Ludhiana College of Engineering and Technology, Punjab",
    location: "Punjab, India",
    period: "2012 – 2016"
  } as Education
};
