import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onAddNewTask: (event: FormEvent) => void;
  newTodoText: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function NewTask({ onAddNewTask, newTodoText, onChangeInput }: NewTaskProps) {

  return (
    <form onSubmit={onAddNewTask} className={styles.newTaskForm}>

      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodoText}
        name="todoText"
        onChange={onChangeInput}
      />

      <button type="submit">
        <div className={styles.containerButton}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </div>
      </button>

    </form>
  )
}