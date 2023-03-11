import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onAddNewTask: (event: FormEvent) => void;
  newTodoText: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function NewTask({ onAddNewTask, newTodoText, onChangeInput }: NewTaskProps) {

  return (
    <div className={styles.newTaskContainer}>
      <form onSubmit={onAddNewTask} className={styles.newTaskForm} autoComplete="off">

        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTodoText}
          name="todoText"
          required
          onChange={onChangeInput}
          maxLength={140}
        />
 
        <button type="submit" disabled={ newTodoText.length < 1 }>
          <div className={styles.containerButton}>
            Criar
            <PlusCircle size={16} weight="bold" />
          </div>
        </button>

      </form>

      <span className={newTodoText.length >= 140 ? styles.maxCharacters : ''}>
        {newTodoText.length}/140
      </span>

    </div>
  );
}