"use client";

import { useRouter } from 'next/navigation';
import { notification } from 'antd';
import { useContext } from 'react';
import Context from '@/context';
import SignInForm from './SignInForm'; // Import form component
import ApiCenter from '@/api/ApiCenter';
import axios from 'axios';

interface User {
    email: string;
    password: string;
}

export default function SignIn() {
    const router = useRouter();
    const context = useContext(Context);
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
                fetchUserDetails?.();
                fetchUserAddToCart?.();
            } else {
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
            <div className="max-w-[40rem] bg-white shadow-md mx-auto mt-[2%] px-[8%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]">
                <SignInForm handleSignIn={handleSignIn} />
            </div>
        </section>
    );
}
