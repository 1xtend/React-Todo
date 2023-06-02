import Button from '../Button/Button';
import styles from './TaskItem.module.css';

function TaskItem({ id, text, completed, onRemove, onCheck }) {
  return (
    <div id={id} className={styles.item}>
      <div className={styles.top}>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onCheck(id, e.target.checked)}
          />
          <div className={styles.checkmark}></div>
        </label>
        <h3 className={styles.title}> {text}</h3>
      </div>
      <div>
        <Button small text="Remove" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
}
export default TaskItem;
