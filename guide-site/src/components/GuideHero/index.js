import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// static/brand/mymi-symbol.svg 와 같은 도형. 배경 장식이라 화면 낭독에서 제외한다.
function MymiMark({className}) {
  return (
    <svg className={className} viewBox="128 128 768 768" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M320 320H436L512 472L588 320H704V704H588L512 552L436 704H320V320ZM666 333C680.359 333 692 344.641 692 359C692 373.359 680.359 385 666 385C651.641 385 640 373.359 640 359C640 344.641 651.641 333 666 333ZM358 639C372.359 639 384 650.641 384 665C384 679.359 372.359 691 358 691C343.641 691 332 679.359 332 665C332 650.641 343.641 639 358 639Z"
      />
    </svg>
  );
}

/**
 * 첫 화면 머리. 문서에 hide_title: true 를 두고 이 컴포넌트의 제목을 페이지 제목(h1)으로 쓴다.
 *
 * <GuideHero title="MYMI 유저가이드" actions={[{label: 'MYMI 바로가기', href: 'https://www.mymi.live', primary: true}]}>
 *
 * 한두 문장 소개
 *
 * </GuideHero>
 */
export default function GuideHero({title, actions = [], children}) {
  return (
    <section className={styles.hero}>
      <MymiMark className={styles.mark} />
      <h1 className={styles.title}>{title}</h1>
      {children && <div className={styles.lead}>{children}</div>}
      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map(({label, to, href, primary}) => (
            <Link
              key={label}
              className={clsx(styles.button, primary && styles.primary)}
              {...(href ? {href} : {to})}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
