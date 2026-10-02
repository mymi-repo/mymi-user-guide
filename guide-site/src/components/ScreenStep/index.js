import React from 'react';
import Screenshot from '@site/src/components/Screenshot';
import styles from './styles.module.css';

/**
 * 설명과 화면 캡처를 나란히 두는 틀. 넓은 화면에서는 설명이 왼쪽·화면이 오른쪽,
 * 좁은 화면에서는 설명 아래에 화면이 온다.
 *
 * <ScreenStep src="/img/screens/ko/first-basic-top.webp" alt="작품 제목·한 줄 소개·표지 칸" caption="기본 정보 탭 위쪽">
 *
 * 1. **작품 제목**을 적어요.
 * 2. **한 줄 소개**를 적어요.
 *
 * </ScreenStep>
 *
 * - 본문은 마크다운으로 쓴다. 여는 태그 다음과 닫는 태그 앞에 빈 줄을 둔다.
 * - 제목(##, ###)은 틀 밖에 둔다. 틀 안의 제목은 오른쪽 목차에 나오지 않는다.
 * - device는 Screenshot과 같다. 기본값 phone.
 * - src 를 생략하면 캡처 없이 본문만 그린다(언어판에 캡처가 아직 없을 때). alt·caption·device 도 함께 생략한다.
 */
export default function ScreenStep({src, alt, caption, device = 'phone', children}) {
  // 화면 캡처가 없는 언어판은 본문만 그린다. 캡처를 만들면 src 를 더해 같은 자리에서 나란히 보여 준다.
  if (!src) {
    return <div className={styles.plain}>{children}</div>;
  }
  return (
    <div className={styles.row}>
      <div className={styles.body}>{children}</div>
      <div className={styles.media}>
        <Screenshot src={src} alt={alt} caption={caption} device={device} />
      </div>
    </div>
  );
}
