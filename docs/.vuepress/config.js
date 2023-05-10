import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "M&P's blog",
  description: '记录日常学习总结',
    head: [
      ["link", {rel: "icon", href: "/assets/icons/app-indicator.svg"}]
  ],

  theme: defaultTheme({
    logo: '/assets/icons/app-indicator.svg',
    colorMode: 'auto',
    // colorModeSwitch: false,
    navbar: [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'Front-end',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        {
          text: 'github',
          link: 'https://github.com',
        },            
      ],
      sidebar: [
        // SidebarItem
        {
          text: 'Foo',
          link: '/foo/',
          children: [
            // SidebarItem
            {
              text: 'github',
              link: 'https://github.com',
              children: [],
            },
            // string - page file path
            '/foo/bar.md',
          ],
        },
        // string - page file path
        '/bar/README.md',
      ],
      lastUpdatedText: 'Last Updated',
      backToHome: '回到主页'
  }),

  plugins: [
    backToTopPlugin(),
    activeHeaderLinksPlugin({
      // 配置项
    }),
    docsearchPlugin({

    }),
  ],
})