// gitprofile.config.js

const config = {
  github: {
    username: 'douglassimonsen', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 0, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'matthew-hamilton',
    stackoverflow: '6465644/matthew-hamilton',
    phone: '815-909-5745',
    email: 'mwhamilton6@gmail.com',
  },
  skills: [
    'AWS',
    'Azure',
    'Spark',
    'Python',
    'Terraform',
    'Postgres',
    'Redshift',
    'Snowflake',
    'Vue'
  ],
  experiences: [
    // {
    //   company: 'McKinsey & Company',
    //   position: 'Data Engineer II',
    //   from: 'October 2022',
    //   to: 'Present',
    //   companyLink: 'www.mckinsey.com',
    // },
    // {
    //   company: 'Slalom Consulting',
    //   position: 'Consultant (Data Engineering)',
    //   from: 'November 2021',
    //   to: 'October 2022',
    //   companyLink: 'www.slalom.com',
    // },
    // {
    //   company: 'Chicago Transit Authority',
    //   position: 'Senior Data Engineer',
    //   from: 'December 2020',
    //   to: 'November 2021',
    //   companyLink: 'www.transitchicago.com',
    // },
    // {
    //   company: 'Chicago Transit Authority',
    //   position: 'Data Scientist',
    //   from: 'October 2018',
    //   to: 'December 2020',
    //   companyLink: 'www.transitchicago.com',
    // },
    // {
    //   company: 'Chicago Transit Authority',
    //   position: 'Senior Analyst',
    //   from: 'July 2018',
    //   to: 'October 2018',
    //   companyLink: 'www.transitchicago.com',
    // },
    // {
    //   company: 'Chicago Transit Authority',
    //   position: 'Analyst',
    //   from: 'July 2017',
    //   to: 'July 2018',
    //   companyLink: 'www.transitchicago.com',
    // },
    // {
    //   company: 'Chicago Transit Authority',
    //   position: 'Intern',
    //   from: 'February 2016',
    //   to: 'July 2017',
    //   companyLink: 'www.transitchicago.com',
    // }
  ],
  certifications: [
    {
      name: 'AWS',
      body: 'Certified Solutions Architect - Associate',
      year: 'December 18, 2021'
    },
    {
      name: 'AWS',
      body: 'Certified Cloud Practitioner',
      year: 'December 3, 2021'
    },
    {
      name: 'Azure',
      body: 'Azure Fundamentals',
      year: 'January 12, 2022'
    },
    {
      name: 'Snowflake',
      body: 'SnowPro Core',
      year: 'February 21, 2022'
    },
  ],
  education: [
    // {
    //   institution: 'University of Chicago',
    //   degree: 'Mathematics B.Sc.',
    //   from: '2013',
    //   to: '2017',
    // },
  ],
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Redshift Uploader',
      description:
        'Utility to simplify copy-into commands for Redshift. Handles S3, table generation, etc.',
      imageUrl: '/src/assets/uploader.png',
      link: 'https://github.com/douglassimonsen/redshift_upload',
    },
    {
      title: 'Bus Tracker',
      description:
        'Implementation of Marey\'s String Chart using bus data',
      imageUrl: '/src/assets/bus.png',
      link: 'https://github.com/douglassimonsen/cta-tracker',
    },
    {
      title: 'Outlook Emailer',
      description:
        'Wrapper around exchangelib to provide a simple interface for sending emails',
      imageUrl: '/src/assets/email.png',
      link: 'https://github.com/douglassimonsen/outlook_emailer',
    },
    {
      title: 'Excel to HTML',
      description:
        'Converts Excel sheets/ranges to HTML using CSS1, allowing the results to be embedded in email bodies',
      imageUrl: '/src/assets/excel.png',
      link: 'https://github.com/douglassimonsen/excel_to_html',
    },
    {
      title: 'Reverse Polish Notation Parser',
      description:
        'Toy implementation of an RPN calculator using Lark for my mom',
      imageUrl: '/src/assets/rpn.png',
      link: 'https://github.com/douglassimonsen/reverse_polish_notation',
    },
    {
      title: 'Interruption Counter',
      description:
        'Vue app for counting and recording interruptions in a meeting. Now with a scoreboard!',
      imageUrl: '/src/assets/interruption.png',
      link: 'https://github.com/douglassimonsen/interruption_counter',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
