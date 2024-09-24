"use client"
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Context from '@/context';
import displayCurrency from '@/helper/displayCurrency';
import addToCart from '@/helper/addToCart';
import fetchCategoryWiseProduct from '@/helper/fetchCategoryWiseProduct';
import { FaCartPlus, FaEye, FaHeart } from 'react-icons/fa';
interface Product {
    _id: string;
    productName: string;
    category: string;
    productImage: string[];
    sellingPrice: number;
    price: number;
}

interface CardProductProps {
    category: string;
    heading: string;
}

// interface ContextType {
//     fetchUserAddToCart: () => void;
// }

const CardProduct = ({ category, heading }: CardProductProps) => {
    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)
    const context = useContext(Context)

    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        await addToCart(e, id)
        context?.fetchUserAddToCart()
    }


    const fetchData = async () => {
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)
        setData(categoryProduct?.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='container px-4 mx-auto my-6'>
            <h2 className='py-4 text-2xl font-semibold'>{heading}</h2>
            <div className=' grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center place-content-center overflow-hidden transition-all md:gap-6' >
                {loading ?
                    (
                        loadingList.map((product, index) => {
                            return (
                                <div className='max-w-full h-36 bg-white rounded-sm shadow flex xl:max-w-[20%] lg:max-w-[25%]' key={index}>
                                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>
                                    </div>
                                    <div className='grid w-full gap-2 p-4'>
                                        <h2 className='p-1 text-base font-medium text-black rounded-full md:text-lg text-ellipsis line-clamp-1 bg-slate-200 animate-pulse'></h2>
                                        <p className='p-1 capitalize rounded-full text-slate-500 bg-slate-200 animate-pulse'></p>
                                        <div className='flex w-full gap-3'>
                                            <p className='w-full p-1 font-medium text-red-600 rounded-full bg-slate-200 animate-pulse'></p>
                                            <p className='w-full p-1 line-through rounded-full text-slate-500 bg-slate-200 animate-pulse'></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    )
                    : (
                        data.map((product) => {
                            return (
                                <div className='w-full max-w-[280px] max-h-[350px] bg-white rounded-sm shadow flex flex-col items-center justify-center group relative' key={product?._id} >
                                    <div className=' h-full p-4 min-w-[120px] md:min-w-[145px] max-w-[200px]'>
                                        <img src={product.productImage[0]} className='h-[220px] w-[150px] object-scale-down transition-all group-hover:scale-125' alt='productImg' />
                                    </div>

                                    <div className="absolute top-0 right-0 opacity-0 flex flex-col items-center gap-3 transform translate-x-full translate-y-[-50%] group-hover:opacity-80 group-hover:-translate-x-3 group-hover:translate-y-3 transition-all duration-500">
                                        <button aria-label='button' type='button' onClick={(e) => handleAddToCart(e, product?._id)}>
                                            <FaCartPlus className="w-6 h-6 cursor-pointer hover:scale-150 hover:text-purple-800" />
                                        </button>
                                        <Link href={`/product/${product?._id}`}>
                                            <FaEye className="w-6 h-6 cursor-pointer hover:scale-150 hover:text-purple-800" />
                                        </Link>
                                        <FaHeart className="w-6 h-6 cursor-pointer hover:scale-150 hover:text-purple-800" />
                                    </div>

                                    <div className='grid p-4'>
                                        <h2 className='text-base font-medium text-blue-950 md:text-lg text-ellipsis line-clamp-1'>{product?.productName}</h2>
                                        <p className='capitalize text-slate-500'>{product?.category}</p>
                                        <div className='flex gap-3'>
                                            <p className='font-medium text-red-600'>{displayCurrency(product?.sellingPrice)}</p>
                                            <p className='line-through text-slate-500'>{displayCurrency(product?.price)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default CardProduct