import styles from './TaskCounter.module.css';

export function TaskCounter() {
  return(
    <div className={ styles.taskInProgress}>
          <div className={ styles.createTask}>
            <strong>Tarefas Criadas</strong><span>0</span>
          </div>
          <div className={ styles.doneTask}>
            <strong>Concluídas</strong><span>0</span>
          </div>
        </div>
  )
}