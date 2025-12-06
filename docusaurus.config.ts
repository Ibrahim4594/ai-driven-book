import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI-Driven Development',
  tagline: 'The Complete Guide to AI-Driven and Spec-Driven Software Development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ibrahim4594.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/ai-driven-book/',

  // GitHub pages deployment config.
  organizationName: 'Ibrahim4594', // Your GitHub username
  projectName: 'ai-driven-book', // Your repo name

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for sharing
    image: 'img/ai-hero.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI-Driven Development',
      logo: {
        alt: 'AI-Driven Development Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          to: '/docs/resources',
          position: 'left',
          label: '📚 Resources',
        },
        {
          href: 'https://github.com/panaversity',
          label: 'Panaversity',
          position: 'right',
        },
        {
          href: 'https://github.com/Ibrahim4594/ai-driven-book',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/Ibrahim4594',
          label: 'My GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'RAG Chatbots',
              to: '/docs/chapters/03-rag-chatbots',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'All Resources',
              to: '/docs/resources',
            },
            {
              label: 'AI Tools',
              to: '/docs/resources#-ai-tools',
            },
            {
              label: 'Prompt Engineering',
              to: '/docs/resources#-prompt-engineering',
            },
            {
              label: 'Panaversity',
              href: 'https://github.com/panaversity',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ibrah/ai-driven-book',
            },
            {
              label: 'Panaversity Community',
              href: 'https://github.com/panaversity',
            },
            {
              label: 'Learn Agentic AI',
              href: 'https://github.com/panaversity/learn-agentic-ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Driven Development Book.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
