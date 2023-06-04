import Container from '../Container/Container';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <a href="https://github.com/1xtend" target="_blank" rel="noreferrer noopener">
          My GitHub
        </a>
      </Container>
    </footer>
  );
}
export default Footer;
