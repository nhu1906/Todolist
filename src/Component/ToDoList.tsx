import { useTodos } from '../context/ToDoContext';
import TodoItem from './ToDoItem';

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <table className="m-table" style={{ marginTop: '2rem', width: '100%' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Done</th> 
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            index={index}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
