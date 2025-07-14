import FrokHeader from '../Component/Header';
import AuthForm from '../Component/AuthForm';
import styles from './LoginPage.module.scss';
import Dashboard from './Dashboard';

const LoginPage = () => {
  return (
    <div className={styles.pageWrapper}>
        
        <AuthForm />
      </div>
      );
};

export default LoginPage;
