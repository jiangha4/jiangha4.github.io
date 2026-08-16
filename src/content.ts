export const siteMeta = {
  title: 'David Jiang — Staff Data Platform Engineer',
  description:
    'Lead engineer on Jeter, Nike’s developer intelligence platform. Sets direction for the lakehouse, federated GraphQL, AI-tooling analytics, and the observability model behind it.',
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
  themesLine: 'lakehouse · GraphQL · AI-tooling analytics · observability',
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
    'I set technical direction for Jeter across four jobs: the Glue → Databricks lakehouse, a federated GraphQL API, AI-tooling analytics and governance, and the observability model behind a 99.9% availability SLO.',
    'Outcomes — production developer intelligence for 8,200+ people across six VP domains; Cursor and Copilot analytics that informed a $2.25M company-wide licensing decision; downstream consumers stayed online through the lakehouse move.',
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
        'Own Jeter end to end — lakehouse, federated GraphQL, AI-tooling analytics, and observability from 12+ enterprise sources through production operations.',
      caseStudyLinks: [
        { label: 'lakehouse migration', href: '#work-lakehouse' },
        { label: 'AI spend lakehouse', href: '#work-ai-coding-spend' },
      ],
      fields: [
        {
          label: 'platform ownership',
          value:
            'Own the Jeter roadmap and technical direction across 55+ repositories — ingestion, lakehouse ETL, multi-store serving, federated GraphQL, observability, infrastructure, and customer support. Mentor the team and break large initiatives into phased work.',
        },
        {
          label: 'lakehouse',
          value:
            'Set direction for Glue → Databricks (Unity Catalog, Delta Lake, Auto Loader, Delta Sharing) and TB-scale medallion ETL from 12+ enterprise sources into Neptune, DynamoDB, OpenSearch, and Aurora MySQL. Every downstream consumer stayed intact.',
        },
        {
          label: 'AI-tooling analytics',
          value:
            'Built production analytics and governance for Cursor and GitHub Copilot — adoption, token and model mix, spend reconciliation, budget scenarios, and chargeback. A $2.25M analysis across 5,740 users informed company-wide licensing.',
        },
        {
          label: 'developer intelligence',
          value:
            'Productionized identity resolution, repository ownership, DORA and pull-request metrics, and ML classification for 8,200+ people across six VP domains; Louvain community detection identified roughly 287 squads from collaboration graphs.',
        },
        {
          label: 'GraphQL',
          value:
            'Shipped a nine-subgraph AppSync merged API over Neptune, DynamoDB, and OpenSearch, plus Grafana dashboards, executive reports, and a React explorer so teams and AI agents can self-serve.',
        },
        {
          label: 'observability',
          value:
            'Operate the full production path from Step Functions and Spark jobs through graph and reporting stores. Designed unified tracing, logs, dashboards, and Git-provisioned alerts across 10+ subgraphs and Lambda services against a 99.9% availability SLO.',
        },
        {
          label: 'technical leadership',
          value:
            'Turn multi-quarter initiatives into phased roadmaps and acceptance criteria, mentor and onboard engineers, review changes across the platform, and build reusable agent runbooks for investigation, delivery, and access workflows.',
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
            'Tech-led a mixed team of up to six across the US, Poland, and South America. Owned quarterly planning, task breakdown, cross-time-zone delivery, engineering quality, and reporting to leadership.',
        },
        {
          label: 'Referee',
          value:
            'Designed and built Referee’s standalone experience for Spinnaker Kayenta automated canary analysis: canary configuration, retrospective analysis, and release reports for ECS and EC2 customer-facing applications.',
        },
        {
          label: 'Cerberus',
          value:
            'Owned Nike’s Spring Boot secrets service across AWS Commercial and AWS China, including the initial China rollout. Delivered secret containers, principal access, versioning, and audit workflows for internal platform teams.',
        },
        {
          label: 'Jeter foundation',
          value:
            'Led the foundational Workday and Active Directory pipelines, cross-source identity and organization models, and manager-level reporting that turned Jeter into the platform I now lead.',
        },
      ],
    },
    {
      id: 'future-state',
      kind: 'line',
      yearMark: '2019',
      yearEnd: '2020',
      node: 'hollow',
      line: 'Future State Consulting — Senior Software Engineer · Apr 2019 – Mar 2020 · onsite at Nike WHQ · built hardened Golden AMIs, Debian packages, and platform tooling that standardized secure, observable AWS deployments',
    },
    {
      id: 'beyondsoft',
      kind: 'line',
      yearMark: '2016',
      yearEnd: '2019',
      node: 'hollow',
      line: 'BeyondSoft — Software Engineer · Feb 2016 – Apr 2019 · onsite at HP · built Python automation frameworks and Bluetooth Raspberry Pi services to test the wireless networking stack',
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
