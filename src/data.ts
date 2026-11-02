export const profile = {
  name: "Raushan Kumar Jha",
  role: "Full Stack Developer",
  location: "Gurugram, Haryana, India",
  email: "raushankjha20@gmail.com",
  phone: "+91 7654096447",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  leetcode: "https://leetcode.com/",
  summary: "Full Stack Developer with 3+ years of experience designing and developing enterprise web applications using React.js, TypeScript, Node.js, Express.js, and PostgreSQL. Experienced in scalable REST APIs, JWT authentication, RBAC, multi-level approval workflows, SAP integrations, database optimization, and responsive frontend applications.",
};

export const experience = [
  {
    company: "BPAAS Solutions", title: "Software Developer", period: "Jan 2025 — Present",
    location: "Gurugram, Haryana",
    intro: "Building and maintaining enterprise workflow applications across travel, expense, gate pass, and vendor onboarding domains.",
    bullets: [
      "Developed and maintained Travel Expense & Reimbursement Management, Electronic Gate Pass (EGP/IGP), and Vendor Onboarding applications using React, TypeScript, Node.js, Express, and PostgreSQL.",
      "Helped reduce manual effort and processing time by 30–40% through workflow automation.",
      "Built REST APIs for travel claims, reimbursement processing, employee data, and multi-level approvals with business validations.",
      "Implemented JWT, role-based access control, Okta SSO, OTP verification, and password reset flows.",
      "Designed and optimized PostgreSQL schemas, queries, and indexes; delivered role-specific dashboards with React, Redux, and Material UI.",
      "Integrated SAP, HRMS, and third-party travel APIs including MakeMyTrip for employee/vendor data, purchase orders, travel booking, and goods movement."
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redux", "MUI", "Tailwind CSS", "SAP OData", "Okta"]
  },
  {
    company: "AlphaXloop", title: "Associate Software Engineer", period: "Jul 2023 — Dec 2024",
    location: "",
    intro: "Contributed to a multi-tenant SaaS workflow management platform for organizations to operate securely on a shared codebase.",
    bullets: [
      "Helped reduce maintenance overhead by 40% and simplify customer onboarding through multi-tenant platform development.",
      "Designed REST APIs for workflow execution, task assignment, and approval management with JWT, granular RBAC, and tenant-level data isolation.",
      "Improved workflow and reporting API performance using composite indexes, execution-plan analysis, and server-side pagination.",
      "Implemented Redis-backed background queues for email notifications, scheduled tasks, and workflow status updates.",
      "Built reusable React components with Redux Toolkit and applied lazy loading, memoization, and API request optimization."
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
  { title: "Data & Persistence", note: "Relational and document data", skills: ["PostgreSQL", "MongoDB", "Prisma", "Sequelize", "Mongoose", "Indexing", "SQL Optimization"] },
  { title: "Integrations & Tools", note: "Enterprise systems & delivery", skills: ["SAP OData", "Kafka", "Okta SSO", "Redis", "Docker", "Git", "GitHub Actions", "Postman"] }
];

export const education = {
  school: "ABES Engineering College",
  degree: "B.Tech in Information Technology",
  period: "Jul 2019 — Jul 2023",
  detail: "Ghaziabad, Uttar Pradesh · CGPA 7.15 / 10"
};

export const achievements = [
  "Solved 200+ coding problems across LeetCode, CodeChef, and HackerRank.",
  "Full Stack Web Development — Masai School (React.js, Node.js, MongoDB, PostgreSQL, REST APIs).",
  "Introduction to Networks — Cisco Networking Academy (TCP/IP, networking fundamentals, protocols)."
];