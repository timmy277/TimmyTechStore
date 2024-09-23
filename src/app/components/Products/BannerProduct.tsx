"use client"
import Image from 'next/image'

import image1 from '../../../assets/banner/img1.webp'
import image2 from '../../../assets/banner/img2.webp'
import image3 from '../../../assets/banner/img3.jpg'
import image4 from '../../../assets/banner/img4.jpg'
import image5 from '../../../assets/banner/img5.webp'

import image1Mobile from '../../../assets/banner/img1_mobile.jpg'
import image2Mobile from '../../../assets/banner/img2_mobile.webp'
import image3Mobile from '../../../assets/banner/img3_mobile.jpg'
import image4Mobile from '../../../assets/banner/img4_mobile.jpg'
import image5Mobile from '../../../assets/banner/img5_mobile.png'



const BannerProduct = () => {


    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Số lượng slide hiển thị
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };

    return (
        <div className='container px-4 mx-auto rounded '>
            <div className='relative w-full h-56 md:h-72 bg-slate-200'>

                {/**desktop and tablet version */}
                <div className='hidden w-full h-full overflow-hidden md:flex'>
                    {
                        desktopImages.map((imageURl, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full transition-all' key={index}>
                                    <Image src={imageURl} className='w-full h-full' alt='bannerImg' />
                                </div>
                            )
                        })
                    }
                </div>


                {/**mobile version */}
                <div className='flex w-full h-full overflow-hidden md:hidden'>
                    {
                        mobileImages.map((imageURl, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full transition-all' key={index}>
                                    <Image src={imageURl} className='object-cover w-full h-full' alt='bannerImg' />
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default BannerProduct