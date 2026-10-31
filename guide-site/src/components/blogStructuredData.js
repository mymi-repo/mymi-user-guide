// 블로그 글쓴이는 사람이 아니라 'MYMI 팀'(blog/authors.yml)이라 Docusaurus 가 붙이는 Person 을 Organization 으로 바꾸고,
// 발행처로 메인 사이트의 Organization(@id 가 같다, FE src/components/seo/OrganizationSchema.js)을 잇는다.
const PUBLISHER = {
  '@type': 'Organization',
  '@id': 'https://www.mymi.live/#organization',
  name: 'MYMI',
  url: 'https://www.mymi.live',
  logo: 'https://www.mymi.live/brand/mymi-symbol.svg',
};

export function asMymiTeam(post) {
  return {
    ...post,
    author: [].concat(post.author).map((author) => ({...author, '@type': 'Organization'})),
    publisher: PUBLISHER,
  };
}
