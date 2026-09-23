import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';

// The site uses real Git/front-matter dates in development, so the stock
// "Simulated during dev" notice does not apply. Translate the whole sentence
// instead of joining English-style date/author fragments in other languages.
export default function LastUpdated({lastUpdatedAt}) {
  const format = useDateTimeFormat({dateStyle: 'long', timeZone: 'UTC'});
  if (lastUpdatedAt == null) {
    return null;
  }
  const date = new Date(lastUpdatedAt);
  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      <Translate
        id="guide.lastUpdated"
        values={{
          date: <b><time dateTime={date.toISOString()} itemProp="dateModified">{format.format(date)}</time></b>,
        }}>
        {'Last updated: {date}'}
      </Translate>
    </span>
  );
}
