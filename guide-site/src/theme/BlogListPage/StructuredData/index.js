import React from 'react';
import Head from '@docusaurus/Head';
import {useBlogListPageStructuredData} from '@docusaurus/plugin-content-blog/client';
import {asMymiTeam} from '@site/src/components/blogStructuredData';

// Docusaurus 기본 컴포넌트에 글마다 글쓴이·발행처 바꾸기(asMymiTeam)만 더했다.
export default function BlogListPageStructuredData(props) {
  const structuredData = useBlogListPageStructuredData(props);
  structuredData.blogPost = structuredData.blogPost.map(asMymiTeam);
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
