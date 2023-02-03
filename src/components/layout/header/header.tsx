import styles from './header.module.css';

interface HeaderProps {
  title: string;
  user: string;
}

export function Header({ title, user }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      <p className={styles.header__user}>{user}</p>
    </header>
  );
}
