import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo text="Todo List" href="#" />
      </Container>
    </header>
  );
}
export default Header;
