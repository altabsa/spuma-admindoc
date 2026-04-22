import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Spuma - przewodnik administratora',
  tagline: 'Elektroniczny obieg dokumentów',
  favicon: 'img/favicon.ico',  

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: false, // Improve compatibility with the upcoming Docusaurus v4    
  },

  // Set the production url of your site here
  url: 'https://altabsa.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/spuma-admindoc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'altabsa', // Usually your GitHub org/user name.
  projectName: 'spuma-admindoc', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
    i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    localeConfigs: {
      pl: {
        label: 'Polski',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '7.6', 
          },
        },
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
 themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
  themeConfig: { 
    image: 'img/docusaurus.png',
    navbar: {
      title: 'SPUMA',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentacja',
        },
        {
          type: 'html',
          position: 'left',
          value: '<div class="pagination-nav__sublabel"><span class="admonitionIcon_Rf37"><svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg></span>Instrukcja w przygotowaniu. Zobacz <a href="https://altabsa.github.io/SPUMA_Inf/" target="_blank" rel="noopener noreferrer">dokumetacja v6</a></div>',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
          {
            type: 'docsVersionDropdown',
            position: 'right',
             dropdownActiveClassDisabled: true,
         },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dokumentacja',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WWW',
              href: 'https://altab.pl/',
            },
            {
              label: 'Linkedin',
              href: 'https://pl.linkedin.com/company/altab-s.a./',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/user/AltabTV',
            },            
          ],
        },

        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'X',
              href: 'https://x.com/altab_sa',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/altab_sap/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/ALTAB.SAPBusinessOne/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Altab SA, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
