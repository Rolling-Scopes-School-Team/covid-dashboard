import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Icon from '@/assets/icons/fullscreen.svg';
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';

const FullScreenIcon: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default FullScreenIcon;
