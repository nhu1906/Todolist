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

const validateRegistration = (formData: FormData): Errors => {
  const errors: Errors = {};
  if (!formData.username) {
    errors.username = "Username is required";
  } 

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "Email is required to be at least 5 characters";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters. Password mút contains 3 out of 4 following requirements uppercase letters, lowercase letters, numbers, and symbols";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Your confirmation password does not match";
  }

  return errors;
};

export default validateRegistration;
