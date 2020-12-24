import classNames from 'classnames';
import React, { useState } from 'react';

import dropdown from '@/components/reusable/DropDown/dropdown.scss';
import { DropDownState } from '@/types/types';

const DropDown: React.FC<DropDownState> = ({ options, selected, changeSelected }) => {
  const [isOpen, setTogle] = useState(false);

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div
      role="button"
      onKeyPress={() => null}
      tabIndex={0}
      onClick={() => setTogle(!isOpen)}
      className={classNames(dropdown['select'], isOpen && dropdown['open'])}
    >
      <div className={dropdown['select__trigger']}>
        <span>{selected}</span>
        <div className={dropdown['arrow']} />
      </div>
      <div
        className={classNames(
          dropdown['options'],
          dropdown['scroll'],
          isOpen && dropdown['open-options']
        )}
      >
        {options.map(element => (
          <span
            key={getRandomArbitrary(0, 1e100)}
            role="button"
            onKeyPress={() => null}
            tabIndex={0}
            onClick={() => {
              if (changeSelected) {
                return changeSelected(element[0]) as string;
              }
              return null;
            }}
            className={classNames(
              dropdown['option'],
              selected === element[0] && dropdown['selected']
            )}
            data-value={element[1]}
          >
            {element[0]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
