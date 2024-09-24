"use client"
import Link from 'next/link'
import SUCCESSIMAGE from '../../assets/success.gif'
import Image from 'next/image'

export default function Success () {
    return (
        <div className='flex flex-col items-center justify-center w-full max-w-md p-4 m-2 mx-auto rounded bg-slate-200'>
            <Image
                src={SUCCESSIMAGE}
                width={150}
                height={150}
                alt='img'
            />
            <p className='text-xl font-bold text-green-600'>Payment Successfully</p>
            <Link href={"/order"} className='p-2 px-3 mt-5 font-semibold text-green-600 border-2 border-green-600 rounded hover:bg-green-600 hover:text-white'>See Order</Link>
        </div>
    )
}

