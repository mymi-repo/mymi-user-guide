# MYMI 유저가이드 (Docusaurus)

Docusaurus 3.10 기반 정적 사이트. `MYMI_user_guide/` (GitBook)로부터 마이그레이션됨.

## 핵심 셋업

- **베이스 URL**: `/guide/` — 메인 도메인 `mymi.live` 하위 경로
- **로케일**: `ko`, `en`, `ja`, `zh-TW` — 한국어 기본, 상단 언어 선택 메뉴 제공
- **폰트**: Pretendard (한글+영문 통합, jsDelivr CDN)
- **검색**: 추후 Algolia DocSearch 또는 로컬 검색 플러그인
- **컬러**: 보라 계열 (MYMI 브랜드)

## 로컬 개발

### 모든 언어를 확인하는 미리보기

가이드 검토와 언어 전환을 함께 확인할 때는 다음 명령을 사용한다. 전체 언어를 빌드한 뒤 3001번 포트에서 제공한다.

```bash
cd guide-site
npm install
npm run preview
```

→ `http://localhost:3001/guide/` 에서 상단 메뉴로 한국어·영어·일본어·번체중국어를 전환한다. 같은 포트에서 `start`가 실행 중이라면 먼저 종료한다.

미리보기는 빌드 결과를 제공한다. 문서를 수정한 뒤 다른 터미널에서 `npm run build`를 실행하고 브라우저를 새로고침하면 반영된다.

### 한 언어를 편집하는 개발 서버

```bash
cd guide-site
npm install
npm run start
```

→ `http://localhost:3000/guide/` 에서 라이브 미리보기.

FE 개발 서버와 함께 사용할 때는 포트를 지정한다. Windows PowerShell에서는 `npm` 대신 `npm.cmd`를 사용할 수 있다.

```bash
npm run start -- --port 3003 --locale ko
```

→ `http://localhost:3003/guide/`

개발 서버는 한 번에 한 언어만 제공하므로 언어 선택 메뉴를 표시하지 않는다. 영어 본문을 편집할 때는 `npm run start -- --port 3004 --locale en`으로 별도 실행한다. 모든 언어를 한 사이트에서 전환하려면 위의 `npm run preview`를 이용한다.

`npm run start`, `npm run build`, `npm run preview`는 `scripts/run-docusaurus.mjs`를 통해 실행한다. 언어별 개발 캐시(`.docusaurus/dev-ko` 등)와 빌드 캐시(`.docusaurus/build`)를 분리하므로 개발 서버를 켜 둔 상태에서 전체 언어를 빌드해도 화면이 다른 언어로 바뀌지 않는다. `npx docusaurus start/build`로 직접 실행하면 이 분리를 거치지 않는다.

## 빌드

```bash
npm run build
npm run serve -- --port 3001   # 이미 빌드한 모든 언어의 결과 확인
```

빌드 결과: `build/` 디렉토리.

빌드 미리보기의 언어별 주소:

| 언어 | 주소 |
| --- | --- |
| 한국어 | `http://localhost:3001/guide/` |
| 영어 | `http://localhost:3001/guide/en/` |
| 일본어 | `http://localhost:3001/guide/ja/` |
| 번체중국어 | `http://localhost:3001/guide/zh-TW/` |

`serve`는 빌드된 파일을 제공하므로 수정 후 다시 빌드해야 한다. 본문을 계속 수정할 때는 `start`를 사용한다.

## 배포

현재는 `MYMI_frontend/scripts/build-guide.mjs`가 이 서브모듈의 가이드를 빌드하고, 결과를 FE의 `public/guide/`로 복사한다. 전체 언어가 함께 빌드된다. 가이드 서브모듈 변경과 FE의 서브모듈 참조 반영을 기존 배포 절차로 진행한다.

가이드만 로컬 확인할 때는 이 디렉터리에서 빌드한다. FE 루트의 빌드를 실행하면 가이드 복사 외에 FE 빌드도 진행된다.

## 콘텐츠 수정

`docs/` 디렉토리의 한국어 마크다운 파일을 직접 수정한다. 로컬 수정과 미리보기만으로 운영 사이트에 배포되지는 않는다.

