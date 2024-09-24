
import Image from 'next/image'
import CANCELIMAGE from '../../assets/cancel.gif'
import Link from 'next/link'


const Cancel = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full max-w-md p-4 m-2 mx-auto rounded bg-slate-200'>
            <Image
                alt='cancel'
                src={CANCELIMAGE}
                width={150}
                height={150}
                className='mix-blend-multiply'
            />
            <p className='text-xl font-bold text-red-600'>Payment Cancel</p>
            <Link href={"/cart"} className='p-2 px-3 mt-5 font-semibold text-red-600 border-2 border-red-600 rounded hover:bg-red-600 hover:text-white'>Go To Cart</Link>
        </div>
    )
}

export default Cancel