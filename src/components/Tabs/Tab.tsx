import type { FC, PropsWithChildren } from 'react';
import cx from 'clsx';
import { omit } from 'lodash-es';

import { useTab } from './context';
import './Tab.scss';

export const Tab: FC<PropsWithChildren<{ id?: string }>> = ({ children }) => {
  const tabAttributes = useTab();

  return (
    <div
      {...omit(tabAttributes, ['key'])}
      key={tabAttributes.key}
      className={cx('tab', { 'tab--active': tabAttributes['aria-selected'] })}
    >
      {children}
    </div>
  );
};
