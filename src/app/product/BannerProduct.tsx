"use client"
import Image from 'next/image'
import { Carousel } from 'antd'
import { BannerList } from '@/helper/BannerProductList'

const BannerProduct = () => {
    return (
        <section className='max-w-full px-4 mx-auto rounded mt-5 '>
            <div className='max-w-full bg-white overflow-hidden max-h-[400px] rounded-lg'>
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
        </section>
    )
}

export default BannerProduct