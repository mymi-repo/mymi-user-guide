---
title: 컴포넌트 넣기
description: 상태창·인벤토리·선택지처럼 대화 중에 뜨는 UI를 JSX 코드로 만들고, 변수 기본값과 미리보기를 확인하고, 프롬프트에 연결하는 방법을 알아봐요.
slug: /create/components
sidebar_position: 9
last_update:
  date: 2026-10-24
---

# 컴포넌트 넣기

컴포넌트는 **채팅 중에 AI가 띄우는 UI**예요. 상태창, 인벤토리, 선택지처럼 보여 줄 것을 만들어 두면 AI가 필요할 때 불러요. 코드를 몰라도 **Google AI Studio로 만들기**로 만들 수 있어요.

:::info
전문가 모드 안내예요. 간편 모드는 [로어북·컴포넌트·선택사항](/create/simple/extras#컴포넌트)을 보세요.
:::

## 컴포넌트 추가하기

1. **컴포넌트 추가**를 눌러요.
2. **JSX 코드** 칸에 코드를 붙여 넣어요. **붙여넣기**를 누르면 클립보드의 코드가 들어가요.
3. 미리보기에서 채팅에 보일 모습을 확인해요.

컴포넌트 이름과 변수는 코드에서 자동으로 읽어요.

<ScreenStep src="/img/screens/ko/components-editor.webp" device="part" alt="StatusWindow 컴포넌트를 펼친 모습. 미리보기, JSX 코드, 변수 기본값 hp·mp, 호출 태그와 복사 버튼" caption="컴포넌트 편집">

- **JSX 코드**: `function 이름({ 변수 = 기본값 })` 모양의 코드예요. 코드 펜스와 import 문은 자동으로 정리돼요. 20,000자까지 쓸 수 있어요.
- **변수 기본값**: 코드에서 읽은 변수와 기본값이 보여요. 기본값은 AI가 채울 값의 예시가 되고, 미리보기에도 쓰여요.
- **호출 태그**: ‘AI가 채팅에서 이렇게 불러요’ 아래의 태그예요. **복사**를 눌러 프롬프트 탭에 붙여 써요.

</ScreenStep>

예시 작품의 상태창 코드예요. 함수 이름(`StatusWindow`)과 변수 하나 이상(`hp`, `mp`)이 있어야 해요.

```jsx
function StatusWindow({ hp = 100, mp = 40 }) {
  const bar = (value, color) => (
    <div className="h-2 w-full rounded-full bg-slate-700">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
  return (
    <div className="my-2 w-full max-w-sm rounded-xl border border-cyan-400/40 bg-slate-900/90 p-3 text-slate-100">
      <div className="mb-2 flex items-center justify-between text-[11px] font-bold tracking-widest text-cyan-300">
        <span>STATUS</span>
        <span>검역소 B-3</span>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <div className="mb-1 flex justify-between"><span>체력</span><span>{hp}/100</span></div>
          {bar(hp, "bg-rose-400")}
        </div>
        <div>
          <div className="mb-1 flex justify-between"><span>마력</span><span>{mp}/100</span></div>
          {bar(mp, "bg-sky-400")}
        </div>
      </div>
    </div>
  );
}
```

## 프롬프트에 연결하기

컴포넌트를 추가만 해서는 AI가 언제 부를지 몰라요. **프롬프트** 탭에 언제 부를지를 적어요.

- **기본형**: **컴포넌트 출력 규칙**에 컴포넌트마다 등장하는 때를 적어요. 태그는 컴포넌트 탭에 보이는 그대로(`<StatusWindow hp={100} mp={40} />`) 규칙 문장과 함께 자동으로 붙어요.
  예: `전투가 시작될 때와 체력이 바뀔 때. hp = 체력, mp = 마력.`
- **직접 작성**: 호출 태그, 등장하는 때, 변수의 뜻을 모두 직접 적어요. 컴포넌트 탭에서 **복사**한 태그를 그대로 붙이거나, 값 자리를 `{value}`로 바꿔 써도 돼요.

직접 작성이라면 이렇게 적어요.

```text
### 컴포넌트 출력 규칙
규칙에 해당하는 순간에 아래 태그를 그대로 한 줄로 출력한다.
- `<StatusWindow hp={value} mp={value} />`: 전투가 시작될 때와 체력이 바뀔 때. hp = 체력, mp = 마력.
```

:::info[컴포넌트는 보여 주는 도구예요]
컴포넌트는 AI가 넣은 값을 보기 좋게 그려 줄 뿐이에요. 체력 계산처럼 값이 맞는지는 AI의 답에 달려 있어요. 규칙을 적어도 AI가 가끔 태그를 빠뜨리거나 값을 다르게 넣을 수 있어요.
:::

## AI Studio로 만들기

코드를 몰라도 Gemini와 대화하며 컴포넌트를 만들 수 있어요. 컴포넌트 탭 위쪽의 **Google AI Studio로 만들기**에서 시작해요.

1. **작품 정보 복사**를 눌러요. 작품 설정, 이미지 주소, 지금 쓴 상세 설명이 한 번에 복사돼요.
2. **Google AI Studio 열기**를 눌러요. 처음이면 **Remix**로 내 작업실을 만들어요.
3. 입력창에 작품 정보를 붙여 넣고, 그 아래에 원하는 모습을 한두 줄 적어서 보내요.
4. 다 되면 **MYMI에 붙여넣을 코드 복사**를 누르고, MYMI의 **컴포넌트 추가** → **JSX 코드** 칸에 붙여 넣어요.
5. Gemini 답변에서 언제 보여 줄지 적힌 문장을 복사해 프롬프트 탭에 붙여 넣어요. 기본형은 **컴포넌트 출력 규칙**의 그 컴포넌트 칸에 넣어요.

**사용 가이드**를 누르면 단계별 안내가 열려요. 실제 AI Studio 화면은 [Google AI Studio 화면으로 따라 하기](/create/ai-studio)에서 봐요.

:::info
Google 계정의 무료 요청 한도 안에서 쓸 수 있어요. 결제나 API 키는 필요 없어요.
:::

## 이미지를 쓰는 컴포넌트

- 장면마다 AI가 이미지를 고르게 하려면 이미지를 **변수**로 받고, 프롬프트에는 `img="{{URL}}/A/1.webp"`처럼 값 전체를 에셋 경로로 적어요. `url({{URL}}/…)`처럼 다른 글 사이에 넣으면 주소로 바뀌지 않아요.
- 없는 경로를 적으면 빈 값이 들어가요. 컴포넌트는 이미지 값이 있을 때만 그리게 만들어요.
- 변수의 **기본값**에는 `{{URL}}`을 쓰지 말고 실제 이미지 주소(https로 시작)나 빈 값을 넣어요.
- 코드 안에 고정으로 넣은 이미지 주소는 그 에셋을 지우면 보이지 않게 돼요.

## 자주 막히는 곳

<details>
<summary>‘function 이름을 찾을 수 없는 컴포넌트가 있어요.’라고 떠요</summary>

코드가 `function 이름(...)` 모양으로 시작하는지 확인해요. 화살표 함수나 이름 없는 함수는 이름을 읽지 못해요.

</details>

<details>
<summary>‘변수가 없는 컴포넌트가 있어요.’라고 떠요</summary>

함수가 받는 변수를 하나 이상 선언해야 해요. 예: `function StatusWindow({ hp = 100 })`

</details>

<details>
<summary>코드를 바꿨는데 변수 기본값이 그대로예요</summary>

**붙여넣기** 버튼으로 코드를 통째로 바꾸면 기본값을 다시 읽어요. 코드 칸을 조금씩 고칠 때는 이전 기본값이 남으니, 고친 뒤 **변수 기본값**을 확인해요.

</details>

<details>
<summary>미리보기의 버튼을 눌렀는데 대화가 보내지지 않아요</summary>

제작 화면의 미리보기는 모습을 확인하는 곳이라 실제 대화로 보내지지 않아요. 제작 완료한 뒤 완료 화면의 **작품 보기**로 대화를 시작해 확인해요. 다른 유저에게 보이기 전에 시험하려면 **공개 설정**을 **비공개**로 두고 제작 완료해요.

</details>

## 다음에 할 일

<CardGrid>
<Card to="/create/publish" icon="send" title="공개하고 고치기">제작 완료하고 작품을 공개해요.</Card>
<Card to="/create/limits" icon="list" title="제한과 규칙 한눈에">글자 수와 개수 제한을 한 번에 확인해요.</Card>
</CardGrid>
