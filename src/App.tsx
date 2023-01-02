import { v4 as uuidV4 } from 'uuid';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TodoEmpty } from './components/TodoEmpty'
import { TodoList } from './components/TodoList';
import { TaskCounter } from './components/TaskCounter';

import styles from './App.module.css';

import './global.css';

const todos = [
  {
    id: uuidV4(),
    content: 'Estudar Jest e todos os testes',
  },
  {
    id: uuidV4(),
    content: 'Comprar areia para as filhas',
  },
  {
    id: uuidV4(),
    content: 'Terminar a trilha do nodeJs da rocketseat',
  }
];

export function App() {

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <TaskCounter />
        {
          (!todos.length) ? (
            <TodoEmpty />
          ) : (
            todos.map(todo => {
              return <TodoList
                key={todo.id}
                content={todo.content}
              />
            })
          )
        }
      </main>
    </div>
  )
}