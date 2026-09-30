import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {GuideIcon} from './icons';
import styles from './styles.module.css';

/**
 * 안내 페이지의 바로가기 카드.
 *
 * <CardGrid>
 *   <Card to="/account/sign-up" icon="userPlus" title="회원가입">계정을 만들고 프로필을 설정합니다.</Card>
 * </CardGrid>
 *
 * - to: 가이드 안의 문서 주소(언어 경로는 자동으로 붙는다). href: 외부 주소·메일.
 * - icon: icons.js 의 이름. 설명은 한 줄로 쓴다.
 * - 설명에 메일·웹 주소가 들어가면 description 속성으로 쓴다. 본문으로 쓰면 주소가 자동 링크가 되어
 *   카드(링크) 안에 링크가 겹친다.
 */
export function CardGrid({children, className}) {
  return <div className={clsx(styles.grid, className)}>{children}</div>;
}

export function Card({to, href, icon, title, description, children}) {
  const target = href ? {href} : {to};
  const body = description ?? children;
  return (
    <Link className={styles.card} {...target}>
      {icon && (
        <span className={styles.icon}>
          <GuideIcon name={icon} />
        </span>
      )}
      <div className={styles.title}>{title}</div>
      {body && <div className={styles.description}>{body}</div>}
      <span className={styles.arrow}>
        <GuideIcon name="arrow" />
      </span>
    </Link>
  );
}
