import { useState } from 'react';

import styles from './TaskForm.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function TaskForm({ onCreate }) {
  const [text, setText] = useState({
    value: '',
    error: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (text.value === '') {
      setText({
        ...text,
        error: 'Please enter something',
      });
    } else {
      onCreate(text.value);

      setText({
        value: '',
        error: '',
      });
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        isTextarea
        placeholder="Create Todo"
        name="createTextarea"
        value={text.value}
        onChange={(e) =>
          setText({
            ...text,
            value: e.target.value,
          })
        }
        error={text.error}
      />
      <Button text="Add" type="submit" />
    </form>
  );
}

export default TaskForm;
