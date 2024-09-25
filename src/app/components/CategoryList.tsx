"use client"
import ApiCenter from "@/api/ApiCenter";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
interface Product {
    category: string;
    productImage: string[];
}

const CategoryList = () => {

    const [categoryProduct, setCategoryProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const categoryLoading = new Array(12).fill(null)
    const fetchCategoryProduct = async () => {
        setLoading(true)
        const response = await axios({
            method: ApiCenter.categoryProduct.method,
            url: ApiCenter.categoryProduct.url,
        });
        const dataResponse = response.data;
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }
    useEffect(() => {
        fetchCategoryProduct();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className='max-w-full p-4 mx-auto flex'>
                <div className='block items-center gap-3 overflow-hidden'>
                    {
                        loading ? (
                            categoryLoading.map((el, index) => (
                                <div className='w-16 h-16 overflow-hidden rounded-full md:w-20 md:h-20 bg-slate-200 animate-pulse' key={"categoryLoading" + index}>
                                </div>
                            ))
                        ) :
                            (
                                <Slider {...settings}>
                                    {
                                        categoryProduct.map((product) =>
                                        (
                                            <Link href={"/product-category?category=" + product?.category} className='cursor-pointer flex justify-center items-center' key={product?.category}>
                                                <div className='flex items-center justify-center w-16 h-16 p-4 overflow-hidden rounded-full md:w-20 md:h-20 bg-slate-200'>
                                                    <img width={100} height={100} src={product?.productImage[0]} alt={product?.category} className='object-scale-down h-full transition-all mix-blend-multiply hover:scale-125 mx-auto' />
                                                </div>
                                                <p className='text-sm text-center capitalize md:text-base -ml-16'>{product?.category}</p>
                                            </Link>
                                        )
                                        )
                                    }
                                </Slider>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryList
