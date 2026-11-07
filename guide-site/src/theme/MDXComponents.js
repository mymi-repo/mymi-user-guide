import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GuideHero from '@site/src/components/GuideHero';
import {CardGrid, Card} from '@site/src/components/GuideCards';
import Screenshot from '@site/src/components/Screenshot';
import ScreenStep from '@site/src/components/ScreenStep';
import Gallery from '@site/src/components/Gallery';

const SITE = 'https://www.mymi.live';
const OriginalA = MDXComponents.a;

// 블로그(baseUrl /blog/)는 가이드와 따로 빌드해서, 글에서 가이드·서비스로 가는 링크는 전체 주소로 쓴다
// (/guide/… 처럼 쓰면 Docusaurus 가 /blog/guide/… 로 바꾼다). 그대로 두면 바깥 링크로 보고 새 탭·noreferrer 로 연다.
// 같은 사이트 주소는 호스트를 떼고 같은 탭에서 여는 보통 링크로 내보낸다(2026-11-04 사용자 「내부 링크는 호스트 경로 없이」).
function A(props) {
  const {siteConfig} = useDocusaurusContext();
  const href = props.href ?? '';
  if (siteConfig.baseUrl.startsWith('/blog/') && href.startsWith(`${SITE}/`)) {
    return <a {...props} href={href.slice(SITE.length)} />;
  }
  return <OriginalA {...props} />;
}

// 문서에서 import 없이 쓰는 가이드 전용 컴포넌트. 사용법은 README의 "디자인 요소"를 따른다.
export default {
  ...MDXComponents,
  a: A,
  GuideHero,
  CardGrid,
  Card,
  Screenshot,
  ScreenStep,
  Gallery,
};
