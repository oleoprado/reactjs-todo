import trash from '../assets/trash.svg';
import { FiTrash2 } from 'react-icons/fi';

import styles from './TodoList.module.css';

interface TodoListProps {
  content: string;
}

export function TodoList({ content }: TodoListProps) {
  console.log(content);

  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <p>{content}</p>
      <button title="Deletar tarefa"><FiTrash2 /></button>
    </div>
  )
}