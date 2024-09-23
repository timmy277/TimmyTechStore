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
import { Carousel } from 'antd'



const BannerProduct = () => {

    const desktopImages = [image1, image2, image3, image4, image5]
    const mobileImages = [image1Mobile, image2Mobile, image3Mobile, image4Mobile, image5Mobile]

    return (
        <>
            <div className='container px-4 mx-auto rounded '>
                <div className='relative w-full h-[250px] md:h-[400px] bg-gray-200 overflow-hidden rounded-lg'>
                    {/**desktop and tablet version */}
                    <div className='hidden md:block'>
                        <Carousel autoplay draggable>
                            {desktopImages.map((imageURL, index) => (
                                <div key={index} className="relative w-full h-[400px]">
                                    <Image src={imageURL} layout="fill" className='rounded-lg' alt={`bannerImg-${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    {/**mobile version */}
                    <div className='hidden md:block'>
                        <Carousel autoplay>
                            {mobileImages.map((imageURL, index) => (
                                <div key={index} className="relative w-full h-[300px]">
                                    <Image src={imageURL} layout="fill" className='rounded-lg' alt={`bannerImg-${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerProduct