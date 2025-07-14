import { useState } from 'react';
import { Button, TextField } from '@bosch/react-frok';
import { useTodos } from '../context/ToDoContext';
import styles from './ToDoForm.module.scss';

const ToDoForm = () => {
  const { addTodo } = useTodos();
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <><div>
      <h1>ToDoApp</h1>

    </div><form className={styles.todoForm} onSubmit={handleSubmit}>
        <TextField
          label="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="todo-input" />
        <Button type="submit">Add</Button>
        {success && <p className={styles.success}>Success! New Item Added</p>}
      </form></>
  );
};

export default ToDoForm;