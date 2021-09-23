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
          children: [{ text: 'Desktop', link: '/layouts/desktop' }]
        },
        {
          text: 'Components',
          children: [{ text: 'Diet Icon', link: '/components/diet-icon' }]
        }
      ]
    }
  }
}
