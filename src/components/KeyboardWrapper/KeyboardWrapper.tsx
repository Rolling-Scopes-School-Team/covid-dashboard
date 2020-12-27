import classNames from 'classnames';
import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import 'react-simple-keyboard/build/css/index.css';
import style from '@/components/KeyboardWrapper/KeyboardWrapper.scss';

interface IProps {
  onChange: (input: string) => void;
  isKeyboardHidden: boolean;
}

const KeyboardWrapper: React.FC<IProps> = ({ onChange, isKeyboardHidden }) => {
  const [layoutName, setLayoutName] = useState('default');

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    }
  };

  return (
    <div
      className={classNames([
        style['keyboard-wrapper'],
        isKeyboardHidden && style['keyboard-wrapper--hidden'],
      ])}
    >
      <Keyboard layoutName={layoutName} onChange={onChange} onKeyPress={onKeyPress} />
    </div>
  );
};

export default KeyboardWrapper;
