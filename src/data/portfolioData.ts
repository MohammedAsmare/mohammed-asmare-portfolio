import { SkillItem, ExperienceItem, ProjectItem, SdlcStep, EducationItem, QaPillar } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Mohammed Asmare',
  title: 'Full Stack Developer & QA Engineer',
  location: 'Addis Ababa, Ethiopia',
  experienceYears: '5+',
  tagline: 'Building Scalable Systems & Ensuring Enterprise-Grade Software Quality',
  heroIntro: 'Full Stack Developer and QA Engineer with 5+ years of experience building scalable applications, integrating enterprise systems, and ensuring software quality through development, testing, DevOps, and continuous delivery.',
  aboutDetailed: 'I am a Software Engineer based in Addis Ababa, Ethiopia, specializing in high-throughput enterprise backends, modern web applications, and end-to-end quality assurance. Over the past 5+ years, I have engineered mission-critical microservices and middleware platforms in large-scale telecommunications environments—most notably integrating Safaricom Ethiopia’s ecosystem with 20+ major financial institutions and external vendors.',
  valueProposition: 'By unifying Development, QA, and DevOps into a cohesive engineering mindset, I eliminate silos, prevent production defects before code reaches staging, and deliver fast, resilient software deployments.',
  contactEmail: 'contact@mohammedasmare.dev', // professional representation
  linkedinUrl: 'https://linkedin.com/in/mohammed-asmare',
  githubUrl: 'https://github.com/MohammedAsmare',
  availability: 'Open for Full Stack, Backend, QA Lead & DevOps Opportunities',
};

