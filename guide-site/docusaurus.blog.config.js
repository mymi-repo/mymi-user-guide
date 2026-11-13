// @ts-check
// MYMI 블로그(www.mymi.live/blog) 설정. 설계: MYMI_frontend docs/FE/SEO/2026-10-27-블로그-설계안.md
// 가이드와 같은 Docusaurus·CSS를 쓰고 따로 빌드한다(`npm run build:blog` → build-blog/, FE scripts/build-guide.mjs 가 public/blog/ 로 복사).
// 한국어 원문 + 번체·간체 설명 글 3편(2026-11-07·11-08) + 일본어·영어 「AI 인터랙티브 소설이란?」 1편(2026-11-13 김상래). 글쓴이는 MYMI 팀이다.
// 정적 폴더는 쓰지 않는다: static/ 의 화면 그림(약 20MB)이 블로그에 한 벌 더 복사되지 않게, 로고·파비콘·공유 그림은 가이드 주소에서 가져온다.
import {themes as prismThemes} from 'prism-react-renderer';

const SITE = 'https://www.mymi.live';
// 블로그에서 서비스로 넘어간 방문을 관리자 '콘텐츠 유입 분석'에서 보게 UTM 을 붙인다(2026-10-31 사용자 요청). 글 본문 링크는 utm_content=ko_blog_<slug>.
const requestedLocale = process.env.DOCUSAURUS_CURRENT_LOCALE;
// 언어마다 실제로 옮긴 글만 낸다. 번역 안 된 한국어 글을 외국어 경로에 복사하지 않는다.
const translatedPosts = {
  'zh-TW': ['ai-interactive-novel', 'ai-character-memory', 'ai-chat-start'],
  'zh-Hans': ['ai-interactive-novel', 'ai-character-memory', 'ai-chat-start'],
  ja: ['ai-interactive-novel'],
  en: ['ai-interactive-novel'],
};
const locale = translatedPosts[requestedLocale] ? requestedLocale : 'ko';
const isTranslated = locale !== 'ko';
const T = {
  ko: {title: 'MYMI 블로그', description: 'AI 인터랙티브 소설과 AI 캐릭터 채팅을 고르고 즐기는 법, MYMI의 작품 데이터를 정리합니다.', nav: '블로그', all: '모든 글', guide: '유저가이드', cta: '서비스 바로가기', help: '도움말', faq: '자주 묻는 질문', terms: '약관과 정책', image: `${SITE}/guide/img/og/og-blog.png`},
  'zh-TW': {title: 'MYMI 部落格', description: '認識 AI 互動小說與角色聊天，從第一句對話到記憶設定，找到讓故事繼續下去的方法。', nav: '部落格', all: '所有文章', guide: '使用指南', cta: '前往 MYMI', help: '說明中心', faq: '常見問題', terms: '條款與政策', image: `${SITE}/guide/img/og/og-blog-zh-TW.png`},
  'zh-Hans': {title: 'MYMI 博客', description: '了解 AI 互动小说与角色聊天，从第一句对话到记忆设置，找到让故事继续下去的方法。', nav: '博客', all: '所有文章', guide: '使用指南', cta: '前往 MYMI', help: '帮助中心', faq: '常见问题', terms: '条款与政策', image: `${SITE}/api/og/guide/zh-Hans`},
  ja: {title: 'MYMI ブログ', description: 'AIインタラクティブ小説とキャラクターチャットの仕組みと楽しみ方を、MYMIを例に解説します。', nav: 'ブログ', all: 'すべての記事', guide: 'ユーザーガイド', cta: 'MYMIを開く', help: 'ヘルプ', faq: 'よくある質問', terms: '規約とポリシー', image: `${SITE}/guide/img/og/og-blog-ja.png`},
  en: {title: 'MYMI Blog', description: 'How AI interactive fiction and character chat work, and how to get more out of them, explained with MYMI as the example.', nav: 'Blog', all: 'All posts', guide: 'User Guide', cta: 'Open MYMI', help: 'Help', faq: 'FAQ', terms: 'Terms & Policies', image: `${SITE}/guide/img/og/og-blog-en.png`},
}[locale];
const SERVICE = `${SITE}/${locale}?utm_source=mymi_blog&utm_medium=referral&utm_campaign=global_content_2026q4&utm_content=${locale}_blog_menu`;
const GUIDE = `${SITE}/guide${isTranslated ? `/${locale}` : ''}`;
const title = T.title;
const description = T.description;
const PRETENDARD_CDN = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  favicon: `${SITE}/guide/brand/favicon.png`,
  // Vercel 빌드 서버(CLI 업로드)에는 .git 이 없어 기본값(git 조회)이면 "outside any Git worktree" 로 빌드가 멈춘다.
  // 그래서 git 을 읽지 않는다. 발행일은 머리말 date, 고친 날은 머리말 last_update.date 로 정한다.
  future: {v4: true, experimental_vcs: 'disabled'},
  url: SITE,
  baseUrl: '/blog/',
  customFields: {blogTranslatedPosts: translatedPosts},
  organizationName: 'Jungwon423',
  projectName: 'mymi-user-guide',
  onBrokenLinks: 'warn',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  staticDirectories: [],
  // 가이드의 메뉴·번역 파일과 섞지 않는다. 번역 안 된 한국어 글을 외국어 경로에 복사하지 않는다.
  i18n: {defaultLocale: 'ko', locales: ['ko', 'zh-TW', 'zh-Hans', 'ja', 'en'], path: 'i18n-blog', localeConfigs: {
    ko: {label: '한국어', htmlLang: 'ko'},
    'zh-TW': {label: '繁體中文', htmlLang: 'zh-TW'},
    'zh-Hans': {label: '简体中文', htmlLang: 'zh-Hans'},
    ja: {label: '日本語', htmlLang: 'ja'},
    en: {label: 'English', htmlLang: 'en'},
  }},
  stylesheets: [{href: `${PRETENDARD_CDN}/pretendardvariable-dynamic-subset.min.css`, type: 'text/css'}],
  // 글 조회수를 Vercel Web Analytics 로 센다(2026-11-06 김상래 「진행해줘」, 10/31 '블로그 조회 수 측정 보류'를 바꿈).
  // 서비스와 같은 Vercel 프로젝트(www.mymi.live)라 이 경로의 스크립트가 그대로 동작하고, 쿠키를 쓰지 않는다.
  scripts: [{src: '/_vercel/insights/script.js', defer: true}],
  headTags: [
    {tagName: 'meta', attributes: {property: 'og:site_name', content: title}},
    {tagName: 'meta', attributes: {name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#151516'}},
    {tagName: 'meta', attributes: {name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff'}},
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          path: 'blog',
          ...(isTranslated ? {include: translatedPosts[locale].map((slug) => `${slug}.md`)} : {}),
          authorsMapPath: 'authors.yml',
          blogTitle: title,
          blogDescription: description,
          postsPerPage: 'ALL',
          blogSidebarTitle: T.all,
          blogSidebarCount: 'ALL',
          // 글 3편 미만의 목록 페이지는 얇은 페이지라 처음에는 태그·보관함을 쓰지 않는다(설계안 7절).
          archiveBasePath: null,
          showReadingTime: false,
          // 고친 날(last_update.date)을 사이트맵 lastmod·BlogPosting dateModified 로 낸다. 그래야 BE IndexNow 크론이 고친 글도 알린다(2026-11-04).
          // 화면에는 나오지 않는다 — 글 꼬리는 태그·editUrl 이 있을 때만 그려진다.
          showLastUpdateTime: true,
          onInlineTags: 'throw',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'throw',
          feedOptions: {type: ['rss', 'atom'], title, description, language: locale, copyright: `Copyright © ${new Date().getFullYear()} WonMo Inc.`},
        },
        theme: {customCss: './src/css/custom.css'},
        // 글쓴이 목록(/blog/authors)은 'MYMI 팀' 한 줄뿐인 얇은 페이지라 사이트맵에서 뺀다. Docusaurus 가 끌 수 없게 만든다.
        sitemap: {changefreq: 'weekly', priority: 0.5, lastmod: 'date', filename: 'sitemap.xml', ignorePatterns: ['/blog/authors', '/blog/authors/**', '/blog/zh-TW/authors', '/blog/zh-TW/authors/**', '/blog/zh-Hans/authors', '/blog/zh-Hans/authors/**', '/blog/ja/authors', '/blog/ja/authors/**', '/blog/en/authors', '/blog/en/authors/**']},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: T.image,
      metadata: [{name: 'description', content: description}],
      colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
      navbar: {
        title: T.nav,
        logo: {alt: 'MYMI', src: `${SITE}/guide/brand/mymi-lockup.svg`, srcDark: `${SITE}/guide/brand/mymi-lockup-white.svg`},
        items: [
          {href: GUIDE, label: T.guide, position: 'left', target: '_self'},
          {type: 'localeDropdown', position: 'right'},
          {href: SERVICE, label: T.cta, position: 'right', className: 'navbar-cta', target: '_self'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {title: 'MYMI', items: [{label: 'mymi.live', href: SERVICE}, {label: T.guide, href: GUIDE}]},
          {title: T.help, items: [{label: T.faq, href: `${GUIDE}/faq`}, {label: T.terms, href: `${GUIDE}/policy/terms`}]},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WonMo Inc.`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
