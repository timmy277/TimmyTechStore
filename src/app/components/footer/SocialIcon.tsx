import Image from 'next/image';
import IconFacebook from '@/assets/iconSocial/facebook-f.png';
import IconInstagram from '@/assets/iconSocial/instagram2.png';
import IconTwitter from '@/assets/iconSocial/twitter2.png';
import IconYoutube from '@/assets/iconSocial/youtube.png';
import IconLinkedin from '@/assets/iconSocial/linkedin-in.png';

export default function SocialIcons() {
    return (
        <div className='flex justify-between gap-10 max-w-56 -ml-20'>
            <Image src={IconFacebook} alt="IconFacebook" />
            <Image src={IconTwitter} alt="IconTwitter" />
            <Image src={IconLinkedin} alt="IconLinkedin" />
            <Image src={IconYoutube} alt="IconYoutube" />
            <Image src={IconInstagram} alt="IconInstagram" />
        </div>
    );
}