export const SKILL_ITEMS: SkillItem[] = [
  // Programming
  { name: 'Java', category: 'Programming', proficiency: 92, highlight: true },
  { name: 'Python', category: 'Programming', proficiency: 88, highlight: true },
  { name: 'TypeScript', category: 'Programming', proficiency: 90, highlight: true },
  { name: 'JavaScript', category: 'Programming', proficiency: 92 },
  { name: 'SQL', category: 'Programming', proficiency: 90 },

  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 90, highlight: true },
  { name: 'TypeScript', category: 'Frontend', proficiency: 90 },
  { name: 'JavaScript', category: 'Frontend', proficiency: 92 },
  { name: 'HTML5', category: 'Frontend', proficiency: 95 },
  { name: 'CSS3 / Tailwind', category: 'Frontend', proficiency: 92 },

  // Backend
  { name: 'Java', category: 'Backend', proficiency: 92, highlight: true },
  { name: 'Spring Boot', category: 'Backend', proficiency: 94, highlight: true },
  { name: 'Python', category: 'Backend', proficiency: 88 },
  { name: 'FastAPI', category: 'Backend', proficiency: 85 },
  { name: 'REST APIs', category: 'Backend', proficiency: 96, highlight: true },
  { name: 'Microservices', category: 'Backend', proficiency: 92, highlight: true },

  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 90, highlight: true },
  { name: 'SQL', category: 'Database', proficiency: 92 },
  { name: 'Query Optimization', category: 'Database', proficiency: 88 },
  { name: 'Data Validation', category: 'Database', proficiency: 94 },

  // QA & Testing
  { name: 'Manual Testing', category: 'QA & Testing', proficiency: 95 },
  { name: 'API Testing (Postman/RestAssured)', category: 'QA & Testing', proficiency: 96, highlight: true },
  { name: 'Functional Testing', category: 'QA & Testing', proficiency: 94 },
  { name: 'Integration Testing (SIT)', category: 'QA & Testing', proficiency: 96, highlight: true },
  { name: 'Regression Testing', category: 'QA & Testing', proficiency: 92 },
  { name: 'Performance Testing (JMeter)', category: 'QA & Testing', proficiency: 88 },
  { name: 'Automation Testing', category: 'QA & Testing', proficiency: 89 },
  { name: 'Test Case Design', category: 'QA & Testing', proficiency: 95 },
  { name: 'Defect Management (Jira)', category: 'QA & Testing', proficiency: 94 },

  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 90, highlight: true },
  { name: 'Kubernetes', category: 'DevOps', proficiency: 85, highlight: true },
  { name: 'Jenkins', category: 'DevOps', proficiency: 88 },
  { name: 'Git & GitLab', category: 'DevOps', proficiency: 92 },
  { name: 'CI/CD Pipelines', category: 'DevOps', proficiency: 90, highlight: true },
  { name: 'Argo CD', category: 'DevOps', proficiency: 82 },
  { name: 'Helm', category: 'DevOps', proficiency: 80 },
  { name: 'Linux Administration', category: 'DevOps', proficiency: 88 },

  // Enterprise Integration
  { name: 'TIBCO BusinessWorks', category: 'Enterprise Integration', proficiency: 92, highlight: true },
  { name: 'Middleware Integration', category: 'Enterprise Integration', proficiency: 94, highlight: true },
  { name: 'REST / SOAP APIs', category: 'Enterprise Integration', proficiency: 96 },
  { name: 'Vendor Integration', category: 'Enterprise Integration', proficiency: 94 },

  // Monitoring
  { name: 'Prometheus', category: 'Monitoring', proficiency: 86, highlight: true },
  { name: 'Grafana', category: 'Monitoring', proficiency: 88, highlight: true },
  { name: 'Health Checks', category: 'Monitoring', proficiency: 92 },
  { name: 'Log Analysis (ELK)', category: 'Monitoring', proficiency: 90 },
  { name: 'Production Troubleshooting', category: 'Monitoring', proficiency: 94, highlight: true },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: 'Safaricom Ethiopia',
    role: 'Specialist Integration & DevOps Engineer',
    period: 'January 2025 – Present',
    isCurrent: true,
    tagline: 'Leading microservices integration, telecom-to-fintech connectivity, and containerized deployment infrastructure.',
    highlights: [
      'Engineered Java and Spring Boot backend microservices for high-throughput telecom and M-Pesa ecosystem operations.',
      'Designed and consumed robust REST APIs for seamless external vendor and financial institution integrations.',
      'Built reactive frontend web utilities and internal dashboards using React and TypeScript.',
      'Executed System Integration Testing (SIT), automated API testing, regression suites, and load/performance testing.',
      'Managed PostgreSQL database schemas, complex SQL queries, transaction locks, and data validation rules.',
      'Orchestrated end-to-end CI/CD automation pipelines using Jenkins and GitLab CI/CD to Docker containers and Kubernetes clusters.',
      'Established real-time system monitoring and alert triggers using Prometheus, Grafana, and health probe endpoints.',
      'Provided 24/7 Tier-3 production support, rapid incident resolution, environment migrations, and zero-downtime release deployments.'
    ],
    technologies: [
      'Java', 'Spring Boot', 'REST APIs', 'Microservices', 'M-Pesa API', 'React', 'TypeScript',
      'PostgreSQL', 'Jenkins', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'
    ],
    metrics: [
      { label: 'System Reliability', value: '99.9%' },
      { label: 'Deploy Automation', value: '100%' },
      { label: 'Fintech Partners', value: 'M-Pesa Core' }
    ]
  },
  {
    company: 'Exceed – Safaricom Ethiopia Partner',
    role: 'Enterprise Integration Engineer / QA Lead',
    period: 'June 2022 – December 2024',
    isCurrent: false,
    tagline: 'Spearheaded 20+ bank integrations and middleware modernization from legacy TIBCO to microservices architecture.',
    highlights: [
      'Led the end-to-end integration and verification of 20+ major Commercial and Private Bank systems with Safaricom payment gateways.',
      'Served as System Integration Testing (SIT) Lead, crafting comprehensive master test plans, test matrices, and defect lifecycle tracking.',
      'Executed rigorous manual and automated API testing using Postman, Newman, and custom scripts to ensure 100% data integrity across financial protocols.',
      'Architected and executed TIBCO BusinessWorks integrations and championed the strategic migration from legacy TIBCO middleware to modern Java Spring Boot microservices.',
      'Conducted mobile application testing and cross-platform verification across Android and iOS builds.',
      'Coordinated cross-functional teams, vendor engineers, bank technical leads, and release validation committees prior to production go-live.'
    ],
    technologies: [
      '20+ Bank APIs', 'TIBCO BusinessWorks', 'Java', 'Spring Boot', 'REST/SOAP', 'API Testing',
      'SIT Leadership', 'Postman', 'Defect Management', 'Jira', 'Mobile App Testing'
    ],
    metrics: [
      { label: 'Bank Integrations', value: '20+' },
      { label: 'Legacy Modernized', value: 'TIBCO → Spring' },
      { label: 'SIT Pass Rate', value: '99.8%' }
    ]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'enterprise-api-microservice',
    name: 'Enterprise API & Microservice Integration',
    tagline: 'High-availability microservice backend connecting telecom platforms with financial services.',
    description: 'Designed and deployed enterprise-grade Java Spring Boot microservices handling core transaction orchestration, bearer token authentication, request throttling, and multi-tenant bank integration protocols.',
    problemSolved: 'Legacy monolithic backends created tight coupling, slow response times, and difficult audit trails during high-volume transaction bursts across external bank gateways.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Microservices', 'Docker', 'OAuth2', 'Data Validation'],
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
      'Analyzed and mapped 50+ legacy TIBCO BusinessWorks process flows into modular Spring Boot services.',
      'Built automated data transformers converting legacy SOAP XML messages to clean JSON REST payloads.',
      'Created comprehensive unit and integration test suites ensuring 100% functional parity.',
      'Reduced cloud deployment footprint while establishing containerized pipeline builds in GitLab.'
    ],
    architectureType: 'Modernization',
    impactMetrics: [
      { label: 'Integrations Migrated', value: '20+ Banks' },
      { label: 'Maintenance Cost', value: '-60%' },
      { label: 'Build Time', value: '< 3 mins' }
    ]
  },
  {
    id: 'cicd-k8s-deployment',
    name: 'CI/CD & Kubernetes Deployment Pipeline',
    tagline: 'Automated build, test, and release delivery pipeline on Docker and Kubernetes clusters.',
    description: 'Designed and deployed end-to-end continuous integration and continuous deployment (CI/CD) pipelines integrating GitLab CI, Jenkins, Docker containers, Kubernetes manifests, and Grafana monitoring.',
    problemSolved: 'Manual deployment releases resulted in human errors during configuration changes, inconsistent staging environments, and high rollback times during patch releases.',
    technologies: ['GitLab CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Linux', 'Bash'],
    keyResponsibilities: [
      'Constructed automated multi-stage pipelines performing static code analysis, unit tests, Docker build, and K8s rolling deployment.',
      'Implemented automated release validation tests and health probe checks before cutting over traffic.',
      'Created Grafana operational dashboards tracking container CPU/Memory metrics and HTTP status error rates.',
      'Configured zero-downtime rolling updates and rollback strategies for core integration services.'
    ],
    architectureType: 'CI/CD',
    impactMetrics: [
      { label: 'Deploy Time', value: 'From Hours to Mins' },
      { label: 'Uptime', value: '99.99%' },
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
      'Designed over 500+ structured API test scenarios covering positive flows, authorization failures, timeout simulations, and boundary values.',
      'Automated nightly API regression runs through Postman CLI/Newman integrated into Jenkins pipelines.',
      'Led defect triage sessions between vendor developers, bank IT leads, and internal engineering teams.',
      'Conducted load and stress testing with JMeter to validate peak holiday transaction capacity.'
    ],
    architectureType: 'QA Framework',
    impactMetrics: [
      { label: 'Defects Caught Pre-Prod', value: '99.5%' },
      { label: 'Test Case Count', value: '500+' },
      { label: 'Bank Sign-Offs', value: '20 / 20' }
    ]
  }
];

