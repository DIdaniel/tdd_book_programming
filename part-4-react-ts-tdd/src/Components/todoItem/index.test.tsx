import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ToDoItem } from './index';

describe('<TodoItem />', () => {
  // 필수 인것들
  it('render correctly', () => {
    const { container } = render(<ToDoItem label="default value" />);

    const todoItem = screen.getByText('default value');
    expect(todoItem).toBeInTheDocument();

    const deleteBtn = screen.getByText('삭제');
    expect(deleteBtn).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  // 필수가 아닌 것들
  it('clicks the delete button', () => {
    const handleClick = jest.fn();
    render(<ToDoItem label="default" onDelete={handleClick} />);

    const deleteBtn = screen.getByText('삭제');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
