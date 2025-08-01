import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MaiPouch",
    description: "多平台 Maimai 工具箱",
    titleTemplate: ':title | MaiPouch',
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,

    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

    sitemap: {
        hostname: 'https://maipouch.zako.ink'
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/docs/maipouch' },
            { text: '博客', link: '/blog/recent' },
        ],

        sidebar: {
            '/docs/': [
                {
                    text: '快速开始',
                    items: [
                        { text: '什么是 MaiPouch', link: '/docs/maipouch' },
                        { text: '快速开始', link: '/docs/download' },
                    ]
                },
                { text: '交流', link: '/docs/contact' },
            ],
            '/blog/': [
                {
                    text: '博客',
                    items: [
                        { text: '最新动态', link: '/blog/recent' },
                    ]
                },
                {
                    text: '开发随笔',
                    items: [
                    ]
                },
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/FlipWind/maipouch' }
        ],

        search: {
            provider: 'local'
        },

        footer: {
            message: 'Powered by VitePress & Netlify',
            copyright: 'Copyright © 2025 FlipWind'
        },

        logo: "/maipouch.png"
    }
})
