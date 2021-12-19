import React from 'react';
import { Container, Label } from './index.style';

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

export const Button = ({
  label,
  backgroundColor = '#304FFE',
  hoverColor = '#1E40FF',
  onClick,
}: Props) => {
  return (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};
