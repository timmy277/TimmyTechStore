import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { signUpSchema } from '../validation-rule';

interface SignUpFormProps {
    handleSignUp: (values: { name: string; email: string; password: string; confirmpassword: string }) => Promise<void>;
}

export default function SignUpForm({ handleSignUp }: SignUpFormProps) {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
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
                                    className="mt-1 w-full h-[3rem] rounded"
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
                                    className="mt-1 w-full h-[3rem] rounded"
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
                                    className="mt-1 w-full h-[3rem] rounded"
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
                                    className="mt-1 w-full h-[3rem] rounded"
                                />
                            )}
                        </Field>
                        <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <span className="block text-end">
                        You already have an account? <Link href="/auth/SignIn" className="text-blue-500 hover:underline">Sign In</Link>
                    </span>

                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSubmitting}
                        className="mt-4 w-full h-[3.849rem] rounded bg-[#FF64AE] border-none"
                    >
                        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
