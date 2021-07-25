module.exports = {
  base: '/',
  lang: 'en-US',
  title: 'Collaboration',
  description: 'Documentation for Collaboration plugin.',


  themeConfig: {
    repo: 'oxyrealm/collaboration-docs',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Download Collaboration', link: 'https://go.oxyrealm.com/collaboration' },
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
      {
        text: 'Release Notes',
        link: 'https://dplugins.com/products/collaboration/?changelog=1'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          children: [
            { text: 'Why Collaboration?', link: '/guide/why' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            
          ]
        },
      ],
    }
  }
}
