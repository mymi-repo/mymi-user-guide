import React from 'react';
import OriginalSiteMetadata from '@theme-original/SiteMetadata';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Context} from '@docusaurus/core/lib/client/docusaurusContext';
import {useLocation} from '@docusaurus/router';

// Docusaurus 3.10은 없는 번역에도 hreflang을 만든다. 블로그에서 실제 번역이 있는 글만 서로 연결한다.
// 이 provider는 메타데이터 안에만 적용해서 사이트의 언어·라우팅과 가이드에는 영향을 주지 않는다.
export default function SiteMetadata() {
  const context = useDocusaurusContext();
  const {pathname} = useLocation();
  const translated = context.siteConfig.customFields?.blogTranslatedPosts;
  const slug = pathname.replace(/^\/blog(?:\/(?:zh-TW|zh-Hans))?\/?/, '').replace(/\/$/, '');
  if (!translated || ['zh-TW', 'zh-Hans'].includes(context.i18n.currentLocale) || slug === '' || translated.includes(slug)) {
    return <OriginalSiteMetadata />;
  }
  const localeConfigs = {ko: context.i18n.localeConfigs.ko};
  return (
    <Context.Provider value={{...context, i18n: {...context.i18n, localeConfigs}}}>
      <OriginalSiteMetadata />
    </Context.Provider>
  );
}
