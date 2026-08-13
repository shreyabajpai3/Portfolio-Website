export const profile = {
  name: 'Shreya Bajpai',
  role: 'Data Analyst | Business Intelligence',
  location: 'Bengaluru, India',
  email: 'shreyyabajpai@gmail.com',
  github: 'https://github.com/shreyabajpai3',
  linkedin: 'https://www.linkedin.com/in/shreya-bajpai-4a657137a/',
  resume: '/Shreya_Bajpai_Resume.pdf',
  availability: 'Available to join full-time immediately for Data or Business Analyst / BI opportunities',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const metrics = [
  { value: '100K+', label: 'E-Commerce orders analyzed' },
  { value: '51K+', label: 'Sales records analyzed' },
  { value: '30+', label: 'SQL queries developed' },
  { value: '6', label: 'Power BI dashboard pages' },
  { value: 'AI', label: 'Powered business insights' },
]

export type CaseStudyBlock = {
  heading: string
  body?: string
  points?: string[]
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  metrics: { value: string; label: string }[]
  technologies: string[]
  github: string
  dashboard?: string
  caseStudy: CaseStudyBlock[]
}

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Business Insights — SQL & Power BI',
    category: 'SQL · Power BI · DAX · Business Intelligence',
    description:
      'Built an end-to-end e-commerce analytics solution analyzing 100K+ orders to uncover financial, customer, product, payment and delivery insights.',
    metrics: [
      { value: '100K+', label: 'orders' },
      { value: '30+', label: 'SQL queries' },
      { value: '3', label: 'dashboard pages' },
    ],
    technologies: [
      'SQL Server',
      'SSMS',
      'Power BI',
      'DAX',
      'Power Query',
      'GitHub',
    ],
    github: 'https://github.com/shreyabajpai3/E-Commerce',
    dashboard: 'https://github.com/shreyabajpai3/E-Commerce',
    caseStudy: [
      {
        heading: 'Business Problem',
        body: 'A growing e-commerce operation needed a single, trustworthy view of performance across finance, customers, products, payments and delivery. Raw transactional data across 100,000+ orders lived in disconnected tables, making it hard to answer basic decision-support questions about revenue drivers, delivery reliability and payment behaviour.',
      },
      {
        heading: 'Approach',
        points: [
          'Modelled the raw order, customer, payment and delivery tables into a clean, query-ready schema in SQL Server.',
          'Wrote 30+ SQL queries grouped into Finance, Customer, Product, Order & Delivery and Business Performance analytics.',
          'Shaped and cleaned the data in Power Query before building the reporting layer in Power BI.',
          'Designed a 3-page interactive dashboard with DAX measures for KPIs and trend analysis.',
        ],
      },
      {
        heading: 'SQL Analysis',
        body: 'Used CTEs, Window Functions, Ranking Functions, Joins, CASE statements and Subqueries to derive business insights — from ranking top products and customers to calculating running revenue totals and delivery performance segments.',
      },
      {
        heading: 'Power BI Dashboard',
        points: [
          'KPI cards for revenue, orders, average delivery time and delivery success rate.',
          'Interactive slicers for time period, category and region.',
          'Decomposition Tree to break revenue down across dimensions.',
          'Key Influencers to surface what drives high-value orders.',
        ],
      },
      {
        heading: 'AI-Powered Analytics',
        body: "Leveraged Power BI's AI visuals — Key Influencers and the Decomposition Tree — alongside AI-assisted revenue insights to automatically highlight the factors most associated with revenue and order value, without manual hypothesis testing.",
      },
      {
        heading: 'Key Insights',
        points: [
          '97% of orders were delivered successfully, with an average delivery time of ~12 days.',
          'Credit card payments drove ~78% of total revenue (~R$16M across ~76,800 transactions).',
          'Revenue and order concentration varied sharply by product category and region.',
        ],
      },
      {
        heading: 'Business Impact',
        body: 'The dashboard turns 100K+ raw orders into a decision-support tool: stakeholders can quickly see where revenue comes from, monitor delivery reliability and understand payment mix — supporting clearer, faster business decisions.',
      },
      {
        heading: 'Technologies Used',
        points: [
          'SQL Server & SSMS',
          'Power BI & DAX',
          'Power Query',
          'GitHub for version control',
        ],
      },
    ],
  },
  {
    id: 'sales',
    title: 'Sales Analytics Dashboard',
    category: 'Python · Power BI · Data Analytics',
    description:
      'Built a sales analytics project using Python and Power BI to clean, analyze, and visualize 51K+ sales records, uncovering insights across sales, profit, customers, products, regions, and shipping.',
    metrics: [
      { value: '51K+', label: 'Records analyzed' },
      { value: '20+', label: 'Business analyses' },
      { value: '3', label: 'Power BI dashboard pages' },
    ],
    technologies: ['Python','Pandas','Jupyter Notebook','Power BI', 'DAX', 'Data Cleaning'],
    github: 'https://github.com/shreyabajpai3/Sales-Analytics-Dashboard',
    dashboard: 'https://github.com/shreyabajpai3/Sales-Analytics-Dashboard',
    caseStudy: [
      {
        heading: 'Business Problem',
        body: 'A retail sales dataset of 51K+ records and 21 business attributes needed to be turned into a clear picture of what drives sales and profit — across products, customers, regions and shipping — to support data-driven decisions.',
      },
      {
        heading: 'Business Questions',
        points: [
          'Which products and categories generate the most sales and profit?',
          'How do revenue and profit trend over time?',
          'Which regions and customer segments are most valuable?',
          'How efficient is shipping, and where does it affect profitability?',
        ],
      },
      {
        heading: 'Sales & Profit Analysis',
        body: 'Analyzed overall sales and profit trends, profit margins and month-over-month performance to identify the periods and segments contributing most to the bottom line.',
      },
      {
        heading: 'Product & Category Performance',
        body: 'Ranked products and categories by sales and profitability to separate high-volume, low-margin lines from the products that actually drive profit.',
      },
      {
        heading: 'Regional Analysis',
        body: 'Broke revenue and profit down by region to reveal geographic concentration and under-performing markets.',
      },
      {
        heading: 'Customer Analysis',
        body: 'Segmented customers and identified the highest-value accounts to inform retention and targeting priorities.',
      },
      {
        heading: 'Shipping Analysis',
        body: 'Assessed shipping performance and its relationship to profitability, highlighting where delivery choices erode margin.',
      },
      {
        heading: 'Technologies Used',
        points: ['Python','Pandas','Jupyter Notebook','Power BI', 'Data Modeling', 'Data Cleaning & EDA'],
      },
    ],
  },
]

export const skillGroups = [
  {
    title: 'SQL & Database',
    skills: [
      'SQL',
      'SQL Server',
      'SSMS',
      'Joins',
      'CTEs',
      'Subqueries',
      'Window Functions',
    ],
  },
  {
    title: 'Business Intelligence',
    skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'KPI Design'],
  },
  {
    title: 'Analytics',
    skills: [
      'Business Analysis',
      'Data Cleaning',
      'Exploratory Analysis',
      'Trend Analysis',
      'Customer Analysis',
      'Product Analysis'
    ],
  },
  {
    title: 'Programming & Tools',
    skills: ['Python', 'NumPy', 'Jupyter Notebook','Git', 'GitHub', 'Excel'],
  },
]

export const education = [
  {
    degree: 'B.Sc. (Hons) in Mathematics',
    institution: 'M S Ramaiah University of Applied Sciences',
    period: '2021 — 2024',
    detail:
      'Strong foundation in quantitative reasoning, statistics and logical problem-solving — directly applicable to data analysis and pattern identification.',
  },
]
