import trash from '../assets/trash.svg';
import { FiTrash2 } from 'react-icons/fi';

import styles from './TodoList.module.css';

export function TodoList() {
  return(
    <div>
      <div className={ styles.container }>
        <input type="checkbox" />
        <p>Estudar a trilha do nodeJs</p>
        <button title="Deletar tarefa"><FiTrash2 /></button>
      </div>
      {/* <div className={ styles.container }>
        <input type="checkbox" />
        <p>Estudar a trilha do nodeJs</p>
        <button title="Deletar tarefa">
          <FiTrash2 />
        </button>
      </div> */}
    </div>
  )
}