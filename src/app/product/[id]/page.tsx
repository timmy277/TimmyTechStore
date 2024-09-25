"use client"

import { MouseEvent, useCallback, useContext, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Context from '@/context';
import ApiCenter from '@/api/ApiCenter';
import addToCart from '@/helper/addToCart';
import displayCurrency from '@/helper/displayCurrency';
import Image from 'next/image';

interface ProductDetailProps {
    params: { id: string };
  }


const ProductDetail = ({ params }: ProductDetailProps) => {
    const [data, setData] = useState({
        _id: "",
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: 0,
        sellingPrice: 0
    })
    // const params = useParams()
    // const { id } = params;
    const [loading, setLoading] = useState(true)
    const productImageListLoading = new Array(4).fill(null)
    const [activeImage, setActiveImage] = useState("")

    const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
        x: 0,
        y: 0
    })
    const [zoomImage, setZoomImage] = useState(false)

    const context = useContext(Context)

    const router = useRouter();

    const fetchProductDetails = async () => {
        setLoading(true)
        const response = await axios({
            method: ApiCenter.productDetail.method,
            url: ApiCenter.productDetail.url,
            headers: {
                'content-type': 'application/json',
            },
            data: { productId: params?.id },
        });
        setLoading(false)
        const dataResponse = await response.data;

        setData(dataResponse?.data)
        setActiveImage(dataResponse?.data?.productImage[0])

    }

    console.log("product-data", data)

    useEffect(() => {
        fetchProductDetails()
    }, [params])

    const handleMouseEnterProduct = (imageURL: string) => {
        setActiveImage(imageURL)
    }

    const handleZoomImage = useCallback((e: MouseEvent<HTMLImageElement>) => {
        setZoomImage(true)
        const target = e.target as HTMLImageElement;
        const { left, top, width, height } = target.getBoundingClientRect()
        console.log("coordinate", left, top, width, height)

        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height

        setZoomImageCoordinate({
            x,
            y
        })
    }, [zoomImageCoordinate])

    const handleLeaveImageZoom = () => {
        setZoomImage(false)
    }


    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        await addToCart(e, id)
        context?.fetchUserAddToCart()
    }

    const handleBuyProduct = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        await addToCart(e, id)
        context?.fetchUserAddToCart()
        router.push("/cart")

    }

    return (
        <div className='container p-4 mx-auto mt-8'>

            <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
                {/***product Image */}
                <div className='flex flex-col gap-4 h-96 lg:flex-row-reverse'>

                    <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
                        <Image src={activeImage} className='object-scale-down w-full h-full mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom} alt='img' />

                        {/**product zoom */}
                        {
                            zoomImage && (
                                <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                                    <div
                                        className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                                        style={{
                                            background: `url(${activeImage})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `

                                        }}
                                    >

                                    </div>
                                </div>
                            )
                        }

                    </div>

                    <div className='h-full'>
                        {
                            loading ? (
                                <div className='flex h-full gap-2 overflow-scroll lg:flex-col scrollbar-none'>
                                    {
                                        productImageListLoading.map((el, index) => {
                                            return (
                                                <div className='w-20 h-20 rounded bg-slate-200 animate-pulse' key={"loadingImage" + index}>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            ) : (
                                <div className='flex h-full gap-2 overflow-scroll lg:flex-col scrollbar-none'>
                                    {
                                        data?.productImage?.map((imgURL, index) => {
                                            return (
                                                <div className='w-20 h-20 p-1 rounded bg-slate-200' key={imgURL}>
                                                    <Image alt='productImg' src={imgURL} className='object-scale-down w-full h-full cursor-pointer mix-blend-multiply' onMouseEnter={() => handleMouseEnterProduct(imgURL)} onClick={() => handleMouseEnterProduct(imgURL)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                {/***product details */}
                {
                    loading ? (
                        <div className='grid w-full gap-1'>
                            <p className='inline-block w-full h-6 rounded-full bg-slate-200 animate-pulse lg:h-8'></p>
                            <h2 className='w-full h-6 text-2xl font-medium lg:text-4xl lg:h-8 bg-slate-200 animate-pulse'></h2>
                            <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>

                            <div className='flex items-center w-full h-6 gap-1 text-red-600 bg-slate-200 lg:h-8 animate-pulse'>

                            </div>

                            <div className='flex items-center w-full h-6 gap-2 my-1 text-2xl font-medium lg:text-3xl lg:h-8 animate-pulse'>
                                <p className='w-full text-red-600 bg-slate-200'></p>
                                <p className='w-full line-through text-slate-400 bg-slate-200'></p>
                            </div>

                            <div className='flex items-center w-full gap-3 my-2'>
                                <button aria-label='buy' className='w-full h-6 rounded lg:h-8 bg-slate-200 animate-pulse'></button>
                                <button aria-label='addtocart' className='w-full h-6 rounded lg:h-8 bg-slate-200 animate-pulse'></button>
                            </div>

                            <div className='w-full'>
                                <p className='w-full h-6 my-1 font-medium rounded text-slate-600 lg:h-8 bg-slate-200 animate-pulse'></p>
                                <p className='w-full h-10 rounded bg-slate-200 animate-pulse lg:h-12'></p>
                            </div>
                        </div>
                    ) :
                        (
                            <div className='flex flex-col gap-1'>
                                <p className='inline-block px-2 text-red-600 bg-red-200 rounded-full w-fit'>{data?.brandName}</p>
                                <h2 className='text-2xl font-medium lg:text-4xl'>{data?.productName}</h2>
                                <p className='capitalize text-slate-400'>{data?.category}</p>

                                <div className='flex items-center gap-1 text-red-600'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalf />
                                </div>

                                <div className='flex items-center gap-2 my-1 text-2xl font-medium lg:text-3xl'>
                                    <p className='text-red-600'>{displayCurrency(data.sellingPrice)}</p>
                                    <p className='line-through text-slate-400'>{displayCurrency(data.price)}</p>
                                </div>

                                <div className='flex items-center gap-3 my-2'>
                                    <button aria-label='buy' className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={(e) => handleBuyProduct(e, data?._id)}>Buy</button>
                                    <button aria-label='addtocart' className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white' onClick={(e) => handleAddToCart(e, data?._id)}>Add To Cart</button>
                                </div>

                                <div>
                                    <p className='my-1 font-medium text-slate-600'>Description : </p>
                                    <p>{data?.description}</p>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default ProductDetail