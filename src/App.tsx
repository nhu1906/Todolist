import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import './App.module.scss';
import DefaultLayout from './layouts/DefaultLayout';
import RegistrationForm from './Component/RegistrationForm';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/ToDoContext';
function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<LoginPage />} />
              <Route path="registration" element={<RegistrationForm />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </TodoProvider>
    </AuthProvider>

  );

}

export default App;
