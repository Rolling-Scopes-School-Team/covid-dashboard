import classNames from 'classnames';
import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from '@/components/Icons/BaseIcon/BaseIcon.scss';

const BaseIcon: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...restProps
}) => (
  <i className={classNames(styles[''], styles[''], className)} {...restProps}>
    {children}
  </i>
);

export default BaseIcon;
