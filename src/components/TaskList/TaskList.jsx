import styles from './TaskList.module.css';

import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, onRemove }) {
  return (
    <div className={styles.grid}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} text={task.text} id={task.id} onRemove={onRemove} />
        ))
      ) : (
        <p>Missing tasks</p>
      )}
    </div>
  );
}
export default TaskList;
