import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Icon from '@/assets/icons/basemaps.svg';
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';

const Basemaps: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default Basemaps;
