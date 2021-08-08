module.exports = {
  base: '/',
  lang: 'en-US',
  title: 'Collaboration',
  description: 'Oxygen Editor Multi User and Multi Tab Editing support',

  head: [
    ['meta', { property: 'og:title', content: 'Collaboration for Oxygen Editor' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://i1.wp.com/i.ytimg.com/vi/q51xhGxTk5k/maxresdefault.jpg?ssl=1' }],
    ['meta', { property: 'og:image:secure_url', content: 'https://i1.wp.com/i.ytimg.com/vi/q51xhGxTk5k/maxresdefault.jpg?ssl=1' }],
    ['meta', { property: 'og:image:width', content: '1280' }],
    ['meta', { property: 'og:image:height', content: '720' }],
    ['meta', { property: 'og:image:alt', content: 'Oxygen Editor Multi User and Multi Tab Editing support' }],
    ['link', { rel: 'icon', href: 'https://i1.wp.com/dplugins.com/wp-content/uploads/2020/10/cropped-dplugins-avatar-1-192x192.png?ssl=1' }],
  ],

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
