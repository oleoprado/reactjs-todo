import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TodoEmpty } from './components/TodoEmpty'

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <NewTask />
        <div className={ styles.taskInProgress}>
          <div className={ styles.createTask}>
            <strong>Tarefas Criadas</strong><span>0</span>
          </div>
          <div className={ styles.doneTask}>
            <strong>Concluídas</strong><span>0</span>
          </div>
        </div>
        <TodoEmpty />
      </div>
    </div>
  )
}