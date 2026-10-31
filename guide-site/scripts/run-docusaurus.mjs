// Keep each dev locale and production builds from overwriting one another's
// generated routes/translations while the guide is being reviewed locally.
const [command, ...args] = process.argv.slice(2);
const localeIndex = args.findIndex((arg) => arg === '--locale' || arg === '-l');
const locale = args.find((arg) => arg.startsWith('--locale='))?.slice('--locale='.length)
  ?? (localeIndex >= 0 ? args[localeIndex + 1] : 'ko');
// 블로그(docusaurus.blog.config.js)는 가이드와 생성 폴더를 나눈다. 같은 폴더를 쓰면 한쪽 빌드가 다른 쪽 라우트를 덮는다.
const site = args.some((arg) => arg.includes('docusaurus.blog.config')) ? 'blog-' : '';
const cacheName = site + (command === 'start'
  ? `dev-${(locale ?? 'ko').replace(/[^a-zA-Z0-9-]/g, '_')}`
  : 'build');
process.env.DOCUSAURUS_GENERATED_FILES_DIR_NAME ??= `.docusaurus/${cacheName}`;

// Load after setting the environment: Docusaurus reads the directory at import.
await import('../node_modules/@docusaurus/core/bin/docusaurus.mjs');
