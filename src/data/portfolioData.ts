import { SkillItem, ExperienceItem, ProjectItem, EducationItem, CertificationItem, QaPillar } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Mohammed Asmare',
  title: 'Software Engineer',
  subtitle: 'Full Stack Developer, QA Lead & DevOps Engineer',
  location: 'Addis Ababa, Ethiopia',
  experienceYears: '5+',
  tagline: 'Building Scalable Systems & Ensuring Enterprise-Grade Software Quality',
  heroIntro: 'Software Engineer and Specialist Integration & DevOps Engineer with 5+ years of experience building scalable applications, integrating enterprise systems, managing cloud-native Kubernetes clusters, and ensuring software quality across development, testing, and DevOps.',
  aboutDetailed: 'I am a Software Engineer based in Addis Ababa, Ethiopia, specializing in high-throughput enterprise backends, cloud-native microservices, modern frontend web applications, and end-to-end quality assurance. Over the past 5+ years, I have engineered mission-critical applications at Safaricom Ethiopia and Exceed, migrating legacy TIBCO middleware into Java Spring Boot microservices, building Python FastAPI endpoints, leading System Integration Testing (SIT), and orchestrating containerized deployments with Kubernetes, Docker, Helm, and Jenkins.',
  valueProposition: 'By unifying Development, QA, and DevOps into a cohesive engineering mindset, I eliminate silos, prevent production defects before code reaches staging, and deliver fast, resilient software deployments.',
  contactEmail: 'mohammedasmare@gmail.com',
  phoneNumbers: ['+251 929 373 934', '+251 799 100 411'],
  linkedinUrl: 'https://linkedin.com/in/mohammed-asmare-849609217',
  githubUrl: 'https://github.com/MohammedAsmare',
  availability: 'Open for Full Stack, Backend, QA Lead & DevOps Opportunities',
};

