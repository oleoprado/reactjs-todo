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

  const completedTasksAmount = todos.filter(todo => todo.isCompleted === true).length;
  
  
  return(
    <div className={ styles.taskInProgress}>

      <div className={ styles.createTask}>
        <strong>Tarefas Criadas</strong>
        <span>{todos.length}</span>
      </div>

      <div className={ styles.doneTask}>
        <strong>Concluídas</strong>
        <span>{`${completedTasksAmount} de ${todos.length}`}</span>
      </div>

    </div>
  );
}