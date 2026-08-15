export const siteMeta = {
  title: 'David Jiang — Data Platform Engineer',
  description:
    'David Jiang is lead engineer on Jeter, Nike’s developer intelligence platform — TB-scale lakehouse ingestion, multi-store serving, and production AI analytics that informed a $2.25M company-wide licensing decision.',
  url: 'https://jiangha4.github.io/',
  ogImage: '/img/profile_picture.jpeg',
};

export const navItems = [
  { id: 'signal', label: 'signal' },
  { id: 'work', label: 'work' },
  { id: 'stack', label: 'stack' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
] as const;

export const heroContent = {
  bootLines: [
    '> identity.init()',
    '> DAVID JIANG',
    '> data platform engineer · Nike',
    '> lead engineer, Jeter — developer intelligence',
  ],
  proofLine:
    'Databricks lakehouse · TB-scale ingestion · production AI spend analytics',
  actions: [
    { label: 'work', target: 'work' },
    { label: 'contact', target: 'contact' },
  ],
};

export const scrollingLogs = [
  'ingest: bronze → silver → gold pipeline complete',
  'lakehouse.job: GitHub ETL migrated to Databricks',
  'graphql.resolver: federated merge — 9 subgraphs online',
  'slo.check: AppSync availability target 99.9%',
  'firehose.stream: Kinesis → S3 bronze layer',
  'delta.share: Neptune consumer sync intact',
  'spark.job: PySpark classification — 8,200+ users',
  'observability: X-Ray trace sampling enabled',
  'etl.cursor: token usage bronze events landed',
  'glue.decommission: phased Workday migration',
  'opensearch.index: serving layer refresh',
  'lambda.invoke: ingestion handler warm',
  'grafana.alert: SLO breach threshold armed',
  'unity.catalog: Delta Lake table registered',
  'appSync.subgraph: health check passed',
];

export const signalContent = {
  heading: 'signal',
  leadHeading: 'Jeter — developer intelligence platform',
  leadType: 'staff-scope data platform (lead engineer)',
  paragraphs: [
    'David Jiang is lead engineer on Jeter, Nike’s developer intelligence platform: TB-scale ingestion, medallion lakehouse ETL on Databricks and Glue, multi-store serving across Neptune, DynamoDB, OpenSearch, and Aurora MySQL, federated GraphQL on AWS AppSync, and production observability across AppSync subgraphs and Lambda services targeting 99.9% availability.',
    'Outcomes: productionized org-wide developer intelligence for 8,200+ people across six VP domains (k-means + random forest classification, Louvain community detection, ~287 squads from Jira/GitHub graphs); TB-scale ingestion from 12+ enterprise sources through Lambda → Kinesis Firehose → S3 bronze → Spark silver/gold; federated GraphQL merged API across nine subgraphs; standardized agent workflows and CODEOWNERS across 36 repos.',
  ],
};

export interface WorkPanel {
  id: string;
  name: string;
  type: string;
  problem: string;
  built: string;
  outcome: string;
}

/** Featured case studies only — not Jeter platform overview, not supporting systems. */
export const caseStudyPanels: WorkPanel[] = [
  {
    id: 'lakehouse',
    name: 'Glue → Databricks lakehouse migration',
    type: 'Unity Catalog · Delta Lake · Delta Sharing',
    problem:
      'GitHub, Workday, Active Directory, and Cursor ETL ran on AWS Glue. Nike needed a lakehouse migration without breaking Neptune, Aurora MySQL, OpenSearch, or DynamoDB consumers.',
    built:
      'Designed and led technical planning to migrate those pipelines to Databricks (Unity Catalog, Delta Lake, Auto Loader). Used Delta Sharing so every downstream store stayed intact — no API breaks.',
    outcome:
      'Owned build-vs-buy analysis and phased Glue decommission while keeping production consumers online.',
  },
  {
    id: 'ai-coding-spend',
    name: 'AI coding spend lakehouse',
    type: 'Cursor & GitHub Copilot',
    problem:
      'Leadership needed production-grade analytics on AI tooling adoption, token usage, model mix, AI code tracking, and PR activity to inform company-wide licensing.',
    built:
      'End-to-end lakehouse pipeline: bronze events → PySpark → MySQL → Grafana dashboards for adoption, spend, and scenario modeling.',
    outcome:
      'Q1 2026 AI spend report: $2.25M across 5,740 users, with seat-cap scenario modeling that informed company-wide licensing.',
  },
];

export const reservedWorkPanel = {
  id: 'flagship-reserved',
  chrome: '// spec forthcoming',
  label: 'flagship case study — reserved',
  note: 'Reserved for a future public flagship write-up of the AI coding spend lakehouse.',
};

export const supportingSystems = {
  heading: 'supporting systems',
  blurb:
    'Referee — automated canary analysis for AWS ECS and EC2 on customer-facing revenue apps. Cerberus — Java Spring Boot secrets manager spanning AWS Commercial and AWS China (including China rollout). Prior production platform work; not the public flagship story.',
};

export const stackItems = [
  'Databricks',
  'Unity Catalog',
  'Delta Lake',
  'Auto Loader',
  'Delta Sharing',
  'Spark / PySpark',
  'AWS Glue',
  'Kinesis',
  'Lambda',
  'Step Functions',
  'EventBridge',
  'S3',
  'Neptune',
  'DynamoDB',
  'OpenSearch',
  'Aurora MySQL',
  'Snowflake',
  'Athena',
  'AppSync',
  'GraphQL',
  'X-Ray',
  'Grafana',
  'CloudWatch',
  'SAM / CloudFormation',
  'Docker',
  'Jenkins',
  'GitHub Actions',
  'Python',
  'SQL',
  'Java',
  'Scala',
  'JavaScript',
];

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  details?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'nike-iii',
    organization: 'Nike',
    role: 'Software Engineer III, lead engineer, Jeter',
    period: 'Nov 2025 – present',
  },
  {
    id: 'nike-ii',
    organization: 'Nike',
    role: 'Software Engineer II',
    period: 'Mar 2020 – Nov 2025',
    details:
      'Tech-led a mixed team of up to 6 (on-site FTEs, contractors, remote engineers in Poland and South America). Built Referee and Cerberus; foundational Jeter data platform work in 2025.',
  },
  {
    id: 'future-state',
    organization: 'Future State Consulting',
    role: 'Senior Software Engineer',
    period: 'Apr 2019 – Mar 2020',
    details:
      'Onsite at Nike WHQ. Golden AMIs, Debian packages, internal platform tools.',
  },
  {
    id: 'beyondsoft',
    organization: 'BeyondSoft',
    role: 'Software Engineer',
    period: 'Feb 2016 – Apr 2019',
    details:
      'Onsite contractor for HP. Python automation, Raspberry Pi Bluetooth/Wi-Fi testing.',
  },
];

export const educationEntries = [
  {
    degree: 'M.S. Computer Science (Machine Learning)',
    institution: 'Portland State University',
  },
  {
    degree: 'B.S. Computer Science',
    institution: 'University of Toronto, St. George',
  },
];

export const contactContent = {
  email: 'davidjiang.haohan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-jiang-48773b96',
  github: 'https://github.com/jiangha4',
  repoUrl: 'https://github.com/jiangha4/jiangha4.github.io',
};
