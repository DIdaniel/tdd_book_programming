import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Input } from './index';

describe('<Input />', () => {
  // 필수 인것들
  it('render correctly?', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  // 필수가 아닌 것들
  it('renders placholder correctly', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });

  it('changes the input state', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: 'study tdd',
      },
    });

    expect(input.value).toBe('study tdd');
  });
});
