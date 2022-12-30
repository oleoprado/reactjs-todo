import styles from './NewTask.module.css';

export function NewTask() {
  return(
    <form className={ styles.newTaskForm }>
      <input type="text" />
      <button>Criar</button>
    </form>
  )
}