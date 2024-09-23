"use client"
import { useContext, useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import Context from '@/context';
import displayCurrency from '@/helper/displayCurrency';
import addToCart from '@/helper/addToCart';
import fetchCategoryWiseProduct from '@/helper/fetchCategoryWiseProduct';
import Slider from 'react-slick';
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
        <div className='container relative px-4 mx-auto my-6'>

            <h2 className='py-4 text-2xl font-semibold'>{heading}</h2>

            <div className='flex items-center gap-4 overflow-hidden transition-all md:gap-6' >
                {loading ?
                    (
                        loadingList.map((product, index) => {
                            return (
                                <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex' key={index}>
                                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>
                                    </div>
                                    <div className='grid w-full gap-2 p-4'>
                                        <h2 className='p-1 text-base font-medium text-black rounded-full md:text-lg text-ellipsis line-clamp-1 bg-slate-200 animate-pulse'></h2>
                                        <p className='p-1 capitalize rounded-full text-slate-500 bg-slate-200 animate-pulse'></p>
                                        <div className='flex w-full gap-3'>
                                            <p className='w-full p-1 font-medium text-red-600 rounded-full bg-slate-200 animate-pulse'></p>
                                            <p className='w-full p-1 line-through rounded-full text-slate-500 bg-slate-200 animate-pulse'></p>
                                        </div>
                                        <button aria-label='addtocart' className='text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                                    </div>
                                </div> 
                            )
                        })

                    )
                    : (
                        data.map((product) => {
                            return (
                                <Link href={`/product/${product?._id}`} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex' key={product?._id} >
                                    <div className=' h-full p-4 min-w-[120px] md:min-w-[145px]'>
                                        <img src={product.productImage[0]} className='object-scale-down h-full transition-all hover:scale-110' alt='productImg' />
                                    </div>
                                    <div className='grid p-4'>
                                        <h2 className='text-base font-medium text-black md:text-lg text-ellipsis line-clamp-1'>{product?.productName}</h2>
                                        <p className='capitalize text-slate-500'>{product?.category}</p>
                                        <div className='flex gap-3'>
                                            <p className='font-medium text-red-600'>{displayCurrency(product?.sellingPrice)}</p>
                                            <p className='line-through text-slate-500'>{displayCurrency(product?.price)}</p>
                                        </div>
                                        <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e) => handleAddToCart(e, product?._id)}>Add to Cart</button>
                                    </div>
                                </Link>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default CardProduct