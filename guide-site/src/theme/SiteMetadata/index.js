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
  if (!translated) return <OriginalSiteMetadata />;
  // translated: {언어: [옮긴 글 슬러그]}. 첫 화면은 모든 언어에 있고, 글은 그 글을 옮긴 언어에만 있다(2026-11-13 일본어·영어는 1편).
  const slug = pathname.replace(new RegExp(`^/blog(?:/(?:${Object.keys(translated).join('|')})(?=/|$))?/?`), '').replace(/\/$/, '');
  const localeConfigs = Object.fromEntries(
    Object.entries(context.i18n.localeConfigs).filter(([locale]) => locale === 'ko' || locale === context.i18n.currentLocale || slug === '' || translated[locale]?.includes(slug)),
  );
  return (
    <Context.Provider value={{...context, i18n: {...context.i18n, localeConfigs}}}>
      <OriginalSiteMetadata />
    </Context.Provider>
  );
}
