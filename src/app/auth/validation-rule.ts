
import * as Yup from 'yup';

interface User {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export const signUpSchema = Yup.object<User>().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('password is required'),
    confirmpassword: Yup.string()
        .required('Confirm Password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
        'Password must contain number, uppercase letter and special character')
        .oneOf([Yup.ref('password')], 'Passwords do not match')
});

export const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});