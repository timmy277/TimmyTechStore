import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';


interface User {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const initialValues: User = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object<User>().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('password is required'),
    });

    const onSubmit = (values: User, { setSubmitting }: FormikHelpers<User>) => {
        console.log('values', values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                    </div>
                    <span>You don&rsquo;t have an account? <Link href="/auth/SignUp">Sign Up</Link></span>
                    <button type="submit">Sign In</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignIn;