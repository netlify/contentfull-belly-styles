module.exports = {
    title: 'ContentFull Belly Style Guide',
    themeConfig: {
        sidebar: {
            '/': [{
                    text: 'Introduction',
                    children: [{ text: 'Installation', link: '/' }]
                },
                {
                    text: 'Layout',
                    children: [
                        { text: 'Global', link: '/layouts/global' },
                        { text: 'Home page', link: '/layouts/home' },
                        { text: 'Menu page', link: '/layouts/menu' }
                    ]
                },
                {
                    text: 'Components',
                    children: [
                        { text: 'Main Sidebar', link: '/components/main-sidebar' },
                        { text: 'Main Nav', link: '/components/main-nav' },
                        { text: 'Footer', link: '/components/footer' },
                        { text: 'Menu Item', link: '/components/menu-item' },
                        { text: 'Diet Icon', link: '/components/diet-icon' }
                    ]
                }
            ]
        }
    }
}