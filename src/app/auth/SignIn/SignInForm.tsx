import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { signInSchema } from '../validation-rule';

interface SignInFormProps {
    handleSignIn: (values: { email: string; password: string }) => Promise<void>;
}

export default function SignInForm({ handleSignIn }: SignInFormProps) {
    return (
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

                    <span className="block text-end">
                        You don&rsquo;t have an account? <Link href="/auth/SignUp" className="text-blue-500 hover:underline">Sign Up</Link>
                    </span>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSubmitting}
                        className="mt-4 w-full h-[3.849rem] rounded bg-[#FF64AE] border-none"
                    >
                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
