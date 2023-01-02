import { v4 as uuidV4 } from 'uuid';
import { useState, FormEvent, ChangeEvent } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TodoEmpty } from './components/TodoEmpty'
import { TodoList } from './components/TodoList';
import { TaskCounter } from './components/TaskCounter';

import styles from './App.module.css';

import './global.css';

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidV4(),
      description: newTodoText,
      isCompleted: false,
    }
    
    setTodos([...todos, newTask]);
    setNewTodoText('');   
  }

  function handleNewTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value);
  }

  function deleteTask(id: string) {
    console.log('todos =>',todos);
    
    const todosWhitoutDeletedOne = todos.filter(todo => todo.id !== id);

    setTodos(todosWhitoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask
          onAddNewTask={ handleCreateNewTask }
          newTodoText={newTodoText}
          onChangeInput={ handleNewTodoTextChange }
        />
        <TaskCounter />
        {
          (!todos.length) ? (
            <TodoEmpty />
          ) : (
            todos.map(todo => {
              return <TodoList
                key={todo.id}
                {...todo}
                onDeleteTask={ deleteTask }
              />
            })
          )
        }
      </main>
    </div>
  )
}