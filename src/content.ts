export const siteMeta = {
  title: 'David Jiang — Staff Data Platform Engineer',
  description:
    'Lead engineer on Jeter, Nike’s developer intelligence platform. Sets direction for TB-scale lakehouse ingestion, multi-store serving, and the production AI analytics that informed a $2.25M licensing decision.',
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
  leadLine: 'lead engineer, Jeter · Nike developer intelligence',
  themesLine: 'I set direction — lakehouse, serving, $2.25M AI licensing',
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
    'I set technical direction for Jeter: the Glue → Databricks lakehouse move, TB-scale ingestion, multi-store serving, federated GraphQL, and the observability model behind a 99.9% availability SLO.',
    'Outcomes — production developer intelligence for 8,200+ people across six VP domains; AI coding analytics that informed a $2.25M company-wide licensing decision; downstream consumers stayed online through the migration.',
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
      'GitHub, Workday, Active Directory, and Cursor ETL ran on AWS Glue. The lakehouse move could not break Neptune, Aurora MySQL, OpenSearch, or DynamoDB consumers.',
    built:
      'Set technical direction for Databricks — Unity Catalog, Delta Lake, Auto Loader — and used Delta Sharing so every downstream store stayed intact.',
    outcome:
      'Owned build-vs-buy and the phased Glue decommission. Production consumers never went dark.',
  },
  {
    id: 'ai-coding-spend',
    name: 'AI coding spend lakehouse',
    type: 'Cursor & GitHub Copilot',
    problem:
      'Leadership needed production analytics on AI tooling — adoption, tokens, model mix, AI-written code, PR activity — to decide company-wide licensing.',
    built:
      'Directed the lakehouse path from bronze events through PySpark into serving and Grafana, including seat-cap scenario modeling.',
    outcome:
      'Q1 2026 report: $2.25M across 5,740 users. That number drove the licensing decision.',
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
  node: 'filled' | 'hollow';
  heavy?: boolean;
}

export interface ExperienceNikeIIIEntry {
  id: string;
  kind: 'nike-iii';
  yearMark: string;
  node: 'filled';
  title: string;
  period: string;
  leadBeat: string;
  caseStudyLinks: ExperienceCaseStudyLink[];
  fields: ExperienceField[];
}

export interface ExperienceNikeIIEntry {
  id: string;
  kind: 'nike-ii';
  yearMark: string;
  yearEnd?: string;
  node: 'filled';
  heavy: true;
  title: string;
  period: string;
  fields: ExperienceField[];
}

export interface ExperienceLineEntry {
  id: string;
  kind: 'line';
  yearMark: string;
  yearEnd?: string;
  node: 'hollow';
  line: string;
}

export type ExperienceEntry =
  | ExperienceNikeIIIEntry
  | ExperienceNikeIIEntry
  | ExperienceLineEntry;

export const experienceContent = {
  railMarks: [
    { year: '2025', node: 'filled' },
    { year: '2020', node: 'filled', heavy: true },
    { year: '2019', node: 'hollow' },
    { year: '2016', node: 'hollow' },
  ] satisfies ExperienceRailMark[],
  entries: [
    {
      id: 'nike-iii',
      kind: 'nike-iii',
      yearMark: '2025',
      node: 'filled',
      title: 'Nike · Software Engineer III, lead engineer, Jeter',
      period: 'Nov 2025 – present',
      leadBeat:
        'Sets technical direction for Jeter — lakehouse, serving, and the AI analytics that informed company-wide licensing.',
      caseStudyLinks: [
        { label: 'lakehouse migration', href: '#work-lakehouse' },
        { label: 'AI spend lakehouse', href: '#work-ai-coding-spend' },
      ],
      fields: [
        {
          label: 'direction',
          value:
            'Own technical direction across ingestion, lakehouse ETL, multi-store serving, federated GraphQL, and observability. Owned the Glue → Databricks build-vs-buy and decommission plan.',
        },
        {
          label: 'ingestion',
          value:
            'Architected TB-scale ingestion from 12+ enterprise sources (Lambda → Kinesis Firehose → S3 bronze → Spark silver/gold) into Neptune, DynamoDB, OpenSearch, and Aurora MySQL.',
        },
        {
          label: 'observability',
          value:
            'Designed the unified observability stack across 10+ AppSync subgraphs and Lambda services (X-Ray, Lambda Powertools, CloudWatch, Grafana) against a 99.9% availability SLO.',
        },
        {
          label: 'GraphQL',
          value:
            'Shipped a federated GraphQL merged API on AWS AppSync (9 subgraphs) backed by DynamoDB, Neptune, and OpenSearch so teams and agents self-serve.',
        },
        {
          label: 'analytics',
          value:
            'Productionized reporting for 8,200+ people across six VP domains (k-means + random forest, Louvain, ~287 squads from Jira/GitHub graphs), plus the Cursor/Copilot spend layer.',
        },
      ],
    },
    {
      id: 'nike-ii',
      kind: 'nike-ii',
      yearMark: '2020',
      yearEnd: '2025',
      node: 'filled',
      heavy: true,
      title: 'Nike · Software Engineer II',
      period: 'Mar 2020 – Nov 2025',
      fields: [
        {
          label: 'team',
          value:
            'Tech-led a team of up to 6 — on-site FTEs, on-site contractors, and remote engineers in Poland and South America. Owned quarterly planning, work split across time zones, and reporting to leadership.',
        },
        {
          label: 'Referee',
          value:
            'Designed and built Referee, the standalone UI for Spinnaker Kayenta automated canary analysis (ACA). Canary config, retrospective analysis, and report viewing for ECS and EC2 releases on customer-facing revenue apps.',
        },
        {
          label: 'Cerberus',
          value:
            'Owned Cerberus, Nike’s Spring Boot secrets service — Safe Deposit Boxes, principal-to-SDB access, versioning and audit. Ran it across AWS Commercial and AWS China, including the initial China rollout.',
        },
        {
          label: 'Jeter foundation',
          value:
            'In 2025, led the foundational Jeter data work: Workday and AD hierarchy, manager-level reporting, and the domain model. That work became the platform I now lead.',
        },
      ],
    },
    {
      id: 'future-state',
      kind: 'line',
      yearMark: '2019',
      yearEnd: '2020',
      node: 'hollow',
      line: 'Future State Consulting — Senior Software Engineer · Apr 2019 – Mar 2020 · onsite Nike WHQ · Golden AMIs and platform tooling',
    },
    {
      id: 'beyondsoft',
      kind: 'line',
      yearMark: '2016',
      yearEnd: '2019',
      node: 'hollow',
      line: 'BeyondSoft — Software Engineer · Feb 2016 – Apr 2019 · HP contractor · wireless-stack test automation',
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
