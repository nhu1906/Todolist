import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../Feature/AuthSlice';
import { TextField } from '@bosch/react-frok';
import styles from './AuthForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import validateAuthForm from '../Feature/validateAuthForm';
// import { useAuth } from '../context/AuthContext';

const AuthForm = () => {
    const [isLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const validationErrors = validateAuthForm({ email, password});
        setErrors(validationErrors);

        if (!email || !password) {
            alert('Please fill all fields');
            return;
        }

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const token = 'dummy-token';
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({ email }));

        dispatch(setUser({
            email,
            token,
            username: '',
            refreshToken: ''
        }));

        alert(`${isLogin ? 'Logging in' : 'Registering'} with ${email}`);
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.formGroup}>
                    <h1>Sign in</h1>

                    <TextField id="email" label="Email" title="Provide a valid email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.textFieldSpacing} />
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}

                    <TextField id="password" label="Password" type="password" title="Provide a valid password" value={password} onChange={(e) => setPassword(e.target.value)} passwordButton={{ title: 'toggle password visible' }} className={styles.textFieldSpacing} />
                    {errors.password && <p className={styles.errorText}>{errors.password}</p>}

                    <button className={styles.submitButton} onClick={handleSubmit}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>

                    <p className={styles.toggleText}>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                        <span>
                            <Link to="/registration">{`Register`}</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
