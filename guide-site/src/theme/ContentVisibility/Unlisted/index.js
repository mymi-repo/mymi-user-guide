import React from 'react';
import {UnlistedMetadata} from '@docusaurus/theme-common';

// 숨김(unlisted) 문서는 예전 주소로 들어온 이용자를 새 문서로 안내하는 용도다.
// 검색 제외 메타 태그(noindex)는 그대로 두고, 기본 테마의 "색인되지 않은 문서" 경고 상자는
// 이용자에게 필요 없는 안내라 그리지 않는다.
export default function Unlisted() {
  return <UnlistedMetadata />;
}