export const SKILL_ITEMS: SkillItem[] = [
  // Programming
  { name: 'Java', category: 'Programming', proficiency: 92, highlight: true },
  { name: 'Python', category: 'Programming', proficiency: 90, highlight: true },
  { name: 'TypeScript', category: 'Programming', proficiency: 90, highlight: true },
  { name: 'JavaScript', category: 'Programming', proficiency: 92 },
  { name: 'SQL', category: 'Programming', proficiency: 92 },
  { name: 'C++', category: 'Programming', proficiency: 80 },

  // Frontend
  { name: 'React (TypeScript)', category: 'Frontend', proficiency: 92, highlight: true },
  { name: 'JavaScript (JS)', category: 'Frontend', proficiency: 92 },
  { name: 'HTML5 & CSS3', category: 'Frontend', proficiency: 95 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90 },

  // Backend
  { name: 'Java (Spring Boot)', category: 'Backend', proficiency: 95, highlight: true },
  { name: 'Python (FastAPI)', category: 'Backend', proficiency: 90, highlight: true },
  { name: 'Python (Django)', category: 'Backend', proficiency: 85 },
  { name: 'RESTful APIs', category: 'Backend', proficiency: 96, highlight: true },
  { name: 'Microservices', category: 'Backend', proficiency: 92, highlight: true },

  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 92, highlight: true },
  { name: 'Oracle Database', category: 'Database', proficiency: 86 },
  { name: 'MySQL', category: 'Database', proficiency: 88 },
  { name: 'SQL Query Optimization', category: 'Database', proficiency: 90 },
  { name: 'Data Validation', category: 'Database', proficiency: 94 },

  // QA & Testing
  { name: 'Functional & Non-Functional Testing', category: 'QA & Testing', proficiency: 95, highlight: true },
  { name: 'API Testing (Postman / RestAssured)', category: 'QA & Testing', proficiency: 96, highlight: true },
  { name: 'System Integration Testing (SIT)', category: 'QA & Testing', proficiency: 96, highlight: true },
  { name: 'Regression & UAT Testing', category: 'QA & Testing', proficiency: 94 },
  { name: 'Performance & Load Testing (JMeter)', category: 'QA & Testing', proficiency: 88 },
  { name: 'Automation Testing Scripts', category: 'QA & Testing', proficiency: 88 },
  { name: 'Defect Management & Triage', category: 'QA & Testing', proficiency: 95 },

  // DevOps
  { name: 'Kubernetes', category: 'DevOps', proficiency: 90, highlight: true },
  { name: 'Docker', category: 'DevOps', proficiency: 92, highlight: true },
  { name: 'Helm', category: 'DevOps', proficiency: 85 },
  { name: 'Jenkins', category: 'DevOps', proficiency: 90, highlight: true },
  { name: 'Git & GitLab', category: 'DevOps', proficiency: 94 },
  { name: 'ArgoCD', category: 'DevOps', proficiency: 84 },
  { name: 'LINUX Administration', category: 'DevOps', proficiency: 90 },

  // Enterprise Integration
  { name: 'TIBCO BusinessWorks', category: 'Enterprise Integration', proficiency: 92, highlight: true },
  { name: 'Middleware Integration', category: 'Enterprise Integration', proficiency: 94, highlight: true },
  { name: 'REST / SOAP Services', category: 'Enterprise Integration', proficiency: 96 },
  { name: 'Vendor Integration', category: 'Enterprise Integration', proficiency: 94 },

  // Monitoring
  { name: 'Prometheus & Grafana', category: 'Monitoring', proficiency: 88, highlight: true },
  { name: 'Log Analysis & Root-Cause Analysis', category: 'Monitoring', proficiency: 92 },
  { name: 'Cluster & Service Monitoring', category: 'Monitoring', proficiency: 90 },
  { name: 'Production Troubleshooting', category: 'Monitoring', proficiency: 95, highlight: true },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: 'Safaricom Ethiopia',
    role: 'Specialist Integration and DevOps Engineer',
    period: '01/2025 – Present',
    location: 'Addis Ababa, Ethiopia',
    isCurrent: true,
    tagline: 'Leading enterprise application development, cloud-native Kubernetes management, and microservices integration.',
    highlights: [
      'Full-Stack Engineer designing, developing, and supporting enterprise-grade applications using React, TypeScript, Java Spring Boot, and Python FastAPI.',
      'Delivered scalable backend microservices, RESTful APIs, and responsive frontend applications in collaboration with cross-functional teams.',
      'Designed, implemented, and managed enterprise integration solutions and DevOps practices for mission-critical applications.',
      'Built and maintained CI/CD pipelines using Jenkins and Git-based workflows, automating build, testing, deployment, and release processes.',
      'Administered and supported cloud-native and containerized platforms using Kubernetes, Docker, and Helm, managing cluster configuration, networking, and monitoring.',
      'Migrated legacy TIBCO integration services into modern Java Spring Boot microservices architectures for improved scalability.',
      'Provided technical leadership in system integration, incident resolution, root-cause analysis, and operational troubleshooting across dev, test, and production.'
    ],
    technologies: [
      'Java Spring Boot', 'Python FastAPI', 'React (TypeScript)', 'Kubernetes', 'Docker',
      'Helm', 'Jenkins', 'GitLab', 'TIBCO Migration', 'RESTful APIs', 'PostgreSQL', 'Prometheus'
    ],
    metrics: [
      { label: 'Platform Status', value: 'Production' },
      { label: 'Delivery Model', value: 'DevOps & Agile' },
      { label: 'Target Reliability', value: '99.9%' }
    ]
  },
  {
    company: 'Exceed Partner of Safaricom Ethiopia',
    role: 'Enterprise Integration Engineer',
    period: '06/2022 – 12/2024',
    location: 'Addis Ababa, Ethiopia',
    isCurrent: false,
    tagline: 'Managed enterprise application deployments, release governance, and microservice backend development.',
    highlights: [
      'Managed application deployments, release governance, and production support for enterprise applications through automated CI/CD pipelines.',
      'Optimized application performance, security, scalability, and maintainability while supporting containerized environments using Kubernetes, Docker, Jenkins, Helm, and Git.',
      'Led end-to-end deployment and environment management activities across development, testing, and production platforms.',
      'Contributed to full-stack application development by delivering frontend interfaces, backend services, REST APIs, and microservices-based solutions.',
      'Applied DevOps best practices, automation, monitoring, incident management, and root-cause analysis to improve system availability.'
    ],
    technologies: [
      'Kubernetes', 'Docker', 'Jenkins', 'Helm', 'Git', 'REST APIs', 'Microservices', 'Production Support'
    ],
    metrics: [
      { label: 'CI/CD Pipeline', value: 'Automated' },
      { label: 'Bank Integrations', value: '20+' },
      { label: 'Role Scope', value: 'Integration Eng' }
    ]
  },
  {
    company: 'Exceed Partner of Safaricom Ethiopia',
    role: 'Lead Quality Assurance Engineer',
    period: '06/2022 – 12/2024',
    location: 'Addis Ababa, Ethiopia',
    isCurrent: false,
    tagline: 'Led QA and testing teams in planning, execution, and delivery of high-quality software solutions.',
    highlights: [
      'Led QA and testing teams in preparing and executing comprehensive test plans, test cases, and test scenarios across multiple enterprise projects.',
      'Performed functional, integration, regression, system, and user acceptance testing (UAT) to ensure application quality and stability.',
      'Conducted detailed defect reporting, tracking, validation, and defect triage meetings to prioritize and resolve critical issues.',
      'Performed manual and automated testing for web applications, APIs, enterprise systems, and integration platforms using Postman and custom scripts.',
      'Conducted performance and load testing with JMeter to evaluate application scalability and response times under peak workloads.'
    ],
    technologies: [
      'SIT Governance', 'API Testing', 'Postman', 'JMeter', 'Defect Triage', 'Automation Testing', 'UAT'
    ],
    metrics: [
      { label: 'Defect Pass Rate', value: '99.8%' },
      { label: 'QA Scope', value: 'Lead QA Eng' }
    ]
  },
  {
    company: 'Hub-Take Advertising',
    role: 'Front-end Dev and System Tester - Volunteer',
    period: '11/2021 – 05/2022',
    location: 'Addis Ababa, Ethiopia',
    isCurrent: false,
    tagline: 'Built responsive web applications for government, NGO, and business platforms while conducting end-to-end system QA.',
    highlights: [
      'Developed responsive, user-friendly frontend applications for government institutions (Women and Children Ministry), NGOs, and local business platforms.',
      'Built customized web solutions for cafeterias and restaurants including menu management and business support functionalities.',
      'Worked closely with backend developers to integrate REST APIs and ensure seamless frontend-backend communication.',
      'Performed end-to-end system testing, including functional, usability, and integration testing, manual QA testing, and defect reporting throughout the SDLC.'
    ],
    technologies: [
      'JavaScript', 'React', 'HTML5/CSS3', 'REST API Integration', 'Manual QA', 'Usability Testing'
    ]
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'DevOps, CI/CD for Beginners',
    issuer: 'Udemy (John Honai)',
    period: '01/2025 – 03/2026',
    category: 'DevOps'
  },
  {
    title: 'Master Docker From Scratch For Java Spring Developers',
    issuer: 'Udemy (Vinoth Selvaraj)',
    period: '04/2025 – 06/2025',
    category: 'Docker'
  },
  {
    title: 'Ultimate DevOps Project Implementation',
    issuer: 'Udemy (Abhishek Veeramalla)',
    period: '06/2025 – 08/2025',
    category: 'DevOps'
  },
  {
    title: 'Docker for the Absolute Beginner - Hands On',
    issuer: 'Udemy (Mumshad Mannambeth / KodeKloud)',
    period: '05/2025 – 07/2025',
    category: 'Docker'
  },
  {
    title: 'AI Engineering Agentic Track',
    issuer: 'Udemy (Ed Daonner)',
    period: '07/2025 – 08/2025',
    category: 'AI'
  },
  {
    title: 'AI for Leaders & Program Managers: Strategy to Development',
    issuer: 'Udemy (Prof Ryan Ahmed, Ph.D)',
    period: '08/2025 – 09/2025',
    category: 'AI'
  },
  {
    title: 'Introduction to Git for GitLab projects',
    issuer: 'Udemy (Valentin Despa)',
    period: '04/2025 – 05/2025',
    category: 'Git'
  },
  {
    title: 'Introduction to DevOps - Learn DevOps basics in 3 hours',
    issuer: 'Udemy (Rick Crisci)',
    period: '06/2025 – 07/2025',
    category: 'DevOps'
  },
  {
    title: 'Time Management, Prioritization and Productivity',
    issuer: 'Udemy (Natalie & Joeel)',
    period: '01/2025 – 03/2025',
    category: 'Management'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Master of Arts in Project Management',
    institution: 'American College Of Technology (ACT)',
    location: 'Addis Ababa, Ethiopia',
    period: '09/2022 – 10/2024',
    gpa: '3.56',
    details: 'Post-graduate degree focused on Enterprise Project Governance, Agile & Waterfall Methodologies, Quality Assurance Leadership, and Software Lifecycle Management.'
  },
  {
    degree: 'BSc Computer Science',
    institution: "St. Mary's University",
    location: 'Addis Ababa, Ethiopia',
    period: '10/2017 – 10/2021',
    gpa: '3.12',
    details: 'Core degree covering Software Engineering, Object-Oriented Programming (Java/C++), Data Structures & Algorithms, Operating Systems, Computer Networks, and Database Systems.'
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'selam-pay-online-banking',
    name: 'Selam Pay — Online Account Creation & Transfer for CBE & Awash Bank',
    tagline: 'Online payment & money transfer platform easing bank workloads between Commercial Bank of Ethiopia (CBE) & Awash Bank.',
    description: 'Designed and built Selam Pay, an online payment and money transfer platform connecting Commercial Bank of Ethiopia (CBE) and Awash Bank. Enabled digital account opening, deposits, withdrawals, and instant inter-bank money transfers.',
    problemSolved: 'Manual bank account opening and money transfer procedures created long queues, high operational processing times, and heavy branch workload for major Ethiopian banks.',
    technologies: ['Android', 'Java', 'REST APIs', 'MySQL / PostgreSQL', 'Data Security', 'Bank Integration Protocols'],
    keyResponsibilities: [
      'Developed the mobile client application enabling digital customer onboarding and account opening.',
      'Implemented secure inter-bank money transfer logic between CBE and Awash Bank accounts.',
      'Configured input validation, encryption, and transaction log auditing for financial transactions.',
      'Demonstrated end-to-end money transfer, deposit, and withdrawal workflows for financial stakeholders.'
    ],
    architectureType: 'Fintech Mobile App',
    impactMetrics: [
      { label: 'Bank Systems', value: 'CBE & Awash' },
      { label: 'Processing Time', value: 'Instant' },
      { label: 'Automation', value: '100% Digital' }
    ]
  },
  {
    id: 'enterprise-api-microservice',
    name: 'Enterprise API & Microservice Integration',
    tagline: 'High-availability Spring Boot microservice backend connecting telecom platforms with financial services.',
    description: 'Engineered enterprise-grade Java Spring Boot microservices and Python FastAPI endpoints handling core transaction orchestration, bearer token authentication, request throttling, and multi-tenant bank integration protocols.',
    problemSolved: 'Legacy monolithic backends created tight coupling, slow response times, and difficult audit trails during high-volume transaction bursts across external bank gateways.',
    technologies: ['Java Spring Boot', 'Python FastAPI', 'REST APIs', 'PostgreSQL', 'Microservices', 'Docker', 'Kubernetes', 'Data Validation'],
    keyResponsibilities: [
      'Architected Spring Boot REST microservices with multi-layered clean code patterns.',
      'Implemented strict schema validation, request payload encryption, and idempotent transaction processing.',
      'Optimized PostgreSQL index strategies and query execution paths for low-latency DB operations.',
      'Configured Dockerized microservice containers with health check probes for automated container recovery.'
    ],
    architectureType: 'Microservice',
    impactMetrics: [
      { label: 'Latency Reduction', value: '45%' },
      { label: 'Throughput', value: '5,000+ TPS' },
      { label: 'Data Accuracy', value: '100%' }
    ]
  },
  {
    id: 'tibco-spring-modernization',
    name: 'TIBCO to Spring Boot Modernization',
    tagline: 'Strategic refactoring of legacy enterprise middleware into lightweight cloud-native microservices.',
    description: 'Spearheaded the architectural migration of legacy TIBCO BusinessWorks integration workflows into modern, maintainable Java Spring Boot services, eliminating vendor lock-in and improving scalability.',
    problemSolved: 'Monolithic TIBCO process flows lacked modern CI/CD automation capabilities, incurred high license overhead, and slowed down continuous feature delivery for partner bank channels.',
    technologies: ['TIBCO BusinessWorks', 'Java 17', 'Spring Boot', 'REST / SOAP', 'GitLab CI/CD', 'Docker', 'JUnit', 'Mockito'],
    keyResponsibilities: [
      'Analyzed and mapped legacy TIBCO BusinessWorks process flows into modular Spring Boot services.',
      'Built automated data transformers converting legacy SOAP XML messages to clean JSON REST payloads.',
      'Created comprehensive unit and integration test suites ensuring 100% functional parity.',
      'Reduced cloud deployment footprint while establishing containerized pipeline builds in GitLab.'
    ],
    architectureType: 'Modernization',
    impactMetrics: [
      { label: 'Integrations Migrated', value: 'TIBCO → Spring' },
      { label: 'Maintenance Cost', value: '-60%' },
      { label: 'Build Time', value: '< 3 mins' }
    ]
  },
  {
    id: 'cicd-k8s-deployment',
    name: 'CI/CD & Kubernetes Deployment Pipeline',
    tagline: 'Automated build, test, and release delivery pipeline on Docker and Kubernetes clusters.',
    description: 'Designed and deployed end-to-end continuous integration and continuous deployment (CI/CD) pipelines integrating GitLab CI, Jenkins, Docker containers, Kubernetes manifests, Helm charts, and Grafana monitoring.',
    problemSolved: 'Manual deployment releases resulted in human errors during configuration changes, inconsistent staging environments, and high rollback times during patch releases.',
    technologies: ['GitLab CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Linux'],
    keyResponsibilities: [
      'Constructed automated multi-stage pipelines performing static code analysis, unit tests, Docker build, and K8s rolling deployment.',
      'Implemented automated release validation tests and health probe checks before cutting over traffic.',
      'Created Grafana operational dashboards tracking container CPU/Memory metrics and HTTP status error rates.',
      'Configured zero-downtime rolling updates and rollback strategies for core integration services.'
    ],
    architectureType: 'CI/CD',
    impactMetrics: [
      { label: 'Deploy Time', value: 'From Hours to Mins' },
      { label: 'Cluster Tech', value: 'Kubernetes + Helm' },
      { label: 'Automation Rate', value: '100%' }
    ]
  },
  {
    id: 'qa-sit-testing-framework',
    name: 'QA & System Integration Testing Framework',
    tagline: 'End-to-end quality assurance governance for complex multi-vendor bank & telecom ecosystems.',
    description: 'Established a standardized SIT (System Integration Testing) and API testing framework covering requirement traceability, automated collection execution, defect lifecycle tracking, and release sign-off.',
    problemSolved: 'Unstandardized vendor test cases caused integration bottlenecks, unverified edge cases, and unexpected failures during live financial institution testing windows.',
    technologies: ['Postman / Newman', 'RestAssured', 'Jira', 'API Testing', 'Performance Testing (JMeter)', 'SIT Governance', 'Defect Management'],
    keyResponsibilities: [
      'Designed structured API test scenarios covering positive flows, authorization failures, timeout simulations, and boundary values.',
      'Automated nightly API regression runs through Postman CLI/Newman integrated into Jenkins pipelines.',
      'Led defect triage sessions between vendor developers, bank IT leads, and internal engineering teams.',
      'Conducted load and stress testing with JMeter to validate peak holiday transaction capacity.'
    ],
    architectureType: 'QA Framework',
    impactMetrics: [
      { label: 'Defects Caught Pre-Prod', value: '99.5%' },
      { label: 'Test Suites', value: 'Postman + JMeter' },
      { label: 'SIT Sign-Offs', value: 'Verified' }
    ]
  }
];

