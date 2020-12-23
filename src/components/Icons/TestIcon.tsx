import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

// import Icon from '@/assets/icons/fullscreen.svg';
// eslint-disable-next-line import/extensions
import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon.tsx';

const TestIcon: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>{/* <Icon /> */}</BaseIcon>
);

export default TestIcon;
