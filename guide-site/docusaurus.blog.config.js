// @ts-check
// MYMI 블로그(www.mymi.live/blog) 설정. 설계: MYMI_frontend docs/FE/SEO/2026-10-27-블로그-설계안.md
// 가이드와 같은 Docusaurus·CSS를 쓰고 따로 빌드한다(`npm run build:blog` → build-blog/, FE scripts/build-guide.mjs 가 public/blog/ 로 복사).
// 처음에는 한국어만(2026-10-31 사용자 결정). 글쓴이는 'MYMI 팀'(blog/authors.yml).
// 정적 폴더는 쓰지 않는다: static/ 의 화면 그림(약 20MB)이 블로그에 한 벌 더 복사되지 않게, 로고·파비콘·공유 그림은 가이드 주소에서 가져온다.
import {themes as prismThemes} from 'prism-react-renderer';

const SITE = 'https://www.mymi.live';
// 블로그에서 서비스로 넘어간 방문을 관리자 '콘텐츠 유입 분석'에서 보게 UTM 을 붙인다(2026-10-31 사용자 요청). 글 본문 링크는 utm_content=ko_blog_<slug>.
const SERVICE = `${SITE}/ko?utm_source=mymi_blog&utm_medium=referral&utm_campaign=global_content_2026q4&utm_content=ko_blog_menu`;
const title = 'MYMI 블로그';
const description = 'AI 인터랙티브 소설과 AI 캐릭터 채팅을 고르고 즐기는 법, MYMI의 작품 데이터를 정리합니다.';
const PRETENDARD_CDN = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  favicon: `${SITE}/guide/brand/favicon.png`,
  // Vercel 빌드 서버(CLI 업로드)에는 .git 이 없어 기본값(git 조회)이면 "outside any Git worktree" 로 빌드가 멈춘다.
  // 블로그는 수정일 표시를 쓰지 않고 글 날짜는 머리말 date 로 정하므로 git 을 읽지 않는다.
  future: {v4: true, experimental_vcs: 'disabled'},
  url: SITE,
  baseUrl: '/blog/',
  organizationName: 'Jungwon423',
  projectName: 'mymi-user-guide',
  onBrokenLinks: 'warn',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  staticDirectories: [],
  i18n: {defaultLocale: 'ko', locales: ['ko'], localeConfigs: {ko: {label: '한국어', htmlLang: 'ko'}}},
  stylesheets: [{href: `${PRETENDARD_CDN}/pretendardvariable-dynamic-subset.min.css`, type: 'text/css'}],
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
          authorsMapPath: 'authors.yml',
          blogTitle: title,
          blogDescription: description,
          postsPerPage: 'ALL',
          blogSidebarTitle: '모든 글',
          blogSidebarCount: 'ALL',
          // 글 3편 미만의 목록 페이지는 얇은 페이지라 처음에는 태그·보관함을 쓰지 않는다(설계안 7절).
          archiveBasePath: null,
          showReadingTime: false,
          onInlineTags: 'throw',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'throw',
          feedOptions: {type: ['rss', 'atom'], title, description, language: 'ko', copyright: `Copyright © ${new Date().getFullYear()} WonMo Inc.`},
        },
        theme: {customCss: './src/css/custom.css'},
        // 글쓴이 목록(/blog/authors)은 'MYMI 팀' 한 줄뿐인 얇은 페이지라 사이트맵에서 뺀다. Docusaurus 가 끌 수 없게 만든다.
        sitemap: {changefreq: 'weekly', priority: 0.5, lastmod: 'date', filename: 'sitemap.xml', ignorePatterns: ['/blog/authors', '/blog/authors/**']},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: `${SITE}/guide/img/og/og-blog.png`,
      metadata: [{name: 'description', content: description}],
      colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
      navbar: {
        title: '블로그',
        logo: {alt: 'MYMI', src: `${SITE}/guide/brand/mymi-lockup.svg`, srcDark: `${SITE}/guide/brand/mymi-lockup-white.svg`},
        items: [
          {href: `${SITE}/guide`, label: '유저가이드', position: 'left', target: '_self'},
          {href: SERVICE, label: '서비스 바로가기', position: 'right', className: 'navbar-cta', target: '_self'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {title: 'MYMI', items: [{label: 'mymi.live', href: SERVICE}, {label: '유저가이드', href: `${SITE}/guide`}]},
          {title: '도움말', items: [{label: '자주 묻는 질문', href: `${SITE}/guide/faq`}, {label: '약관과 정책', href: `${SITE}/guide/policy/terms`}]},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WonMo Inc.`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
