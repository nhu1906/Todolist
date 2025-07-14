import { useDispatch } from 'react-redux';
import { clearUser } from '../Feature/AuthSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import AddTodoForm from '../Component/ToDoForm';
import TodoList from '../Component/ToDoList';
import { TodoProvider } from '../context/ToDoContext';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <TodoProvider> 
      <div className={styles.dashboardContainer}>

        {/* <button onClick={handleLogout}>Logout</button> */}
        
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Dashboard;
