import { MdDelete } from "react-icons/md";
import Image from 'next/image';
import displayCurrency from '@/helper/displayCurrency';

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

interface CartItemProps {
    product: Product;
    onIncreaseQty: (id: string, qty: number) => void;
    onDecreaseQty: (id: string, qty: number) => void;
    onDelete: (id: string) => void;
}

const CartItem = ({ product, onIncreaseQty, onDecreaseQty, onDelete }: CartItemProps) => {
    return (
        <div className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
            <div className='w-32 h-32 bg-slate-200'>
                <Image src={product?.productId.productImage[0]} className='object-scale-down w-full h-full mix-blend-multiply' width={128} height={128} alt='product image' />
            </div>
            <div className='relative px-4 py-2'>
                <div className='absolute right-0 p-2 text-red-600 rounded-full cursor-pointer hover:bg-red-600 hover:text-white' onClick={() => onDelete(product?._id)}>
                    <MdDelete />
                </div>
                <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-medium text-red-600'>{displayCurrency(product?.productId?.sellingPrice)}</p>
                    <p className='text-lg font-semibold text-slate-600'>{displayCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                </div>
                <div className='flex items-center gap-3 mt-1'>
                    <button className='flex items-center justify-center w-6 h-6 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white ' onClick={() => onDecreaseQty(product?._id, product?.quantity)}>-</button>
                    <span>{product?.quantity}</span>
                    <button className='flex items-center justify-center w-6 h-6 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white ' onClick={() => onIncreaseQty(product?._id, product?.quantity)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
