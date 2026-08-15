export const siteMeta = {
  title: 'David Jiang — Staff Data Platform Engineer',
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
  name: 'David Jiang',
  role: 'Staff data platform engineer',
  leadLine: 'lead on Jeter · Nike developer intelligence',
  themesLine: 'lakehouse + AI analytics',
  actions: [
    { label: 'work', target: 'work' },
    { label: 'contact', target: 'contact' },
  ],
};

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

export interface ExperienceField {
  label: string;
  value: string;
}

export interface ExperienceCaseStudyLink {
  label: string;
  href: string;
}

export interface ExperienceRailMark {
  year: string;
  sublabel?: string;
}

export interface ExperienceNikeIIIEntry {
  id: string;
  kind: 'nike-iii';
  yearMark: string;
  yearSublabel?: string;
  title: string;
  period: string;
  leadBeat: string;
  caseStudyLinks: ExperienceCaseStudyLink[];
}

export interface ExperienceNikeIIEntry {
  id: string;
  kind: 'nike-ii';
  yearMark: string;
  yearEnd?: string;
  title: string;
  period: string;
  fields: ExperienceField[];
}

export interface ExperienceLineEntry {
  id: string;
  kind: 'line';
  yearMark: string;
  yearEnd?: string;
  line: string;
}

export type ExperienceEntry =
  | ExperienceNikeIIIEntry
  | ExperienceNikeIIEntry
  | ExperienceLineEntry;

export const experienceContent = {
  rail: {
    startYear: 2016,
    endYear: 2026,
    marks: [
      { year: '2016' },
      { year: '2019' },
      { year: '2020' },
      { year: '2025' },
      { year: '2026', sublabel: 'present' },
    ] satisfies ExperienceRailMark[],
  },
  entries: [
    {
      id: 'nike-iii',
      kind: 'nike-iii',
      yearMark: '2026',
      yearSublabel: 'present',
      title: 'Nike · Software Engineer III, lead engineer, Jeter',
      period: 'Nov 2025 – present',
      leadBeat:
        'Sets technical direction for Jeter — lakehouse migration, multi-store serving architecture, and production AI analytics that informed company-wide licensing.',
      caseStudyLinks: [
        { label: 'lakehouse migration', href: '#work-lakehouse' },
        { label: 'AI spend lakehouse', href: '#work-ai-coding-spend' },
      ],
    },
    {
      id: 'nike-ii',
      kind: 'nike-ii',
      yearMark: '2020',
      yearEnd: '2025',
      title: 'Nike · Software Engineer II',
      period: 'Mar 2020 – Nov 2025',
      fields: [
        {
          label: 'team',
          value:
            'Mixed team of up to 6: on-site FTEs, contractors, remote engineers in Poland and South America; quarterly planning, work split across time zones.',
        },
        {
          label: 'Referee',
          value:
            'Automated canary analysis for AWS ECS and EC2 on customer-facing revenue apps.',
        },
        {
          label: 'Cerberus / China',
          value:
            'Java Spring Boot secrets manager spanning AWS Commercial and AWS China (including China rollout).',
        },
        {
          label: 'Jeter foundation',
          value:
            '2025: Workday/AD hierarchy, manager-level reporting, domain model that became the platform.',
        },
      ],
    },
    {
      id: 'future-state',
      kind: 'line',
      yearMark: '2019',
      yearEnd: '2020',
      line: 'Future State Consulting — Senior Software Engineer · Apr 2019 – Mar 2020 · onsite Nike WHQ',
    },
    {
      id: 'beyondsoft',
      kind: 'line',
      yearMark: '2016',
      yearEnd: '2019',
      line: 'BeyondSoft — Software Engineer · Feb 2016 – Apr 2019 · HP contractor',
    },
  ] satisfies ExperienceEntry[],
  educationRows: [
    'M.S. CS (Machine Learning), Portland State University',
    'B.S. CS, University of Toronto, St. George',
  ],
};

export const stackContent = {
  foldLabel: 'core stack · 11',
};

/** Hiring-relevant stack — fold list only, no ticker or chip wall. */
export const stackItems = [
  'Databricks',
  'Spark',
  'AWS Glue',
  'Kinesis',
  'Delta Lake',
  'Neptune',
  'DynamoDB',
  'OpenSearch',
  'AppSync',
  'Python',
  'SQL',
];

export const contactContent = {
  email: 'davidjiang.haohan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-jiang-48773b96',
  github: 'https://github.com/jiangha4',
  repoUrl: 'https://github.com/jiangha4/jiangha4.github.io',
};
