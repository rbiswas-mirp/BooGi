module.exports = {
  metadata: {
    name: 'IITM KB',
    short_name: 'IITM KB',
    description: 'A Student-made Knowledge Base for IITM Online B.Sc Degree',
    language: 'en',
    url: 'https://iitm-kb.vercel.app/',
    pathPrefix: '/',
    gaTrackingId: null,
    siteImage: null,
    favicon: '/assets/favicon.png',
    themeColor: '#',
  },
  header: {
    logo: '',
    logoLink: '/',
    helpUrl: '',
    links: [],
  },
  sidebar: {
    enabled: true,
    ignoreIndex: true,
    forcedNavOrder: [],
    expanded: [],
    groups: [],
    links: [],
    poweredBy: {},
  },

  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'IITM KB',
      short_name: 'IITM KB',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'minimal-ui',
      crossOrigin: 'anonymous',
    },
  },
  social: {
    facebook: '',
    github: '',
    gitlab: '',
    instagram: '',
    linkedin: '',
    mail: '',
    gmail: '',
    slack: '',
    twich: '',
    twitter: '',
    youtube: '',

    search: {
      enabled: true,
      indexName: 'docs',
      algoliaAppId: null,
      algoliaSearchKey: null,
      algoliaAdminKey: null,
      excerptSize: 20000,
      engine: 'localsearch',
      placeholder: 'Search',
      startComponent: 'icon', // 'input',
      debounceTime: 380,
      snippetLength: 23,
      hitsPerPage: 10,
      showStats: true,
      localSearchEngine: {
        encode: "advanced",
        tokenize: "full",
        threshold: 2,
        resolution: 30,
        depth: 20
      },
      pagination: {
        enabled: true,
        totalPages: 10,
        showNext: true,
        showPrevious: true,
      },
    },
    toc: {
      show: true,
      depth: 3,
    },
    previousNext: {
      enabled: true,
      arrowKeyNavigation: true,
    },
    scrollTop: true,
    showMetadata: true,
    propagateNetlifyEnv: true,
    pageProgress: {
      enabled: false,
      // includePaths: [],
      excludePaths: ['/'],
      height: 3,
      prependToBody: false,
      color: '#A05EB5',
    },
    mermaid: {
      language: 'mermaid',
      theme: 'dark', // default, dark, forest, neutral
      options: {}, // https://mermaidjs.github.io/#/mermaidAPI
      width: 300,
      height: 300,
    },
    rss: {
      enabled: true,
      showIcon: true,
      title: 'My RSS feed',
      copyright: '',
      webMaster: 'M',
      managingEditor: '',
      categories: ['GatsbyJS', 'Docs'],
      ttl: '60',
      matchRegex: '^/',
      outputPath: '/rss.xml',
      generator: 'gidocs',
    },
    darkMode: {
      enabled: true,
      default: false,
    },
    publishDraft: false,
    fullScreenMode: {
      enabled: false,
      hideHeader: true,
      hideToc: true,
      hideSidebar: true
    }
  },
};
