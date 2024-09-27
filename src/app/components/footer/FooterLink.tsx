import Link from 'next/link';

export default function FooterLinks() {
    return (
        <div className='flex w-1/2 md:gap-[160px] xs:gap-5 xs:ml-5'>
            <div>
                <span className='font-medium text-lg leading-[1.688rem] tracking-widest text-white'>Pages</span>
                <ul className=" md:mt-[1.7rem] xs:mt-0">
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/About" onClick={() => window.scrollTo(0, 0)}>About</Link>
                    </li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/Service" onClick={() => window.scrollTo(0, 0)}>Services</Link>
                    </li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/Gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
                    </li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/" onClick={() => window.scrollTo(0, 0)}>Team</Link>
                    </li>
                </ul>
            </div>
            <div>
                <span className='font-medium text-lg leading-[1.688rem] tracking-widest text-white'>Informations</span>
                <ul className=" md:mt-[1.7rem] xs:mt-0">
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>Terms &amp; conditions</li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>Privacy policy</li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/Blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                    </li>
                    <li className='list-none text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs mb-[0.7rem]'>
                        <Link href="/Contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
