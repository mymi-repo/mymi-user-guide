import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// 기본 테마와 같고 제목만 머리말 seo_title 을 먼저 쓴다. 검색결과·브라우저 탭·링크 미리보기 제목만 바뀌고
// 화면 제목·사이드바·이전/다음 이름은 문서 제목 그대로다(2026-10-31, FE docs/FE/SEO/2026-10-26-SEO-스킬-대조표.md 2-4).
// 링크 미리보기 이미지는 문서마다 웹(FE)의 /api/og/guide/… 가 그 문서 제목으로 그린 카드다(2026-11-03, 같은 대조표 2절 3번).
// 카드 크기(1200×630, FE src/lib/seo/ogCard.js)도 적는다.
// 크기가 없으면 Facebook 이 처음 공유되는 주소에 이미지를 붙이지 못한다(2026-11-04 공유 디버거).
export default function DocItemMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  return (
    <PageMetadata
      title={frontMatter.seo_title ?? metadata.title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image ?? `${siteConfig.url}/api/og${metadata.permalink.replace(/\/$/, '')}`}
    >
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </PageMetadata>
  );
}
