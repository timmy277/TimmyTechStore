"use client";

import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import ApiCenter from '@/api/ApiCenter';import { useRouter } from 'next/navigation';
import { Button, Input, notification } from 'antd';
import { useContext } from 'react';
import Context from '@/context';
import { signInSchema } from '../validation-rule';


interface User {
    email: string;
    password: string;
}

export default function SignIn() {
    const router = useRouter();
    // const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);
    const context = useContext(Context); // Check if context is null
    const fetchUserDetails = context?.fetchUserDetails;
    const fetchUserAddToCart = context?.fetchUserAddToCart;



    const handleSignIn = async (values: User) => {
        try {
            const dataResponse = await axios({
                method: ApiCenter.signIn.method,
                url: ApiCenter.signIn.url,
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                },
                data: values,
            });

            const dataApi = await dataResponse.data;
            if (dataApi.success) {
                notification.success({
                    message: 'Success',
                    description: dataApi.message,
                });
                router.push('/');
                if (fetchUserDetails) {
                    fetchUserDetails();
                }
                if (fetchUserAddToCart) {
                    fetchUserAddToCart();
                }
            } else if (dataApi.error) {
                notification.error({
                    message: 'Error',
                    description: dataApi.message,
                });
            }
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'An error occurred while signing in. Please try again.',
            });
            console.log(error);
        }
    };
    return (
        <section className="w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]">
            <div className="max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[8%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={signInSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSignIn(values);
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting, handleChange }) => (
                        <Form>
                            <h1 className="text-5xl leading-[3.75rem] font-semibold font-poppins tracking-[0.004rem] md:text-4xl sm:text-3xl text-center mb-[4rem]">
                                Sign In
                            </h1>

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

                            <span className='block text-end'>
                                You don&rsquo;t have an account? <Link href="/auth/SignUp" className='text-blue-500 hover:underline'>Sign Up</Link>
                            </span>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isSubmitting}
                                className="mt-4 w-full h-[3.849rem] rounded-2xl bg-[#FF64AE] border-none"
                            >
                                {isSubmitting ? 'Signing In...' : 'Sign In'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}
