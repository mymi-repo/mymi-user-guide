// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// 언어별 사이트 문구. navTitle은 로고 옆 짧은 제목, serviceUrl은 같은 언어의 서비스 화면이다.
const siteTexts = {
  ko: {
    title: 'MYMI 유저가이드',
    navTitle: '유저가이드',
    description: 'AI 작품 속 인물과 자유롭게 대화하고, 나만의 작품을 만들어보세요',
    keywords: 'MYMI, AI, 챗봇, 인터랙티브, 웹소설, 유저가이드, 사용법',
    serviceUrl: 'https://www.mymi.live',
  },
  en: {
    title: 'MYMI User Guide',
    navTitle: 'User Guide',
    description: 'Chat with characters in AI stories and create stories of your own.',
    keywords: 'MYMI, AI, chat, interactive stories, user guide',
    serviceUrl: 'https://www.mymi.live/en',
  },
  ja: {
    title: 'MYMI ユーザーガイド',
    navTitle: 'ユーザーガイド',
    description: 'AIが演じる物語の登場人物と会話し、自分だけの作品を作りましょう。',
    keywords: 'MYMI, AI, チャット, 物語, ユーザーガイド, 使い方',
    serviceUrl: 'https://www.mymi.live/ja',
  },
  'zh-TW': {
    title: 'MYMI 使用指南',
    navTitle: '使用指南',
    description: '與 AI 故事中的角色自由對話，創作屬於自己的作品。',
    keywords: 'MYMI, AI, 聊天, 互動故事, 使用指南, 創作',
    serviceUrl: 'https://www.mymi.live/zh-TW',
  },
};
const requestedLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'ko';
const localeKey = siteTexts[requestedLocale] ? requestedLocale : 'ko';
const siteText = siteTexts[localeKey];

// Pretendard(한국어판)는 한국식 한자·가나 글리프를 포함한다. 일본어 화면은 같은 계열의 JP판을 함께 불러
// 본문에 쓰고, 한국어판은 번역 대기 문서의 한국어 본문용으로 모든 언어에서 불러 둔다.
const PRETENDARD_CDN = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable';
const fontStylesheets = [
  `${PRETENDARD_CDN}/pretendardvariable-dynamic-subset.min.css`,
  ...(localeKey === 'ja' ? [`${PRETENDARD_CDN}/pretendardvariable-jp-dynamic-subset.min.css`] : []),
];

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

  stylesheets: fontStylesheets.map((href) => ({href, type: 'text/css'})),

  // Search Console / OG defaults
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: siteText.title,
      },
    },
    // 모바일 브라우저 주소창 색. 서비스 앱 배경(#151516)과 맞춘다.
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#151516'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff'},
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
          // 이용자용 사이트라 "이 페이지 편집" 링크(editUrl)는 두지 않는다.
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
      // 링크 공유 이미지. 원본은 og/card.html 이며 다시 만드는 방법은 README의 "링크 공유 이미지"에 있다.
      image: `img/og/og-${localeKey}.png`,
      metadata: [
        {name: 'keywords', content: siteText.keywords},
        {name: 'description', content: siteText.description},
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          // 한 번에 한 분류만 펼쳐 목차를 짧게 유지한다.
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: siteText.navTitle,
        logo: {
          alt: 'MYMI',
          src: 'brand/mymi-lockup.svg',
          srcDark: 'brand/mymi-lockup-white.svg',
        },
        items: [
          // 세 영역의 입구. 각 사이드바의 첫 문서로 이동한다(sidebars.js).
          {type: 'docSidebar', sidebarId: 'useSidebar', label: '이용 가이드', position: 'left'},
          {type: 'docSidebar', sidebarId: 'createSidebar', label: '제작 가이드', position: 'left'},
          {type: 'docSidebar', sidebarId: 'helpSidebar', label: '도움말', position: 'left'},
          // Docusaurus start serves one locale only. Show language switching in
          // the full build/preview, where the destination pages actually exist.
          ...(process.env.NODE_ENV === 'production'
            ? [{type: 'localeDropdown', position: 'right'}]
            : []),
          {
            href: siteText.serviceUrl,
            label: '서비스 바로가기',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        // 상단 메뉴의 세 영역과 같은 묶음. 문구를 바꾸면 i18n/<locale>/docusaurus-theme-classic/footer.json 의 키도 바꾼다.
        links: [
          {
            title: '이용 가이드',
            items: [
              {label: 'MYMI란?', to: '/getting-started/what-is-mymi'},
              {label: '대화하기', to: '/chatting/chat-with-character'},
              {label: '스파크 충전하기', to: '/payment/payment-methods'},
            ],
          },
          {
            title: '제작 가이드',
            items: [
              {label: '시작하기 전에', to: '/create/before-you-start'},
              {label: '첫 작품 만들기', to: '/create/first-work'},
              {label: '공개하고 고치기', to: '/create/publish'},
            ],
          },
          {
            title: '도움말',
            items: [
              {label: '자주 묻는 질문', to: '/faq'},
              {label: '약관과 정책', to: '/policy/terms'},
              // 네 언어 FAQ 모두 디스코드·메일을 함께 안내하는 문의하기 절이 있어 그리로 보낸다.
              // 절 제목(=앵커)은 언어마다 다르니 FAQ의 마지막 절 제목을 바꾸면 여기도 같이 고친다.
              {label: '문의하기', to: `/faq#${{ko: '문의하기', en: 'contact-us', ja: 'お問い合わせ', 'zh-TW': '聯絡我們'}[localeKey]}`},
            ],
          },
          {
            title: '서비스',
            items: [{label: 'mymi.live', href: siteText.serviceUrl}],
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
