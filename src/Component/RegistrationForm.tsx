import { useState } from "react";
import { TextField, Button } from "@bosch/react-frok";
import styles from './RegistrationForm.module.scss';
import validateRegistration from '../Feature/validateRegistration';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from "../Feature/AuthSlice";

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Errors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const RegistrationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState<Errors>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const validationErrors = validateRegistration(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form valid. Submitting data:", formData);

            const token = 'dummy-token';
            const refreshToken = 'dummy-refresh-token';

            dispatch(setUser({
                email: formData.email,
                username: formData.username,
                token,
                refreshToken
            }));

            navigate('/dashboard');
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.heading}>Registration</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="username"
                    label="User name"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    title="Provide a valid username"
                    className={styles.textFieldSpacing}
                />
                {errors.username && <p className={styles.errorText}>{errors.username}</p>}

                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    title="Provide a valid email"
                    className={styles.textFieldSpacing}
                />
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}

                <TextField
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    passwordButton={{ title: 'toggle password visible' }}
                    title="Provide a password"
                    className={styles.textFieldSpacing}
                />
                {errors.password && <p className={styles.errorText}>{errors.password}</p>}

                <TextField
                    id="confirmPassword"
                    label="Password confirmation"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    passwordButton={{ title: 'Confirm the password' }}
                    title="Confirm password"
                    className={styles.textFieldSpacing}
                />
                {errors.confirmPassword && <p className={styles.errorText}>{errors.confirmPassword}</p>}

                <Button type="submit" className={styles.submitBtn}>
                    Register
                </Button>

                <p className={styles.toggleText}>
                    Already have an account?
                    <span>
                        <Link to={'/login'}>{` Login`}</Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default RegistrationForm;
