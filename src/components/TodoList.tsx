import { FiTrash2 } from 'react-icons/fi';

import styles from './TodoList.module.css';


interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Task[];
  onDeleteTask: (id: string) => void;
  onUpdateTasks: (tasks: Task[]) => void;
}

export function TodoList({ todos, onDeleteTask, onUpdateTasks }: TodoListProps) {
  function handleDeleteTask(taskId: string) {
    onDeleteTask(taskId);
  }

  function handleCheckTask(id: string) {
    const updatedListTodos = todos.reduce((acumulador: Task[], valorAtual) => {
      if (valorAtual.id === id) return [...acumulador, {...valorAtual, isCompleted: !valorAtual.isCompleted }];
      
      return [...acumulador, valorAtual];
    }, []);

    onUpdateTasks(updatedListTodos);
  }


  const sortTasks = todos.sort((task1: Task, task2: Task) => {
    if (task1.isCompleted && !task2.isCompleted) {
      return 1;
    } else if (!task1.isCompleted && task2.isCompleted) {
      return -1;
    }
    return task1.description.localeCompare(task2.description);
  });

  return(
    <>
      {
        sortTasks.map(({ id, description, isCompleted}) => {
          return (
            <div className={styles.container} key={ id }>
              <input
                type="checkbox"
                id={id}
                checked={isCompleted}
                onChange={ () => handleCheckTask(id)}
              />
              <label htmlFor='checkbox' id={id}/>
              <p className={ isCompleted ? styles.done : ''}>{description}</p>
              <button
                title="Deletar tarefa"
                onClick={ () => handleDeleteTask(id)}
              >
                <FiTrash2 />
              </button>
            </div>
          );
        })
      }
    </>
  );
}