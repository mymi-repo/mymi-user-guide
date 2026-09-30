import React from 'react';

// 카드에 쓰는 선 아이콘(24×24, currentColor). 새 아이콘은 같은 두께·모서리로 추가한다.
const PATHS = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9z" />
    </>
  ),
  device: (
    <>
      <rect x="6.5" y="2.75" width="11" height="18.5" rx="2.5" />
      <path d="M10.5 17.75h3" />
    </>
  ),
  userPlus: (
    <>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3.5 19.5a6 6 0 0 1 12 0" />
      <path d="M18.5 8v6M15.5 11h6" />
    </>
  ),
  chat: (
    <path d="M20.25 11.25c0 4.28-3.69 7.75-8.25 7.75a8.9 8.9 0 0 1-3.3-.63L4 19.75l1.3-3.7a7.4 7.4 0 0 1-1.55-4.8C3.75 6.97 7.44 3.5 12 3.5s8.25 3.47 8.25 7.75z" />
  ),
  persona: (
    <>
      <circle cx="12" cy="8.25" r="3.75" />
      <path d="M4.75 20a7.25 7.25 0 0 1 14.5 0" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="17" r="2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 20.5 8.25 12 13 3.5 8.25z" />
      <path d="m3.5 12.5 8.5 4.75 8.5-4.75" />
      <path d="m3.5 16.5 8.5 4.75 8.5-4.75" />
    </>
  ),
  model: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4.5L19.3 9.2a2.47 2.47 0 0 0-3.5-3.5L5 16.5z" />
      <path d="m14.5 7 3.5 3.5" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.75A1.75 1.75 0 0 1 6.75 3H19v15H6.75A1.75 1.75 0 0 0 5 19.75z" />
      <path d="M5 19.75a1.75 1.75 0 0 0 1.75 1.75H19" />
      <path d="M9 7.5h6" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.25" width="18" height="13.5" rx="2.5" />
      <path d="M3 9.75h18M7 14.75h3.5" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.4a2.5 2.5 0 0 1 4.85.85c0 1.65-2.45 2.2-2.45 3.75" />
      <path d="M12 17.25h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 19.5 6v5.6c0 4.2-3.1 7.9-7.5 9.4-4.4-1.5-7.5-5.2-7.5-9.4V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.25" width="18" height="13.5" rx="2.5" />
      <path d="m3.75 7 8.25 6 8.25-6" />
    </>
  ),
  spark: <path d="M12 3.25 13.9 9.1 19.75 12 13.9 14.9 12 20.75 10.1 14.9 4.25 12 10.1 9.1z" />,
  history: (
    <>
      <path d="M3.75 12a8.25 8.25 0 1 0 2.4-5.83L3.75 8.5" />
      <path d="M3.75 4v4.5h4.5" />
      <path d="M12 7.75V12l3 1.75" />
    </>
  ),
  image: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="9" cy="9.75" r="1.75" />
      <path d="m20.5 15.5-4.6-4.6a1.2 1.2 0 0 0-1.7 0L6 19.25" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4" />
      <path d="m13.25 5.5-2.5 13" />
    </>
  ),
  send: (
    <>
      <path d="M20.5 3.5 10.75 13.25" />
      <path d="M20.5 3.5 14.25 20.5l-3.5-7.25L3.5 9.75z" />
    </>
  ),
  list: (
    <>
      <path d="M9 6.5h11M9 12h11M9 17.5h11" />
      <path d="M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8.5 7H17v8.5" />,
};

export const GUIDE_ICON_NAMES = Object.keys(PATHS);

export function GuideIcon({name, ...props}) {
  const paths = PATHS[name];
  if (!paths) {
    return null;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}>
      {paths}
    </svg>
  );
}
