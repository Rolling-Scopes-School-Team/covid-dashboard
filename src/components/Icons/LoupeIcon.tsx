import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Icon from '@/assets/icons/loupe.svg';
// eslint-disable-next-line import/extensions
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon.tsx';

const LoupeIcon: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default LoupeIcon;
