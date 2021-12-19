import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './index';

describe('<Button />', () => {
  it('<Button />이 제대로 렌더링 되는가?', () => {
    const { container } = render(<Button label="Button Test" />);

    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument();

    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304FFE');
    expect(parent).toHaveStyleRule('background-color', '#1E40FF', {
      modifier: ':hover',
    });

    expect(container).toMatchSnapshot();
  });

  it('backgroundColor와 hovercolor props가 변화한다', () => {
    const backgroundColor = '#FF1744';
    const hoverColor = '#F01440';
    render(
      <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />,
    );
  });

  it('버튼 클릭', () => {
    const handleClick = jest.fn();
    render(<Button label="Button Test" onClick={handleClick} />);

    const label = screen.getByText('Button Test');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
