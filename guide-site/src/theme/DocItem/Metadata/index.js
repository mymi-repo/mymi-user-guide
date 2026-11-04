import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

// 기본 테마와 같고 제목만 머리말 seo_title 을 먼저 쓴다. 검색결과·브라우저 탭·링크 미리보기 제목만 바뀌고
// 화면 제목·사이드바·이전/다음 이름은 문서 제목 그대로다(2026-10-31, FE docs/FE/SEO/2026-10-26-SEO-스킬-대조표.md 2-4).
// 링크 미리보기 이미지는 문서마다 웹(FE)의 /api/og/guide/… 가 그 문서 제목으로 그린 카드다(2026-11-03, 같은 대조표 2절 3번).
// 카드 크기(1200×630, FE src/lib/seo/ogCard.js)는 og:image 바로 뒤에 적는다.
// PageMetadata 의 image 를 쓰면 og:image 와 크기 태그 사이에 twitter:image 가 끼는데,
// 그때 Facebook 은 크기를 쓰지 않아 처음 공유되는 주소에 이미지를 붙이지 못했다(2026-11-04 공유 디버거).
// og:type 도 웹 쪽처럼 website 로 적는다(Facebook 이 가이드 쪽에만 '필수 자산 누락: og:type' 을 띄웠다).
export default function DocItemMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const image = withBaseUrl(assets.image ?? frontMatter.image ?? `${siteConfig.url}/api/og${metadata.permalink.replace(/\/$/, '')}`, {absolute: true});
  return (
    <PageMetadata
      title={frontMatter.seo_title ?? metadata.title}
      description={metadata.description}
      keywords={frontMatter.keywords}>
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:image" content={image} />
    </PageMetadata>
  );
}
