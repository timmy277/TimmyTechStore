import displayCurrency from '@/helper/displayCurrency';

interface CartSummaryProps {
    totalQty: number;
    totalPrice: number;
    onPayment: () => void;
}

const CartSummary = ({ totalQty, totalPrice, onPayment }: CartSummaryProps) => {
    return (
        <div className='w-full max-w-sm mt-5 lg:mt-0'>
            <div className='bg-white h-36'>
                <h2 className='px-4 py-1 text-white bg-red-600'>Summary</h2>
                <div className='flex items-center justify-between gap-2 px-4 text-lg font-medium text-slate-600'>
                    <p>Quantity</p>
                    <p>{totalQty}</p>
                </div>
                <div className='flex items-center justify-between gap-2 px-4 text-lg font-medium text-slate-600'>
                    <p>Total Price</p>
                    <p>{displayCurrency(totalPrice)}</p>
                </div>
                <button className='w-full p-2 mt-2 text-white bg-blue-600' onClick={onPayment}>Checkout</button>
            </div>
        </div>
    );
}

export default CartSummary;
