import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Icon from '@/assets/icons/github.svg';
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';

const GitHubIcon: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default GitHubIcon;
