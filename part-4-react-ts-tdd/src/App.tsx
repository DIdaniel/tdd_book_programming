import React, { useState } from 'react';
import { Container, Contents, ToDoListContainer, InputContainer } from './App.style';
import { Button, Input, ToDoItem } from './Components';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  return (
    <Container>
      <Contents>
        <ToDoListContainer data-testid="toDoList">
          {toDoList.map((item, index) => (
            <ToDoItem key={item} label={item} onDelete={() => deleteToDo(index)} />
          ))}
        </ToDoListContainer>
        <InputContainer>
          <Input
            placeholder="할 일을 입력해 주세요"
            value={toDo}
            onChange={(text) => setToDo(text)}
          />
          <Button label="추가" onClick={addToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
