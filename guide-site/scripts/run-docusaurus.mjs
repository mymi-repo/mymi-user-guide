// Keep each dev locale and production builds from overwriting one another's
// generated routes/translations while the guide is being reviewed locally.
const [command, ...args] = process.argv.slice(2);
const localeIndex = args.findIndex((arg) => arg === '--locale' || arg === '-l');
const locale = args.find((arg) => arg.startsWith('--locale='))?.slice('--locale='.length)
  ?? (localeIndex >= 0 ? args[localeIndex + 1] : 'ko');
const cacheName = command === 'start'
  ? `dev-${(locale ?? 'ko').replace(/[^a-zA-Z0-9-]/g, '_')}`
  : 'build';
process.env.DOCUSAURUS_GENERATED_FILES_DIR_NAME ??= `.docusaurus/${cacheName}`;

// Load after setting the environment: Docusaurus reads the directory at import.
await import('../node_modules/@docusaurus/core/bin/docusaurus.mjs');