export const SDLC_STEPS: SdlcStep[] = [
  {
    step: 1,
    title: 'Requirements & Architecture',
    description: 'Analyzing functional specs, non-functional demands, data schemas, and edge cases before writing line 1 of code.',
    tools: ['Jira', 'Confluence', 'Swagger/OpenAPI', 'Mermaid Diagrams'],
    qaIntegration: 'Embed QA early: Define Acceptance Criteria and Testable Scenarios upfront.'
  },
  {
    step: 2,
    title: 'Design & Schema Definition',
    description: 'Designing RESTful interfaces, database schemas, idempotent keys, and decoupled microservice boundaries.',
    tools: ['Spring Boot', 'PostgreSQL', 'Docker', 'OpenAPI 3.0'],
    qaIntegration: 'API Contract Testing: Validate request/response payloads against specs.'
  },
  {
    step: 3,
    title: 'Clean Development',
    description: 'Writing maintainable, strongly typed Java/TypeScript code following SOLID principles and design patterns.',
    tools: ['Java 17', 'Spring Boot', 'React', 'TypeScript', 'Git'],
    qaIntegration: 'Unit Testing & TDD: Writing JUnit, Mockito, and React Testing Library suites.'
  },
  {
    step: 4,
    title: 'System Integration & API Testing',
    description: 'Exhaustive verification of end-to-end API flows, database persistence, and multi-vendor integrations.',
    tools: ['Postman / Newman', 'RestAssured', 'JMeter', 'SQL Verification'],
    qaIntegration: 'SIT Leadership: Executing positive, negative, and edge-case test matrices.'
  },
  {
    step: 5,
    title: 'Automated CI/CD Pipelines',
    description: 'Packaging containerized builds, running static analysis, and deploying automatically to target environments.',
    tools: ['GitLab CI', 'Jenkins', 'Docker', 'Kubernetes', 'Helm'],
    qaIntegration: 'Automated Gating: Pipeline fails immediately if regression tests fail.'
  },
  {
    step: 6,
    title: 'Production Deployment',
    description: 'Executing zero-downtime rolling updates with active health checks and instant rollback capabilities.',
    tools: ['Kubernetes', 'Argo CD', 'Linux', 'Production Verification'],
    qaIntegration: 'Sanity & Smoke Validation: Post-deployment verification on live endpoints.'
  },
  {
    step: 7,
    title: 'Monitoring & Continuous Polish',
    description: 'Observing metrics, tracking system logs, detecting anomalies, and refining performance over time.',
    tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Log Analysis'],
    qaIntegration: 'Feedback Loop: Feeding production edge cases back into test suites.'
  }
];

export const QA_PILLARS: QaPillar[] = [
  {
    title: 'Shift-Left Testing',
    description: 'Quality starts at requirement gathering and architecture design, preventing costly rework long before code reaches QA environments.',
    icon: 'ArrowLeftCircle',
    details: ['BBD & Acceptance Criteria Validation', 'API Contract Specification', 'Early Risk Identification']
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

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master's Degree in Project Management",
    institution: "American College of Technology (ACT)",
    location: "Addis Ababa, Ethiopia",
    details: "Advanced study in Enterprise Project Governance, Agile & Waterfall Methodologies, Quality Assurance Leadership, and Software Lifecycle Strategy."
  },
  {
    degree: "BSc Computer Science",
    institution: "Saint Mary's University",
    location: "Addis Ababa, Ethiopia",
    period: "2017 – 2021",
    details: "Core Foundation in Data Structures, Algorithms, Software Engineering, Database Management Systems, Computer Networks, and System Architecture."
  }
];
