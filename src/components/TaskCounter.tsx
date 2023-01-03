import styles from './TaskCounter.module.css';

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TaskCounterProps {
  todos: Task[];
}

export function TaskCounter({ todos }: TaskCounterProps) {

  const completedTasks = todos.reduce((acc, curr) => {
    if(curr.isCompleted) return acc + 1;
    return acc;
  }, 0);
  
  return(
    <div className={ styles.taskInProgress}>

      <div className={ styles.createTask}>
        <strong>Tarefas Criadas</strong>
        <span>{todos.length}</span>
      </div>

      <div className={ styles.doneTask}>
        <strong>Concluídas</strong>
        <span>{`${completedTasks} de ${todos.length}`}</span>
      </div>

    </div>
  );
}