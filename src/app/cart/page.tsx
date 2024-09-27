"use client"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Context from '@/context';
import ApiCenter from '@/api/ApiCenter';
import { loadStripe } from '@stripe/stripe-js';
import CartItem from './cartItem';
import CartSummary from './cartSummary';

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
        } else if (qty === 1) {
            deleteCartProduct(id);
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

        const stripePromise = await loadStripe("pk_test_51Q2D9fKbLYXwDhwSJeTGxQ9zbnIury2NgKVlBcWC2sZN7vWNDFrLcWm4bW7gSxsoaYRufpS13b9RKqHBkWHDNsYY00GR0Vc15J")
        // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY, "pb key")
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
                {data.length === 0 && !loading && <p className='py-5 bg-white'>No Data</p>}
            </div>
            <div className='flex flex-col gap-10 p-4 lg:flex-row lg:justify-between'>
                <div className='w-full max-w-3xl'>
                    {loading ? (
                        loadingCart.map((_, index) => (
                            <div key={index} className='w-full h-32 my-2 border rounded bg-slate-200 border-slate-300 animate-pulse'></div>
                        ))
                    ) : (
                        data.map((product) => (
                            <CartItem
                                key={product._id}
                                product={product}
                                onIncreaseQty={increaseQty}
                                onDecreaseQty={decreaseQty}
                                onDelete={deleteCartProduct}
                            />
                        ))
                    )}
                </div>
                {data.length > 0 && (
                    <CartSummary totalQty={totalQty} totalPrice={totalPrice} onPayment={handlePayment} />
                )}
            </div>
        </div>
    )
}

export default Cart