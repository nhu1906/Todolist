interface FormData {
    email: string;
    password: string;
}

interface Errors {
    email?: string;
    password?: string;
}

const validateAuthForm = (formData: FormData): Errors => {
    const errors: Errors = {};

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Email is invalid";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }
    return errors;
};

export default validateAuthForm;
