const adapter = require("gatsby-adapter-netlify").default

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  siteMetadata: {
    siteUrl: `https://santonastaso.me/`,
    name: 'Alex Santonastaso',
    title: `Alex Santonastaso - Software Engineer`,
    description: `Software Engineer · Full-Stack`,
    author: `Alex Santonastaso`,
    keywords: `Alex Santonastaso, software engineer, developer, portfolio, Python, TypeScript, automation, web development, React, Gatsby, FastAPI, AWS, Terraform, Supabase`,
    github: `https://github.com/nastaso`,
    linkedin: `https://www.linkedin.com/in/alex-santonastaso/`,
    resume: "/Alex-Santonastaso-CV.pdf",
    about: `Software Engineer with a background in Computer Science and Big Data Science. Experienced in building full-stack web applications, automation tools, and cloud infrastructure with Python, TypeScript, FastAPI, React, and AWS. Strong on APIs, cloud services, and DevOps practices. I enjoy solving real-world problems through efficient, maintainable code.`,
    email: "alex@santonastaso.me",
    projects: [
      {
        name: 'CloudCertPrep',
        description: 'Free AWS certification practice exam platform. React, Supabase.',
        link: 'https://cloudcertprep.io',
        featured: true,
      },
      {
        name: 'E-volve SecureAssess Results Automation',
        description: 'Windows tool that scrapes City & Guilds exam results. Python, Selenium.',
        link: 'https://github.com/nastaso/evolve-results-automation',
      },
      {
        name: 'Secure File Sharing',
        description: 'Full-stack secure file sharing with presigned uploads. FastAPI, AWS.',
        link: 'https://files.santonastaso.me',
        featured: true,
        sameTab: true,
      },
    ],
    experience: [
      {
        name: 'Intech Centre (NCS Partner)',
        description: 'Software Developer, Jun 2024 - Present',
        link: 'https://nationalcareers.service.gov.uk/',
      },
      {
        name: 'Queen Mary University of London',
        description: 'Lab Demonstrator, Sep 2023 - Apr 2024',
        link: 'https://www.qmul.ac.uk/',
      },
    ],
    skills: [
      {
        name: 'Languages & Tools',
        description: 'Python, TypeScript, JavaScript, PostgreSQL, Git',
      },
      {
        name: 'Backend & APIs',
        description: 'FastAPI, REST APIs, Selenium, Pandas, OpenPyXL, Supabase',
      },
      {
        name: 'Frontend & Web',
        description: 'React, Gatsby, TailwindCSS, HTML, CSS',
      },
      {
        name: 'Cloud & Infrastructure',
        description: 'AWS, Terraform, Docker, GitHub Actions, CI/CD',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect (SAA-C03)',
        description: 'In progress',
        link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      },
      {
        name: 'AWS Certified Cloud Practitioner (CLF-C02)',
        description: 'Mar 2026',
        link: 'https://www.credly.com/badges/a67cce3e-4833-4682-8e9e-314454333667/public_url',
      },
      {
        name: 'GitHub Foundations Certification',
        description: 'Jun 2025',
        link: 'https://www.credly.com/badges/a118c3e7-f2b4-4da2-91d4-60750ff091db/linked_in?t=sy0qai',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404/`, `/404.html`, `/dev-404-page/`],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          const isHome = path === '/';
          return {
            url: path,
            priority: isHome ? 1.0 : 0.5,
            changefreq: isHome ? 'weekly' : 'monthly',
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://santonastaso.me`,
        sitemap: `https://santonastaso.me/sitemap-index.xml`,
        policy: [
          {
            userAgent: `*`,
            allow: `/`,
            disallow: [`/404/`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Santonastaso - Software Engineer`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#06b6d4`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
        legacy: false,
      },
    },
  ],
}
