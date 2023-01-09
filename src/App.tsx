import { v4 as uuidV4 } from 'uuid';
import { useState, FormEvent, ChangeEvent } from 'react';
import { usePersistedState } from './hooks/usePersistedState';

import { Header } from './components/header/Header';
import { NewTask } from './components/newTask/NewTask';
import { TodoEmpty } from './components/todoEmpty/TodoEmpty';
import { TodoList } from './components/todoList/TodoList';
import { TaskCounter } from './components/taskCounter/TaskCounter';

import styles from './App.module.css';

import './global.css';

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function App() {
  const [todos, setTodos] = usePersistedState('todos', []);
  const [newTodoText, setNewTodoText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidV4(),
      description: newTodoText,
      isCompleted: false,
    };
    
    setTodos([...todos, newTask]);
    setNewTodoText('');   
  }

  function handleNewTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value);
  }

  function deleteTask(id: string) {   
    const todosWhitoutDeletedOne = todos.filter(todo => todo.id !== id);

    setTodos(todosWhitoutDeletedOne);
  }

  function updateTasks(tasks: Task[]) {
    setTodos(tasks);
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
        <TaskCounter
          todos={todos}
        />
        {
          (!todos.length) ? (
            <TodoEmpty />
          ) : (
            <TodoList
              todos={todos}
              onDeleteTask={ deleteTask }
              onUpdateTasks={ updateTasks }
            />
          )
        }
      </main>
    </div>
  );
}