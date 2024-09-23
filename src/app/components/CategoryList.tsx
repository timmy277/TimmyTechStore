"use client"
import ApiCenter from "@/api/ApiCenter";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"

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


    return (
        <>
            <div className='container p-4 mx-auto'>
                <div className='flex items-center justify-between gap-4 overflow-scroll scrollbar-none'>
                    {
                        loading ? (
                            categoryLoading.map((el, index) => {
                                return (
                                    <div className='w-16 h-16 overflow-hidden rounded-full md:w-20 md:h-20 bg-slate-200 animate-pulse' key={"categoryLoading" + index}>
                                    </div>
                                )
                            })
                        ) :
                            (
                                categoryProduct.map((product) => {
                                    return (
                                        <Link href={"/product-category?category=" + product?.category} className='cursor-pointer' key={product?.category}>
                                            <div className='flex items-center justify-center w-16 h-16 p-4 overflow-hidden rounded-full md:w-20 md:h-20 bg-slate-200'>
                                                <img src={product?.productImage[0]} alt={product?.category} className='object-scale-down h-full transition-all mix-blend-multiply hover:scale-125' />
                                            </div>
                                            <p className='text-sm text-center capitalize md:text-base'>{product?.category}</p>
                                        </Link>
                                    )
                                })
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryList
