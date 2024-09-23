"use client"

import { Formik, Form, Field, FormikHelpers, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import ApiCenter from '@/api/ApiCenter';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Button, Input } from 'antd';


interface User {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export default function SignUp() {
    const initialValues: User = {
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    };
    const router = useRouter();

    const validationSchema = Yup.object<User>().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('password is required'),
        confirmpassword: Yup.string()
        .required('Confirm Password is required')
        .min(6, 'Password must be at least 6 characters')
        // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
        // 'Password must contain number, uppercase letter and special character')
        .oneOf([Yup.ref('password')], 'Passwords do not match')
    });

    const handleSignUp = async (values: User, formikHelpers: FormikHelpers<User>) => {
        // event.preventDefault();
        formikHelpers.setSubmitting(true);
        const dataResponse = await axios({
            method: ApiCenter.signUp.method,
            url: ApiCenter.signUp.url,
            headers: {
                'content-type': 'application/json',
            },
            data: values,
        });

        const dataApi = await dataResponse.data;
        if (dataApi.success) {
            toast.success(dataApi.message);
            router.push('/auth/SignIn');
        } else if (dataApi.error) {
            toast.error(dataApi.message);
        }
    }

    return (
        <>
            <section className="w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]">
                <div className="max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[8%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSignUp}
                    >
                        {({ isSubmitting, handleChange }) => (
                            <Form>
                                <h1 className="text-5xl leading-[3.75rem] font-semibold font-poppins tracking-[0.004rem] md:text-4xl sm:text-3xl text-center mb-[4rem]">
                                    Sign Up
                                </h1>

                                
                                <div className="mb-4">
                                    <label htmlFor="name">Name</label>
                                    <Field name="name">
                                        {({ field }: FieldProps<string>) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter your name"
                                                onChange={handleChange}
                                                className="mt-1 w-full h-[3.849rem] rounded-2xl"
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email">
                                        {({ field }: FieldProps<string>) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                className="mt-1 w-full h-[3.849rem] rounded-2xl"
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password">
                                        {({ field }: FieldProps<string>) => (
                                            <Input.Password
                                                {...field}
                                                placeholder="Enter your password"
                                                onChange={handleChange}
                                                className="mt-1 w-full h-[3.849rem] rounded-2xl"
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <Field name="confirmpassword">
                                        {({ field }: FieldProps<string>) => (
                                            <Input.Password
                                                {...field}
                                                placeholder="Confirm your password"
                                                onChange={handleChange}
                                                className="mt-1 w-full h-[3.849rem] rounded-2xl"
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <span className='block text-end'>
                                    You already have an account? <Link href="/auth/SignIn" className='text-blue-500 hover:underline'>Sign In</Link>
                                </span>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isSubmitting}
                                    className="mt-4 w-full h-[3.849rem] rounded-2xl bg-[#FF64AE] border-none"
                                >
                                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
};

