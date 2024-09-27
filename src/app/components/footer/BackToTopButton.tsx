import Image from 'next/image';
import ButtonBackToTop from '@/assets/ToTopButton.png';

export default function BackToTopButton() {
    const backToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button aria-label='Back to top' className='fixed border-none bottom-[10.6rem] right-16 cursor-pointer'>
            <Image src={ButtonBackToTop} alt="Back to top" onClick={backToTop} />
        </button>
    );
}
