"use client";

import { useRouter } from 'next/navigation';
import { notification } from 'antd';
import SignUpForm from './SignUpForm'; // Import form component
import axios from 'axios';
import ApiCenter from '@/api/ApiCenter';

interface User {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export default function SignUp() {
    const router = useRouter();

    const handleSignUp = async (values: User) => {
        try {
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
                notification.success({
                    message: 'Success',
                    description: dataApi.message,
                });
                router.push('/auth/SignIn');
            } else {
                notification.error({
                    message: 'Error',
                    description: dataApi.message,
                });
            }
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'An error occurred while signing up. Please try again.',
            });
            console.log(error);
        }
    };

    return (
        <section className="w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]">
            <div className="max-w-[40rem] bg-white shadow-md mx-auto mt-[2%] px-[8%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]">
                <SignUpForm handleSignUp={handleSignUp} />
            </div>
        </section>
    );
}
