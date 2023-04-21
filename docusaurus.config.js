// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azimutt documentation',
  tagline: 'Next-Gen ERD: design, explore, document and analyze your database',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.azimutt.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'azimuttapp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/azimuttapp/docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/azimuttapp/docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Azimutt',
        logo: {
          alt: 'Azimutt Logo',
          src: 'img/logo.svg',
        },
        items: [
          {label: 'Documentation', to: '/docs'},
          {label: 'Azimutt app', href: 'https://azimutt.app'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Introduction', to: '/docs'},
              {label: 'Export your database schema', to: '/docs/category/export-your-database-schema'},
              {label: 'Azimutt Markup Language (AML)', to: '/docs/category/azimutt-markup-language'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Azimutt app', href: 'https://azimutt.app'},
              {label: 'Twitter', href: 'https://twitter.com/azimuttapp'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/company/azimuttapp'}
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: 'https://azimutt.app/blog'},
              {label: 'GitHub', href: 'https://github.com/azimuttapp/azimutt'}
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Azimutt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
