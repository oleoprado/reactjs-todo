import styles from './TodoEmpty.module.css';

import clipboard from '../../assets/clipboard.svg';

export function TodoEmpty() {
  return(
    <main className={ styles.wrapper }>
      <div className={ styles.todoEmpty }>
        <img src={clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </main>
  );
}