export const profile = {
  name: "Raushan Kumar Jha",
  role: "Full Stack Developer",
  location: "Gurugram, Haryana, India",
  email: "raushankjha20@gmail.com",
  phone: "+91 7654096447",
  linkedin: "https://www.linkedin.com/in/raushan-k-jha/",
  github: "https://github.com/Raushankjha",
  leetcode: "https://leetcode.com/u/Jha_raushan/",
  summary: "Full Stack Developer with 3+ years of experience designing and developing enterprise web applications using React.js, TypeScript, Node.js, Express.js, and PostgreSQL. Experienced in building scalable RESTful APIs, implementing JWT authentication, RBAC, and multi-level approval workflows. Skilled in SAP integrations, database optimization, and developing responsive, high-performance frontend applications. Proficient in delivering end-to-end features across multi-tenant SaaS platforms and enterprise workflow management systems.",
};

export const experience = [
  {
    company: "BPAAS Solutions", title: "Software Developer", period: "Jan 2025 — Oct 2026",
    location: "Gurugram, Haryana",
    intro: "Developed and maintained enterprise workflow applications across travel, expense, gate pass, and vendor onboarding domains.",
    bullets: [
      "Developed and maintained three enterprise applications—Travel Expense & Reimbursement Management, Electronic Gate Pass (EGP/IGP), and Vendor Onboarding—using React.js, TypeScript, JavaScript, Node.js, Express.js, and PostgreSQL, reducing manual effort and processing time by 30–40% through workflow automation.",
      "Designed RESTful APIs for travel claims, reimbursement processing, employee data management, and multi-level approval workflows, implementing business validations to improve process efficiency and reduce manual intervention.",
      "Implemented JWT authentication, role-based access control (RBAC), Okta SSO, OTP verification, and password reset functionality, strengthening application security and simplifying user access management across enterprise applications.",
      "Designed and optimized PostgreSQL schemas, queries, and indexes and built role-specific dashboards using React.js, Redux, and Material UI, improving data accessibility, expense tracking, and approval visibility for business stakeholders.",
      "Improved application performance and maintainability through lazy loading, reusable React components, code optimization, and Core Web Vitals improvements, delivering responsive and scalable user interfaces.",
      "Integrated SAP, HRMS, and third-party travel APIs (MakeMyTrip) to synchronize employee and vendor data, retrieve purchase orders, and streamline travel booking and goods movement processes; developed responsive interfaces using Tailwind CSS and Material UI."
    ],
    stack: ["React.js", "TypeScript", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Redux", "Material UI", "Tailwind CSS", "SAP OData / RFC", "Okta SSO", "Core Web Vitals"]
  },
  {
    company: "AlphaXloop", title: "Associate Software Engineer", period: "Jul 2023 — Dec 2024",
    location: "",
    intro: "Developed a multi-tenant SaaS workflow management platform enabling multiple organizations to operate on a shared codebase.",
    bullets: [
      "Developed a multi-tenant SaaS platform enabling multiple organizations to operate on a single codebase, reducing maintenance overhead by 40% and simplifying customer onboarding and business scaling.",
      "Designed RESTful APIs for workflow execution, task assignment, and approval management, implementing JWT authentication, granular RBAC, and tenant-level data isolation to enforce secure access across organizations.",
      "Optimized PostgreSQL queries using composite indexes, execution-plan analysis, and server-side pagination to improve response times for workflow and reporting endpoints.",
      "Implemented asynchronous background processing using Redis-backed job queues for email notifications, scheduled tasks, and workflow status updates, reducing blocking operations in API request handling.",
      "Developed reusable React components with Redux Toolkit for centralized state management, applying lazy loading, memoization, and API request optimization to improve dashboard responsiveness."
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Redux Toolkit"]
  }
];

export const projects = [
  {
    name: "Travel Expense & Reimbursement Management",
    type: "Enterprise Workflow",
    description: "An enterprise solution for travel requests, bookings, expense claims, reimbursement processing, and multi-level approvals.",
    details: ["Travel and reimbursement workflows", "Role-based dashboards and approval visibility", "Third-party travel API integration (MakeMyTrip)", "HRMS and employee data synchronization"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    featured: true
  },
  {
    name: "Electronic Gate Pass (EGP / IGP)",
    type: "Enterprise Operations",
    description: "A digital gate-pass workflow supporting goods movement processes and operational approvals.",
    details: ["EGP / IGP gate-pass process", "SAP and purchase-order integration", "Workflow validations and access controls"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "SAP OData"],
    featured: false
  },
  {
    name: "Vendor Onboarding",
    type: "Enterprise Workflow",
    description: "A streamlined vendor onboarding experience with structured data capture, validation, and enterprise integration.",
    details: ["Vendor onboarding flows", "Role-specific access", "SAP / HRMS data integration"],
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Material UI"],
    featured: false
  },
  {
    name: "Multi-Tenant SaaS Workflow Platform",
    type: "SaaS Platform",
    description: "A multi-organization workflow platform built around tenant isolation, task assignment, approvals, and background processing.",
    details: ["Tenant-level data isolation and granular RBAC", "Workflow execution and task assignment APIs", "Redis-backed jobs and notifications", "Server-side pagination and query optimization"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis"],
    featured: true
  }
];

export const skillGroups = [
  { title: "Frontend", note: "Responsive interfaces & state management", skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "Tailwind CSS"] },
  { title: "Backend", note: "APIs, security & service design", skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "Middleware Design", "JWT", "OAuth 2.0", "RBAC"] },
  { title: "Data & Persistence", note: "Relational and document data", skills: ["SQL", "PostgreSQL", "MongoDB", "Prisma", "Sequelize", "Mongoose", "SQL Query Optimization", "Database Indexing"] },
  { title: "Integrations & Tools", note: "Enterprise systems & delivery", skills: ["SAP OData / RFC", "AWS", "Kafka", "Okta SSO", "Redis", "Docker", "Git", "GitHub", "GitHub Actions", "Postman"] }
];

export const coreConcepts = [
  "Java",
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Object-Oriented Programming",
  "Computer Networks",
  "API Design",
  "Authentication & Authorization",
  "Performance Optimization",
];

export const softSkills = [
  "Communication",
  "Collaboration",
  "Problem-solving",
  "Adaptability",
  "Ownership",
];

export const education = {
  school: "ABES Engineering College",
  degree: "Bachelor of Technology in Information Technology",
  period: "Jul 2019 — Jul 2023",
  detail: "Ghaziabad, Uttar Pradesh · CGPA 7.15 / 10"
};

export const achievements = [
  "Solved 200+ coding problems across LeetCode, CodeChef, and HackerRank.",
  "Full Stack Web Development — Masai School (React.js, Node.js, Express.js, MongoDB).",
  "Introduction to Networks — Cisco Networking Academy (TCP/IP, networking fundamentals, protocols)."
];