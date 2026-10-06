import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/**
 * 화면 캡처 틀.
 *
 * <Screenshot src="/img/screens/ko/chat-settings.webp" alt="채팅 설정 메뉴" caption="⋮ → 채팅 설정" device="phone" />
 *
 * - src: static/ 기준 경로. 언어별 화면은 img/screens/<locale>/ 에 둔다.
 * - alt: 화면에서 무엇을 보여 주는지 한 문장으로. 비워 두지 않는다.
 * - device: phone(휴대폰 화면 한 장), part(화면 일부를 자른 것), desktop(PC 웹, 기본값).
 * - 이미지를 누르면 원본 크기로 열린다. 캡처 속 작은 글자를 읽을 수 있게 한다.
 */
export default function Screenshot({src, alt, caption, device = 'desktop', width}) {
  // ?v= 는 그림 폴더 해시(docusaurus.config.js) — 같은 이름으로 바꾼 그림이 캐시에 남지 않게 한다
  const url = `${useBaseUrl(src)}?v=${useDocusaurusContext().siteConfig.customFields.screensVersion}`;
  const isDesktop = device !== 'phone' && device !== 'part';
  return (
    <figure
      className={clsx(styles.figure, styles[device] ?? styles.desktop)}
      style={width ? {maxWidth: width} : undefined}>
      <div className={styles.frame}>
        {isDesktop && (
          <div className={styles.bar} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        <a className={styles.zoom} href={url} target="_blank" rel="noopener noreferrer">
          <img className={styles.image} src={url} alt={alt} loading="lazy" decoding="async" />
        </a>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
