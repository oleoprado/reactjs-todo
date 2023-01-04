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

  return(
    <>
      {
        todos.map(({ id, description, isCompleted}) => {
          return (
            <div className={styles.container} key={ id }>
              <input
                type="checkbox"
                id={id}
                checked={isCompleted}
                onChange={ () => handleCheckTask(id)}
              />
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