import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * 이미지 여러 장을 작게 나란히 보여 주는 틀. 예시 작품의 인물·배경처럼 캡처가 아닌 그림에 쓴다.
 *
 * <Gallery items={[{src: '/img/example/A-base.webp', label: 'A · 강민우', alt: '강민우의 기본 모습'}]} />
 *
 * - src: static/ 기준 경로. label: 그림 아래 짧은 이름. alt: 그림을 한 문장으로(비워 두지 않는다).
 * - 누르면 원본 크기로 열린다.
 */
export default function Gallery({items = []}) {
  const {withBaseUrl} = useBaseUrlUtils();
  return (
    <div className={styles.grid}>
      {items.map(({src, label, alt}) => {
        const url = withBaseUrl(src);
        return (
          <figure key={src} className={styles.item}>
            <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
              <img className={styles.image} src={url} alt={alt} loading="lazy" decoding="async" />
            </a>
            {label && <figcaption className={styles.label}>{label}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
