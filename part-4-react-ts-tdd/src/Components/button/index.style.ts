import React from 'react';
import Styled from 'styled-components/macro';

interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

export const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;
