import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

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
            <strong>Tarfeas Criadas</strong><span>0</span>
          </div>
          <div className={ styles.doneTask}>
            <strong>Concluídas</strong><span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}