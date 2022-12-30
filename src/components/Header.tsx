import rocketSvg from '../assets/rocket.svg';
import logoTodo from '../assets/todo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={ styles.header }>
      <img src={ rocketSvg } alt="Foguete do logotipo todo" />
      <img src={ logoTodo } alt="Logotipo do Todo" />
    </header>
  )
}