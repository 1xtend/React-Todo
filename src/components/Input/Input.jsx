import styles from './Input.module.css';

function Input({ isTextarea = false, placeholder, type = 'text', name, onChange, error, value }) {
  return (
    <>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          name={name}
          className={styles.textarea}
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required
          name={name}
          className={styles.input}
          onChange={onChange}
          value={value}
        />
      )}

      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}
export default Input;
