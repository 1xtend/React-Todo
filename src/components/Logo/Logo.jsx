import styles from './Logo.module.css';

function Logo({ text, href }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();

        window.location.reload();
      }}
      className={styles.logo}
    >
      {text}
    </a>
  );
}
export default Logo;
