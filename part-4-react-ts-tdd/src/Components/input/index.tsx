import React from 'react';
import { InputBox } from './index.style';

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputBox
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        if (typeof onChange === 'function') {
          onChange(event.target.value);
        }
      }}
    />
  );
};
