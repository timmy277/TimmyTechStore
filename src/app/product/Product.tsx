// components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaCartPlus, FaEye, FaHeart } from 'react-icons/fa';
import displayCurrency from '@/helper/displayCurrency';
import addToCart from '@/helper/addToCart';
import { useContext } from 'react';
import Context from '@/context';

interface Product {
    _id: string;
    productName: string;
    category: string;
    productImage: string[];
    sellingPrice: number;
    price: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const context = useContext(Context);

    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        await addToCart(e, id);
        context?.fetchUserAddToCart();
    };

    return (
        <div className='w-full max-w-[280px] max-h-[350px] bg-white rounded-sm shadow flex flex-col items-center justify-center group relative'>
            <div className='h-[200px] p-4 min-w-[120px] md:min-w-[145px] max-w-[200px]'>
                <Image width={150} height={200} src={product.productImage[0]} className='h-[200px] w-[150px] object-scale-down transition-all group-hover:scale-125' alt='productImg' />
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
                <h2 className='text-base text-center font-medium text-blue-950 md:text-lg text-ellipsis line-clamp-1'>{product?.productName}</h2>
                <p className='capitalize text-slate-500 text-center'>{product?.category}</p>
                <div className='flex gap-3'>
                    <p className='font-semibold text-red-600'>{displayCurrency(product?.sellingPrice)}</p>
                    <p className='line-through text-slate-500'>{displayCurrency(product?.price)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
