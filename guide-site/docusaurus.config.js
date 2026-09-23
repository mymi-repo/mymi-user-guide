// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const siteTexts = {
  ko: {
    title: 'MYMI 유저가이드',
    description: 'AI 작품 속 인물과 자유롭게 대화하고, 나만의 작품을 만들어보세요',
    keywords: 'MYMI, AI, 챗봇, 인터랙티브, 웹소설, 유저가이드, 사용법',
  },
  en: {
    title: 'MYMI User Guide',
    description: 'Chat with characters in AI stories and create stories of your own.',
    keywords: 'MYMI, AI, chat, interactive stories, user guide',
  },
  ja: {
    title: 'MYMI ユーザーガイド',
    description: 'AIが演じる物語の登場人物と会話し、自分だけの作品を作りましょう。',
    keywords: 'MYMI, AI, チャット, 物語, ユーザーガイド, 使い方',
  },
  'zh-TW': {
    title: 'MYMI 使用指南',
    description: '與 AI 故事中的角色自由對話，創作屬於自己的作品。',
    keywords: 'MYMI, AI, 聊天, 互動故事, 使用指南, 創作',
  },
};
const siteText = siteTexts[process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'ko'] ?? siteTexts.ko;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteText.title,
  tagline: siteText.description,
  favicon: 'brand/favicon.png',

  future: {
    v4: true,
    // 개발 서버도 실제 Git 기록을 사용한다. 기본 전략은 개발 중 2018년 예시 날짜를 반환한다.
    experimental_vcs: process.env.DOCUSAURUS_SHOW_LAST_UPDATE === 'false'
      ? 'disabled'
      : 'git-eager',
  },

  url: 'https://www.mymi.live',
  baseUrl: '/guide/',

  organizationName: 'Jungwon423',
  projectName: 'mymi-user-guide',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'ja', 'zh-TW'],
    localeConfigs: {
      ko: {label: '한국어', htmlLang: 'ko'},
      en: {label: 'English', htmlLang: 'en'},
      ja: {label: '日本語', htmlLang: 'ja'},
      'zh-TW': {label: '繁體中文', htmlLang: 'zh-TW'},
    },
  },

  // Inject Pretendard webfont (한글+영문 통합)
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
      type: 'text/css',
    },
  ],

  // Search Console / OG defaults
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: siteText.title,
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Jungwon423/mymi-user-guide/edit/master/',
          // git 기록이 없는 빌드 환경(Vercel CLI 업로드 배포 등)에서는 "마지막 수정일" 을 구할 수 없어
          // 빌드가 실패한다. 호출측(MYMI_frontend scripts/build-guide.mjs)이 git worktree 가 없으면
          // DOCUSAURUS_SHOW_LAST_UPDATE=false 를 넘겨 이 기능만 끈다. 기본은 켜짐.
          showLastUpdateTime: process.env.DOCUSAURUS_SHOW_LAST_UPDATE !== 'false',
        },
        blog: false, // 블로그 비활성화
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: siteText.keywords},
        {name: 'description', content: siteText.description},
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: siteText.title,
        logo: {
          alt: 'MYMI',
          src: 'brand/mymi-lockup.svg',
          srcDark: 'brand/mymi-lockup-white.svg',
        },
        items: [
          // Docusaurus start serves one locale only. Show language switching in
          // the full build/preview, where the destination pages actually exist.
          ...(process.env.NODE_ENV === 'production'
            ? [{type: 'localeDropdown', position: 'right'}]
            : []),
          {
            href: 'https://www.mymi.live',
            label: '서비스 바로가기',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '가이드',
            items: [
              {label: 'MYMI란?', to: '/getting-started/what-is-mymi'},
              {label: '대화하기', to: '/chatting/chat-with-character'},
              {label: '작품 만들기', to: '/character-creation/create-character'},
            ],
          },
          {
            title: '정책',
            items: [
              {label: '이용약관 / 정책', to: '/policy/terms'},
              {label: '결제수단', to: '/payment/payment-methods'},
              {label: 'FAQ', to: '/faq'},
            ],
          },
          {
            title: '서비스',
            items: [
              {label: 'mymi.live', href: 'https://www.mymi.live'},
              {label: '문의', href: 'mailto:contact@mymi.live'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WonMo Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
