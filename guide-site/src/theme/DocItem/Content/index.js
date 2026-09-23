import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Content from '@theme-original/DocItem/Content';

export default function DocItemContent(props) {
  const {i18n} = useDocusaurusContext();
  const {metadata} = useDoc();
  // Docusaurus falls back to docs/ when a page has no localized Markdown yet.
  const isKoreanFallback = i18n.currentLocale !== i18n.defaultLocale
    && metadata.source.startsWith('@site/docs/');
  return (
    <>
      {isKoreanFallback && (
        <div className="alert alert--info margin-bottom--lg" lang={i18n.currentLocale}>
          <Translate id="guide.translationPending">
            {'This page is currently available in Korean. We are updating and translating the guide one page at a time.'}
          </Translate>
        </div>
      )}
      <div lang={isKoreanFallback ? 'ko' : i18n.currentLocale}>
        <Content {...props} />
      </div>
    </>
  );
}
