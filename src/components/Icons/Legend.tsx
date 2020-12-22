import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Icon from '@/assets/icons/legend.svg';
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';

const Legend: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default Legend;
