import trash from '../assets/trash.svg';
import { FiTrash2 } from 'react-icons/fi';

import styles from './TodoList.module.css';

interface TodoListProps {
  description: string;
  id: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
}

export function TodoList({ description, id, onDeleteTask }: TodoListProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <p>{description}</p>
      <button
        title="Deletar tarefa"
        onClick={ handleDeleteTask}
      > 
        <FiTrash2 />
      </button>
    </div>
  )
}