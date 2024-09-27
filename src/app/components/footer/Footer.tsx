import Image from 'next/image';
import FooterBG from '@/assets/footer-pattern.png';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLink';
import BackToTopButton from './BackToTopButton';
import SocialIcons from './SocialIcon';

export default function Footer() {
    return (
        <div className='max-w-full h-[44.084rem] flex mt-[4.3rem] pt-[14rem] text-white items-center'>
            <Image src={FooterBG} alt="FooterBG" className='absolute -z-1' />
            <div className='z-10 max-w-full px-[10%] w-full mx-auto flex flex-col gap-[8%] text-base leading-6 tracking-widest font-normal'>
                <div className='mx-auto w-full flex xs:flex-col lg:flex-row gap-36'>
                    <FooterInfo />
                    <FooterLinks />
                </div>
                <BackToTopButton />
                <div className="flex justify-center items-center gap-80">
                    <SocialIcons />
                    <p className="text-base font-normal tracking-[0.102rem] mt-[-0.1rem] sm:text-xs xs:text-center">© AltDesain Studio 2021 - All right reserved.</p>
                </div>
            </div>
        </div>
    );
}
