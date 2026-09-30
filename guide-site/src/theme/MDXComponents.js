import MDXComponents from '@theme-original/MDXComponents';
import GuideHero from '@site/src/components/GuideHero';
import {CardGrid, Card} from '@site/src/components/GuideCards';
import Screenshot from '@site/src/components/Screenshot';
import ScreenStep from '@site/src/components/ScreenStep';
import Gallery from '@site/src/components/Gallery';

// 문서에서 import 없이 쓰는 가이드 전용 컴포넌트. 사용법은 README의 "디자인 요소"를 따른다.
export default {
  ...MDXComponents,
  GuideHero,
  CardGrid,
  Card,
  Screenshot,
  ScreenStep,
  Gallery,
};
