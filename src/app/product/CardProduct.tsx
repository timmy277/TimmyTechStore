// components/CardProduct.tsx
"use client";

import { useFetchProducts } from '@/hooks/useFetchProduct';
import LoadingSkeleton from './LoadingSkeleton';
import ProductCard from './Product';


interface CardProductProps {
    category: string;
    heading: string;
}
interface Product {
    _id: string;
    productName: string;
    category: string;
    productImage: string[];
    sellingPrice: number;
    price: number;
}

const CardProduct = ({ category, heading }: CardProductProps) => {
    const { data, loading } = useFetchProducts(category);

    return (
        <div className='max-w-full px-4 mx-auto my-6'>
            <h2 className='py-4 text-2xl font-semibold'>{heading}</h2>
            <div className='grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center place-content-center overflow-hidden transition-all md:gap-6'>
                {loading ? <LoadingSkeleton /> : data.map((product: Product) => <ProductCard key={product?._id} product={product} />)}
            </div>
        </div>
    );
};

export default CardProduct;
