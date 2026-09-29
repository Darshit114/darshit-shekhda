// Everything visible on the site lives here. Edit this file, push, and the site updates.

export const site = {
  name: 'Darshit Shekhda',
  title: 'Java and cloud backend consultant',
  email: 'darshitpatel114@gmail.com',
  linkedin: 'https://www.linkedin.com/in/darshit-shekhda',
  location: 'Gujarat, India. Works remotely, IST (UTC+5:30).',

  // Optional. Add a number such as '+91 98765 43210' to show it on the site. Leave empty to hide it.
  phone: '',
  replyWithin: 'two working days',
}

export const hero = {
  headline: 'I build and run Java backends on Kubernetes.',
  lede:
    'Independent consultant with 5+ years of experience in reactive Spring Boot services, event-driven systems and AWS EKS. I help small engineering teams ship a reliable backend, get it into the cloud, and see what it is doing in production.',
  primaryCta: 'Start a conversation',
  secondaryCta: 'See past work',
  facts: ['Java 21', 'Spring Boot WebFlux', 'Kubernetes and Amazon EKS', 'Kafka, SQS and NATS', 'Grafana and Prometheus'],
}

export const services = [
  {
    title: 'Backend platforms and APIs',
    text: 'Reactive Spring Boot services and shared frameworks, so each new microservice starts from a working base instead of a blank project.',
  },
  {
    title: 'Kubernetes and AWS delivery',
    text: 'Containerize with Docker, deploy to EKS, and set up scaling, rollouts and day-to-day cluster operations your team can own.',
  },
  {
    title: 'Observability and monitoring costs',
    text: 'Move from an expensive monitoring vendor to Grafana and Prometheus, with clearer service health and a smaller bill.',
  },
  {
    title: 'Move to event-driven architecture',
    text: 'Break a tightly coupled system into services that talk through queues and events, using SQS, Lambda, Kafka or NATS.',
  },
  {
    title: 'Search and data pipelines',
    text: 'Ingest content from partners, process it on a schedule with Spring Batch, and index it in Solr so search actually finds things.',
  },
  {
    title: 'Testing and faster delivery',
    text: 'Unit and integration suites that run against real databases with Testcontainers, plus AI-assisted workflows with Claude Code and GitHub Copilot.',
  },
]

export const work = [
  {
    title: 'Market data platform',
    client: 'Global financial data provider',
    stack: ['Java 21', 'Spring Boot WebFlux', 'Hibernate', 'Redis', 'Docker', 'Amazon EKS', 'Grafana', 'Prometheus'],
    problem:
      'Many teams needed to publish different kinds of market data to downstream consumers, and each was rebuilding the same integration work.',
    did: [
      'Designed a common backend platform and core framework in Java 21 so new microservices can onboard and publish datasets quickly.',
      'Used Spring Boot WebFlux to handle high volumes of concurrent requests with better throughput and lower latency.',
      'Led the observability migration from Datadog to Grafana and Prometheus.',
      'Containerized the services and ran them on Amazon EKS, covering scaling, rollouts and cluster operations.',
    ],
    result:
      'Less duplicated integration work across teams, better visibility into service health, and lower monitoring costs.',
  },
  {
    title: 'Legal search engine',
    client: 'Legal publishing company',
    stack: ['Spring Boot', 'Spring Batch', 'SQS', 'AWS Lambda', 'MS SQL Server', 'Solr', 'Docker', 'JUnit'],
    problem:
      'An existing system had to move to an event-driven design, and content from many third-party publishers had to become searchable.',
    did: [
      'Migrated the existing system to an event-driven architecture.',
      'Built the microservice that processes legal content, creates Solr documents and exports them for search.',
      'Wrote scheduled Spring Batch jobs and tailored the processing steps for each publisher.',
      'Covered the service with unit and integration tests running on Testcontainers, so tests behave like production.',
    ],
    result: 'Better search functionality for the product and a repeatable way to onboard new content publishers.',
  },
  {
    title: 'Vehicle damage report platform',
    client: 'Automotive services company',
    stack: ['Spring Boot', 'MongoDB', 'MySQL', 'NATS', 'Docker', 'Kubernetes', 'JUnit'],
    problem:
      'A platform with complex business workflows needed to stay stable at scale and produce accurate prices for used vehicles.',
    did: [
      'Managed the dynamic orchestration of the backend so complex workflows kept running reliably.',
      'Integrated third-party tools that supply residual and depreciation values for used vehicles.',
      'Built automated jobs that publish listings for pre-owned vehicles.',
    ],
    result: 'More accurate pricing data and an automated path into the company\u2019s aftermarket reselling operations.',
  },
]

export const steps = [
  { title: 'Intro call', text: 'A free 30-minute call to understand your system, your team and what is going wrong or missing.' },
  { title: 'Scoped proposal', text: 'A short written plan with deliverables, timeline and price. No surprises later.' },
  { title: 'Build in small steps', text: 'Working increments you can review, with regular updates and code in your repository from day one.' },
  { title: 'Handover', text: 'Documentation, a walkthrough for your team, and optional support after launch.' },
]

export const engagements = [
  { title: 'Fixed-scope project', text: 'A defined outcome, such as a service, a migration or a deployment setup, for an agreed price.' },
  { title: 'Ongoing retainer', text: 'A set number of hours each month for your team to draw on for design, reviews and hands-on work.' },
  { title: 'Architecture and code review', text: 'A focused look at your design or codebase, ending with clear written recommendations.' },
]

export const stack = [
  { group: 'Languages and frameworks', items: ['Java', 'Spring Boot', 'Spring WebFlux', 'Spring Batch', 'JPA', 'Hibernate'] },
  { group: 'Data and search', items: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'MongoDB', 'Redis', 'Solr'] },
  { group: 'Messaging and cloud', items: ['Kafka', 'NATS', 'AWS SQS', 'AWS Lambda', 'Amazon EKS', 'Docker', 'Kubernetes'] },
  { group: 'Monitoring and tooling', items: ['Grafana', 'Prometheus', 'Datadog', 'Git', 'Maven', 'JUnit', 'Claude Code', 'GitHub Copilot'] },
]

export const about = {
  paragraphs: [
    'I am a backend engineer with a B.Tech in Computer Engineering and more than five years of experience building distributed systems and cloud-native applications. Most of that time has gone into Java and Spring Boot, and into running the containers those services live in.',
    'I have worked on a financial data platform, a legal search product and a vehicle remarketing platform. The common thread is systems that have to keep working while many things happen at once.',
    'I use AI coding tools every day. They take care of routine code, which leaves more of my time for the design decisions that decide whether a system holds up.',
  ],
}
