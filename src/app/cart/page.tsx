"use client"
import { useContext, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import Context from '@/context';
import ApiCenter from '@/api/ApiCenter';
import Image from 'next/image';
import displayCurrency from '@/helper/displayCurrency';
import {loadStripe} from '@stripe/stripe-js';

interface Product {
    _id: string;
    quantity: number;
    productId: {
        sellingPrice: number;
        productImage: string[];
        productName: string;
        category: string;
    };
}

const Cart = () => {
    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)


    const fetchData = async () => {

        const response = await axios({
            method: ApiCenter.getProductInCart.method,
            url: ApiCenter.getProductInCart.url,
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
            },
        });

        const dataResponse = await response.data;

        if (dataResponse.success) {
            setData(dataResponse.data)
        }
        console.log(dataResponse, "data")
    }

    const handleLoading = async () => {
        await fetchData()
    }

    useEffect(() => {
        setLoading(true)
        handleLoading()
        setLoading(false)
    }, [])


    const increaseQty = async (id: string, qty: number) => {
        const response = await axios({
            method: ApiCenter.updateProductInCart.method,
            url: ApiCenter.updateProductInCart.url,
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
            },
            data: {
                _id: id,
                quantity: qty + 1
            }
        });

        const dataResponse = await response.data;

        if (dataResponse.success) {
            fetchData()
        }
        console.log(dataResponse, "data")
    }


    const decreaseQty = async (id: string, qty: number) => {
        if (qty >= 2) {
            const response = await axios({
                method: ApiCenter.updateProductInCart.method,
                url: ApiCenter.updateProductInCart.url,
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                },
                data: {
                    _id: id,
                    quantity: qty - 1
                }
            });

            const dataResponse = await response.data;


            if (dataResponse.success) {
                fetchData()
            }
        }
    }

    const deleteCartProduct = async (id: string) => {
        const response = await axios({
            method: ApiCenter.deleteProductInCart.method,
            url: ApiCenter.deleteProductInCart.url,
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
            },
            data: {
                _id: id,
            }
        });

        const dataResponse = await response.data;

        if (dataResponse.success) {
            fetchData()
            context?.fetchUserAddToCart()
        }
    }
    const handlePayment = async () => {

        const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
        const response = await fetch(ApiCenter.payment.url, {
            method: ApiCenter.payment.method,
            credentials: 'include',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({
                cartItems: data
            })
        })

        const responseData = await response.json()
        console.log("payment response", responseData)

        if (responseData?.id && stripePromise) {
            stripePromise.redirectToCheckout({ sessionId: responseData.id })
        }
    }

    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
    const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.productId?.sellingPrice), 0)
    return (
        <div className='container mx-auto'>

            <div className='my-3 text-lg text-center'>
                {
                    data.length === 0 && !loading && (
                        <p className='py-5 bg-white'>No Data</p>
                    )
                }
            </div>

            <div className='flex flex-col gap-10 p-4 lg:flex-row lg:justify-between'>
                {/***view product */}
                <div className='w-full max-w-3xl'>
                    {
                        loading ? (
                            loadingCart?.map((el, index) => {
                                return (
                                    <div key={el + "Add To Cart Loading" + index} className='w-full h-32 my-2 border rounded bg-slate-200 border-slate-300 animate-pulse'>
                                    </div>
                                )
                            })

                        ) : (
                            data.map((product, index) => {
                                return (
                                    <div key={product?._id + "Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                                        <div className='w-32 h-32 bg-slate-200'>
                                            <img src={product?.productId.productImage[0]} className='object-scale-down w-full h-full mix-blend-multiply' width={128} height={128} alt='product image' />
                                        </div>
                                        <div className='relative px-4 py-2'>
                                            {/**delete product */}
                                            <div className='absolute right-0 p-2 text-red-600 rounded-full cursor-pointer hover:bg-red-600 hover:text-white' onClick={() => deleteCartProduct(product?._id)}>
                                                <MdDelete />
                                            </div>

                                            <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                            <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-lg font-medium text-red-600'>{displayCurrency(product?.productId?.sellingPrice)}</p>
                                                <p className='text-lg font-semibold text-slate-600'>{displayCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                                            </div>
                                            <div className='flex items-center gap-3 mt-1'>
                                                <button className='flex items-center justify-center w-6 h-6 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white ' onClick={() => decreaseQty(product?._id, product?.quantity)}>-</button>
                                                <span>{product?.quantity}</span>
                                                <button className='flex items-center justify-center w-6 h-6 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white ' onClick={() => increaseQty(product?._id, product?.quantity)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>


                {
                    data[0] && (
                        <div className='w-full max-w-sm mt-5 lg:mt-0'>
                            {
                                loading ? (
                                    <div className='border h-36 bg-slate-200 border-slate-300 animate-pulse'>

                                    </div>
                                ) : (
                                    <div className='bg-white h-36'>
                                        <h2 className='px-4 py-1 text-white bg-red-600'>Summary</h2>
                                        <div className='flex items-center justify-between gap-2 px-4 text-lg font-medium text-slate-600'>
                                            <p>Quantity</p>
                                            <p>{totalQty}</p>
                                        </div>

                                        <div className='flex items-center justify-between gap-2 px-4 text-lg font-medium text-slate-600'>
                                            <p>Total Price</p>
                                            <p>{displayCurrency(totalPrice)}</p>
                                        </div>

                                        <button className='w-full p-2 mt-2 text-white bg-blue-600' onClick={handlePayment}>Payment</button>

                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart