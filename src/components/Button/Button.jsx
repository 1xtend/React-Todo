import styles from './Button.module.css';

function Button({ small, text, type = 'button', onClick }) {
  return (
    <button
      className={`${styles.button} ${small ? styles.small : ''}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
