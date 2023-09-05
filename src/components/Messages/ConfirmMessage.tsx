import React from 'react';

type Props = {
  title: string;
  options: string[];
  display: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmMessage = ({ title, options, display, onConfirm, onCancel }: Props) => {
  return (
    <div className="confirmMessage-panel" style={{ display }}>
      <div className='confirmMessage'>
        <div className='confirmTitle'>{title}</div>
        <div className="confirmMessage-options">
          {options.map((el, key) => (
            <div
              className='confirmMessage-option'
              style={{ backgroundColor: key === 0 ? 'green' : 'red' }}
              onClick={() => (key === 0 ? onConfirm() : onCancel())}
              key={key}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
