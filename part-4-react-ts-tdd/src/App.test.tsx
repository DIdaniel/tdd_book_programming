import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import App from './App';

describe('<App />', () => {
  it('<App /> 컴포넌트가 잘 랜더링 되는가?', () => {
    const { container } = render(<App />);

    const todoList = screen.getByTestId('toDoList');
    expect(todoList).toBeInTheDocument();
    expect(todoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();

    const btnLabel = screen.getByText('추가');
    expect(btnLabel).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('add & delete todo items', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    fireEvent.change(input, {
      target: {
        value: 'coding hard',
      },
    });

    const button = screen.getByText('추가');
    fireEvent.click(button);

    const todoItem = screen.getByText('coding hard');
    expect(todoItem).toBeInTheDocument();

    const deleteBtn = screen.getByText('삭제');
    expect(deleteBtn).toBeInTheDocument();

    const todoList = screen.getByTestId('toDoList');
    expect(todoList.childElementCount).toBe(1);

    fireEvent.change(input, {
      target: {
        value: 'reading a book',
      },
    });
    fireEvent.click(button);

    const todoItem2 = screen.getByText('reading a book');
    expect(todoItem2).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(2);

    const deleteBtns = screen.getAllByText('삭제');
    fireEvent.click(deleteBtns[0]);

    expect(todoItem).not.toBeInTheDocument();
    expect(todoList.childElementCount).toBe(1);
  });

  it('does not add empty Todo', () => {
    render(<App />);

    const todoList = screen.getByTestId('toDoList');
    const length = todoList.childElementCount;

    const button = screen.getByText('추가');
    fireEvent.click(button);

    expect(todoList.childElementCount).toBe(length);
  });
});