export const QA_PILLARS: QaPillar[] = [
  {
    title: 'Shift-Left Testing',
    description: 'Quality starts at requirement gathering and architecture design, preventing costly rework long before code reaches QA environments.',
    icon: 'ArrowLeftCircle',
    details: ['Acceptance Criteria Validation', 'API Contract Specification', 'Early Risk Identification']
  },
  {
    title: 'API & Integration Rigor',
    description: 'Deep technical validation of backend protocols, HTTP status codes, security tokens, payload encryption, and database transaction integrity.',
    icon: 'Server',
    details: ['REST & SOAP Endpoint Auditing', 'Idempotency & Boundary Checks', 'Database State Assertions']
  },
  {
    title: 'Automated Regression Suites',
    description: 'Eliminating repetitive manual verification by embedding automated API collections into continuous delivery CI/CD pipelines.',
    icon: 'RotateCw',
    details: ['Postman / Newman Pipeline Gatekeeper', 'Nightly Test Collection Execution', 'Instant Failure Alerts']
  },
  {
    title: 'Performance & Resiliency',
    description: 'Simulating peak enterprise load, identifying query bottlenecks, and ensuring systems maintain low latency under high concurrency.',
    icon: 'Zap',
    details: ['JMeter Load & Stress Tests', 'Database Index & Lock Analysis', 'Failover & Timeout Simulation']
  }
];
