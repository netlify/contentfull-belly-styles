module.exports = {
  title: 'ContentFull Belly Style Guide',
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [{ text: 'Installation', link: '/' }]
        },
        {
          text: 'Layout',
          children: [
            { text: 'Desktop', link: '/layouts/desktop' },
            { text: 'Menu Page', link: '/layouts/menu-page' }
          ]
        },
        {
          text: 'Components',
          children: [
            { text: 'Diet Icon', link: '/components/diet-icon' },
            { text: 'Main Sidebar', link: '/components/main-sidebar' },
            { text: 'Menu Item', link: '/components/menu-item' }
          ]
        }
      ]
    }
  }
}
