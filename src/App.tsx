import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TodoEmpty } from './components/TodoEmpty'
import { TodoList } from './components/TodoList';
import { TaskCounter } from './components/TaskCounter';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <NewTask />
        <TaskCounter />
        {/* <TodoEmpty /> */}
        <TodoList />
      </div>
    </div>
  )
}