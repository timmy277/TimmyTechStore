import Link from 'next/link';
import Image from 'next/image';
import FooterLogo from '@/assets/logo.png';

export default function FooterInfo() {
    return (
        <div className='flex flex-col lg:w-1/2 xs:w-[100%] md:w-[80%] mt-[1.1rem] justify-center xs:mx-auto lg:mx-0'>
            <div className="md:pl-[2rem] xs:pl-0 pt-[2rem] md:pt-0 md:mb-6 sm:pt-0 sm:mb-6">
                <div className="flex">
                    <Link href="/" onClick={() => window.scrollTo(0, 0)} className='w-12 h-12'>
                        <Image src={FooterLogo} alt="FooterLogo" className='md:mb-1.5 sm:mb-1.5 w-12 h-12' />
                    </Link>
                    <p className="mb-[1.4rem] tracking-[0.106em] xs:w-[100%] xs:text-center xs:text-md md:text-lg">
                        <b>TimmyTechStore</b> - Discover limitless possibilities with the latest tech
                    </p>
                </div>
                <p className="italic text-center text-sm font-medium leading-[1.313rem] tracking-[0.101em] xs:hidden md:block">Baker Street 101, NY, United States.</p>
                <div className="flex gap-[2.6rem] ml-[-0.1rem] italic text-sm font-medium leading-[1.313rem] tracking-[0.101em] mt-[0.3rem] xs:flex-col xs:text-center xs:gap-0 xs:hidden md:block">
                    <p className='xs:hidden md:block'>+521 569 8966.</p>
                    <p className="underline xs:hidden md:block">mail@timmytechstore.com.</p>
                </div>
            </div>
        </div>
    );
}
