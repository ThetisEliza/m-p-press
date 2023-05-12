import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "M&P's blog",
  description: 'Notes for daily study and research',
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
          children: [
            {
              text: "Base",
              children:[{
                text: 'HTML & Javascript & CSS',
                link: '/press/front-end/html-javascript-css.html',
              }]
            },
            {
              text: "Modern",
              children:[{
                text: 'Vue',
                link: '/press/front-end/vue.html'
              }, {
                text: "Vuepress",
                link: '/press/front-end/vuepress.html'
              }]
            },
          ]
        },
        {
          text: 'Back-end',
          children: [
            {
              text: "programming-language",
              link: "/press/back-end/programming-language.html"
            },
            {
              text: "design-pattern",
              link: "/press/back-end/design-pattern.html"
            }
          ],
        },
        // {
        //   text: 'Mordern AI',
        // },
        // {
        //   text: 'Leetcode',
        // },
        {
          text: 'Github',
          link: 'https://github.com/ThetisEliza/m-p-press',
        },            
      ],
      sidebar: [
        // SidebarItem
        {
          text: 'Guide',
          children: [
            {
              text: 'Get Started',
              link: '/guide/getting-started.html',
            },
            {
              text: 'Introduction',
              link: '/guide/',
            }
          ]
        },
        {
          text: 'Github',
          link: 'https://github.com/ThetisEliza/m-p-press',
        },
        {
          text: 'Front-end',
          link: '/press/front-end/',
          children: [
            // SidebarItem            
            {
              text: 'HTML & Javascript & CSS',
              link: '/press/front-end/html-javascript-css.html',
            },
            {
              text: 'Vue',
              link: '/press/front-end/vue.html'
            }, 
            {
              text: "Vuepress",
              link: '/press/front-end/vuepress.html'
            }
          ],
        },
        // string - page file path
      ],
      lastUpdatedText: 'Last Updated',
      backToHome: 'Back to Home'
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