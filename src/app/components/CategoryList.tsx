// components/CategoryList.tsx
"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useFetchCategoryProduct } from "@/hooks/useFetchCategoryProduct";
import Link from 'next/link';
import Image from 'next/image';
import { sliderSettings } from '@/untils/sliderSetting';

const CategoryList = () => {
    const { categoryProduct, loading } = useFetchCategoryProduct();
    const categoryLoading = new Array(12).fill(null);

    return (
        <div className='max-w-full p-4 mx-auto flex'>
            <div className='block items-center gap-3 overflow-hidden'>
                {
                    loading ? (
                        <div className="flex gap-10 justify-center">
                            {
                                categoryLoading.map((_, index) => (
                                    <div className='w-16 h-16 overflow-hidden rounded-full md:w-20 md:h-20 bg-slate-200 animate-pulse' key={"categoryLoading" + index}>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <Slider {...sliderSettings}>
                            {
                                categoryProduct.map((product) => (
                                    <Link href={"/product-category?category=" + product?.category} className='cursor-pointer flex justify-center items-center' key={product?.category}>
                                        <div className='flex items-center justify-center w-16 h-16 p-4 overflow-hidden rounded-full md:w-20 md:h-20 bg-slate-200'>
                                            <Image width={100} height={100} src={product?.productImage[0]} alt={product?.category} className='object-scale-down h-full transition-all mix-blend-multiply hover:scale-125 mx-auto' />
                                        </div>
                                        <p className='text-sm text-center capitalize md:text-base -ml-16'>{product?.category}</p>
                                    </Link>
                                ))
                            }
                        </Slider>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryList;