각 .md 파일 frontmatter:
- `sidebar_position`: 사이드바 순서
- `description`: 메타 description (검색 결과에 표시됨)
- `slug`: URL 경로 (`intro.md`만 `slug: /` 사용해서 루트로 매핑)
- `last_update.date`: 내용을 실제로 수정·검토한 날짜 (`YYYY-MM-DD`)

### 수정일 표시

문서에 `last_update.date`가 있으면 그 날짜를 표시하고, 없으면 해당 파일의 마지막 Git 커밋 날짜를 사용한다. 개발 모드도 실제 Git 기록을 읽으며, Docusaurus의 2018년 예시 날짜와 개발용 안내 문구는 사용하지 않는다. 날짜 형식과 ‘최종 수정’ 문구는 선택한 언어에 맞춰 표시된다.

```yaml
last_update:
  date: 2026-09-22
```

문서를 실제로 고친 날에만 날짜를 갱신한다. 빌드 날짜로 모든 문서를 덮어쓰지 않는다. 새 번역에도 검토 날짜를 기록한다. Git 기록이 없는 빌드에서는 기존 FE 빌드 스크립트가 `DOCUSAURUS_SHOW_LAST_UPDATE=false`를 전달하여 수정일 표시를 끈다.

### 번역 추가

번역 파일은 한국어와 같은 상대 경로에 둔다.

```text
docs/account/sign-up.md
i18n/en/docusaurus-plugin-content-docs/current/account/sign-up.md
i18n/ja/docusaurus-plugin-content-docs/current/account/sign-up.md
i18n/zh-TW/docusaurus-plugin-content-docs/current/account/sign-up.md
```

- `slug`, 문서 경로, `sidebar_position`은 언어 간에 유지한다.
- 번역 문서에서 다른 문서를 연결할 때는 `(/account/persona.md)`처럼 문서 루트 기준 Markdown 경로를 쓴다. 번역 파일이 있으면 해당 언어로, 없으면 한국어 원문으로 연결된다. `../account/persona.md` 같은 상대 경로는 미번역 문서를 찾지 못할 수 있다.
- 본문·제목·`description`을 번역하되, 버튼 이름과 로그인 수단은 서비스의 해당 언어 화면을 확인한다.
- 수정일과 번역 대기 안내는 `i18n/<locale>/code.json`, 상단·하단 메뉴는 `docusaurus-theme-classic/*.json`, 사이드바 카테고리는 `docusaurus-plugin-content-docs/current.json`에서 관리한다.
- 사이트 제목·소개·검색 키워드는 `docusaurus.config.js`의 `siteTexts`에서 관리한다.
- 번역 파일이 없는 문서는 한국어 원문으로 표시되며, 본문 위에 해당 언어로 번역 대기 안내가 나타난다. 한국어 원문을 번역 폴더에 복사하여 번역 완료로 취급하지 않는다.

2026-09-23 기준 세 언어 번역 완료: 첫 화면, MYMI란?, 접속 방법, 회원가입, 로그인·프로필 설정, 성인·본인인증, 페르소나 설정, 계정 탈퇴, 대화하기, 채팅방 설정하기, 장기기억과 기억 조각, AI 모델 안내. 이후 페이지는 한국어 내용부터 순서대로 개편하고 번역을 함께 추가한다.

GitBook의 `{% hint %}` 블록은 Docusaurus admonition으로 자동 변환됨:
- `:::info` / `:::tip` / `:::warning` / `:::danger`

## 사이드바

`docs/{category}/_category_.json` 의 `label` + `position`으로 카테고리명/순서 조정.
페이지 순서는 각 .md 파일 frontmatter `sidebar_position`.

## 마이그레이션 재실행

원본(GitBook 형식)이 `MYMI_user_guide/`에 있고, 변환 스크립트는 `local_scripts/migrate_to_docusaurus.py`. 필요 시 재실행해서 `docs/` 갱신.

## TODO (배포 전 체크)

- [ ] 나머지 문서의 한국어 개편 및 영어·일본어·번체중국어 번역
- [ ] (선택) Algolia DocSearch 신청해서 검색 활성화
- [ ] (선택) 커스텀 OG image (`static/img/og-default.png`)
- [ ] GitBook 호스팅 (`mymi-1.gitbook.io/user-guide/`) cutover 또는 redirect
