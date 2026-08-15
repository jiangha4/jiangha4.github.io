export const siteMeta = {
  title: 'David Jiang — Data Platform Engineer',
  description:
    'David Jiang is a data platform engineer and the lead engineer on Jeter, Nike’s developer intelligence platform. He owns TB-scale ingestion, medallion lakehouse ETL on Databricks and Glue, and a multi-store serving layer across Neptune, DynamoDB, OpenSearch, and Aurora MySQL.',
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
    '> data platform engineer',
    '> lead engineer, Jeter · Nike',
  ],
  proofLine:
    'TB-scale ingestion · Databricks lakehouse · production AI analytics',
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
  heading: 'Signal',
  paragraph:
    'David Jiang is a data platform engineer and the lead engineer on Jeter, Nike’s developer intelligence platform. He owns TB-scale ingestion, medallion lakehouse ETL on Databricks and Glue, and a multi-store serving layer across Neptune, DynamoDB, OpenSearch, and Aurora MySQL. He set technical direction for a Databricks lakehouse migration that kept downstream consumers intact, and built the production analytics that informed a $2.25M company-wide AI licensing decision.',
};

export interface WorkPanel {
  id: string;
  name: string;
  type: string;
  problem: string;
  built: string;
  outcome: string;
}

export const workPanels: WorkPanel[] = [
  {
    id: 'jeter',
    name: 'Jeter',
    type: 'developer intelligence platform (lead)',
    problem:
      'Nike needed a unified developer intelligence platform spanning ingestion, lakehouse ETL, multi-store serving, and federated GraphQL — with production observability and analytics at scale.',
    built:
      'Lead engineer across ingestion, lakehouse ETL, multi-store serving, federated GraphQL, and Grafana. Primary engineer across 55+ repositories; 270+ tickets in 10 months. TB-scale ingestion from 12+ enterprise sources (Lambda → Kinesis Firehose → S3 bronze → Spark silver/gold) into Neptune, DynamoDB, OpenSearch, and Aurora MySQL. Federated GraphQL on AWS AppSync (9 subgraphs, merged API). Observability across 10+ AppSync subgraphs and Lambda services (X-Ray, Lambda Powertools, CloudWatch, Grafana, alerting-as-code) targeting 99.9% availability.',
    outcome:
      'Productionized reporting for 8,200+ people across 6 VP domains (k-means + random forest classification, Louvain community detection, ~287 squads from Jira/GitHub graphs). Standardized agent workflows and CODEOWNERS across 36 repos.',
  },
  {
    id: 'lakehouse',
    name: 'Lakehouse migration',
    type: 'Glue → Databricks',
    problem:
      'GitHub, Workday, Active Directory, and Cursor ETL ran on AWS Glue — Nike needed a lakehouse migration without breaking downstream consumers.',
    built:
      'Designed and led technical planning to migrate GitHub, Workday, Active Directory, and Cursor ETL from AWS Glue to Databricks (Unity Catalog, Delta Lake, Auto Loader). Delta Sharing so Neptune, Aurora MySQL, OpenSearch, and DynamoDB consumers stayed intact with no API breaks.',
    outcome:
      'Owned build-vs-buy and phased decommission of Glue pipelines.',
  },
  {
    id: 'ai-analytics',
    name: 'AI tooling analytics',
    type: 'Cursor & GitHub Copilot',
    problem:
      'Leadership needed production analytics on AI tooling adoption, spend, and impact to inform company-wide licensing.',
    built:
      'End-to-end pipeline: adoption, token usage, model mix, AI code tracking, PR activity (bronze events → PySpark → MySQL → Grafana).',
    outcome:
      'Q1 2026 AI spend report: $2.25M across 5,740 users, with seat-cap scenario modeling that informed company-wide licensing.',
  },
  {
    id: 'referee-cerberus',
    name: 'Referee + Cerberus',
    type: 'production platform systems',
    problem:
      'Customer-facing revenue apps needed automated canary analysis; secrets management required a cross-region platform including AWS China.',
    built:
      'Referee: automated canary analysis for AWS ECS and EC2, used on customer-facing revenue apps. Cerberus: Java Spring Boot secrets manager spanning AWS Commercial and AWS China (including China rollout).',
    outcome:
      'Both systems operated in production across commercial and China regions.',
  },
];

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
      'Tech-led a mixed team of up to 6 (on-site FTEs, contractors, remote engineers in Poland and South America). Referee, Cerberus, foundational Jeter data work in 2025.',
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
