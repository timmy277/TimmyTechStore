import Link from 'next/link';
import IconFacebook from '@/assets/iconSocial/facebook-f.png'
import IconInstagram from '@/assets/iconSocial/instagram2.png'
import IconTwitter from '@/assets/iconSocial/twitter2.png'
import IconYoutube from '@/assets/iconSocial/youtube.png'
import IconLinkedin from '@/assets/iconSocial/linkedin-in.png'
import FooterLogo from '@/assets/logo.png'
import Image from 'next/image';
import ButtonBackToTop from '@/assets/ToTopButton.png'
import FooterBG from '@/assets/footer-pattern.png'


export default function Footer() {
    return (
        <div className='max-w-full h-[44.084rem] flex mt-[4.3rem] pt-[14rem] text-white items-center'>
            <Image src={FooterBG} alt="FooterBG" className='absolute -z-1' />
            <div className='z-10 max-w-[71.25rem] w-full mx-auto flex flex-col gap-8 text-base leading-6 tracking-widest font-normal bg-full '>
                <div className='mx-auto w-full flex justify-between'>
                    <div className='max-w-[30.75rem] flex flex-col w-1/2 mt-[1.1rem] justify-center'>
                        <div>
                            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                                <Image src={FooterLogo} alt="FooterLogo" className='md:mb-1.5 sm:mb-1.5 w-12 h-12' />
                            </Link>
                        </div>
                        <div className="pl-[2rem] pt-[2rem] md:pt-0 md:pl-0 md:mb-6 sm:pl-0 sm:pt-0 sm:mb-6">
                            <p className=" mb-[1.4rem] tracking-[0.106em] xs:w-[100%] xs:text-center"><b>TimmyTechStore</b> - Discover limitless possibilities with the latest tech</p>
                            <p className="italic text-sm font-medium leading-[1.313rem] tracking-[0.101em]">Baker Steet 101, NY, United States.</p>
                            <div className="flex gap-[2.6rem] ml-[-0.1rem] italic text-sm font-medium leading-[1.313rem] tracking-[0.101em] mt-[0.3rem] xs:flex-col xs:text-center xs:gap-0">
                                <p>+521 569 8966.</p>
                                <p className="underline">mail@timmytechstore.com.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-60'>
                        <div>
                            <span className='font-medium text-lg leading-[1.688rem] tracking-widest text-white'>Pages</span>
                            <ul className="ml-[1rem] mt-[1.7rem]">
                                <li className='list-none ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>
                                    <Link href="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                                </li>
                                <li className='list-none  ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>
                                    <Link href="/About" onClick={() => window.scrollTo(0, 0)}>About</Link>
                                </li>
                                <li className='list-none  ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>
                                    <Link href="/Service" onClick={() => window.scrollTo(0, 0)}>Services</Link>
                                </li>
                                <li className='list-none   ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>
                                    <Link href="/Gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
                                </li>
                                <li className='list-none ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>
                                    <Link href="/" onClick={() => window.scrollTo(0, 0)}>Team</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className='font-medium text-lg leading-[1.688rem] tracking-widest text-white'>Informations</span>
                            <ul className="ml-[1rem] mt-[1.7rem]">
                                <li className='list-none list-image-vector  ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>Terms &amp; conditions</li>
                                <li className='list-none list-image-vector  ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>Privacy policy</li>
                                <li className='list-none list-image-vector  ml-[-0.063rem] font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]'>
                                    <Link href="/Blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                                </li>
                                <li>
                                    <Link href="/Contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button aria-label='Back to top' className='fixed border-none bottom-[10.6rem] right-16 cursor-pointer'>
                    <Image src={ButtonBackToTop} alt="ButtonBackToTop" id='btnBacktoTop' onClick={backToTop} />
                </button>
                <div className="flex justify-between">
                    <div className='flex justify-between gap-10 max-w-56'>
                        <Image src={IconFacebook} alt="IconFacebook" />
                        <Image src={IconTwitter} alt="IconclassNameitter" />
                        <Image src={IconLinkedin} alt="IconLinkedin" />
                        <Image src={IconYoutube} alt="IconYoutube" />
                        <Image src={IconInstagram} alt="IconInstagram" />
                    </div>
                    <p className="text-base font-normal tracking-[0.102rem] mt-[-0.1rem] sm:text-xs xs:text-center">© AltDesain Studio 2021 - All right reserved.</p>
                </div>
            </div>
        </div>
    )
}

function backToTop() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
