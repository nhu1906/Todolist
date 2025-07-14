import { Button } from '@bosch/react-frok';
import { useTodos } from '../context/ToDoContext';
import { useState } from 'react';

interface Props {
  id: number;
  text: string;
  completed: boolean;
  index: number;
}

const TodoItem = ({ id, text, completed, index }: Props) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim() !== '') {
      editTodo(id, editText);
      setIsEditing(false);
    }
  };

  return (
    <tr>
      <td style={{ textAlign: 'center' }}>{index + 1}</td>

      <td style={{ textAlign: 'left' }}>
        {isEditing ? (
          <input value={editText} onChange={(e) => setEditText(e.target.value)} style={{ width: '100%', padding: '4px' }} />
        ) : (
          <span
            style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'gray' : 'inherit', }}>
            {text}
          </span>
        )}
      </td>

      <td style={{ textAlign: 'center' }}>
        <i className={`a-icon boschicon-bosch-ic-emoji-${completed ? 'happy' : 'sad'}`}></i>
      </td>

      <td style={{ textAlign: 'center' }}>
        {completed ? (
          <i className="a-icon boschicon-bosch-ic-checkmark-bold" style={{ fontSize: '1.2rem' }}></i>
        ) : (
          <input type="checkbox" onChange={() => toggleTodo(id)} />
        )}
      </td>

      <td style={{ textAlign: 'center' }}>
        {isEditing ? (
          <Button onClick={handleSave} title="ghost">Save</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} title="ghost">Edit</Button>
        )}
      </td>

      <td style={{ textAlign: 'center' }}>
        <Button onClick={() => deleteTodo(id)} title="ghost">Delete</Button>
      </td>
    </tr>
  );
};

export default TodoItem;
