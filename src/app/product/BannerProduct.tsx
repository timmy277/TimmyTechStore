"use client"
import Image from 'next/image'
import { Carousel } from 'antd'
import Image1 from '@/assets/banner/SAMSUNG Galaxy A23 (Peach, 128 GB) (8 GB RAM) 2.webp'
import Image2 from '@/assets/banner/Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black) 1.jpg'
import Image3 from '@/assets/banner/SAMSUNG QN700BK 163 cm (65 inch) QLED Ultra HD (8K) Smart Tizen TV (QA65QN700BKXXL) 1.webp'
import Image4 from '@/assets/banner/sale.png'
import Image5 from '@/assets/banner/Zoook Bomber Wired Optical Mouse (USB 2.0, Black) 1.webp'
const BannerList = [
    {
        id: 1,
        image: Image1,
        title: "Samsung Galaxy A23 - Elevate Your Tech Experience!",
        description: "Discover the ultimate experience with the Samsung Galaxy A23, featuring 8GB RAM and 128GB storage. Now available at up to 50% off!",
    },
    {
        id: 2,
        image: Image2,
        title: "Canon EOS 200D II - The Perfect Choice!",
        description: "Capture every moment with the Canon EOS 200D II 24.1MP camera, now 30% off on all camera products.",
    },
    {
        id: 3,
        image: Image3,
        title: "Samsung QLED 8K TV - A Realistic Viewing Experience!",
        description: "Get the 65-inch Samsung QLED TV with 8K technology at 70% off! Elevate your home entertainment experience today.",
    },
    {
        id: 4,
        image: Image4,
        title: "Season Sale - Shop Now, Don’t Wait!",
        description: "Up to 70% off on all products during our special promotion. Limited stock available, order now!",
    },
    {
        id: 5,
        image: Image5,
        title: "Zoook Bomber Mouse - Unmatched Performance!",
        description: "The perfect device for your computing needs. The Zoook Bomber Mouse is now 70% off, don't miss out!",
    }
];

const BannerProduct = () => {


    return (
        <>
            <div className='max-w-full px-4 mx-auto rounded mt-5 '>
                <div className='max-w-full bg-white overflow-hidden max-h-[400px] rounded-lg'>
                    {/**desktop and tablet version */}
                    <div className='block'>
                        <Carousel autoplay draggable>
                            {BannerList.map((data, index) => (
                                <div key={index} className="relative w-full h-[400px]">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 px-8">
                                        {/* text content section */}
                                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-4xl sm:text-3xl lg:text-4xl font-bold">{data.title}</h1>
                                            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">{data.description}</p>
                                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className="">
                                                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full hover:scale-105 duration-200">Order Now</button>
                                            </div>
                                        </div>

                                        {/* image section */}
                                        <div className="order-1 sm:order-2">
                                            <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                                                <Image src={data.image} alt="img" className="w-[200px] h-[200px] object-contain mx-auto" />
                                            </div> 
                                        </div>
                                    </div>
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