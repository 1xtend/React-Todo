import Button from '../Button/Button';
import styles from './TaskItem.module.css';

function TaskItem({ id, text, onRemove }) {
  return (
    <div id={id} className={styles.item}>
      <h3 className={styles.title}> {text}</h3>
      <div>
        <Button small text="Remove" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
}
export default TaskItem;
