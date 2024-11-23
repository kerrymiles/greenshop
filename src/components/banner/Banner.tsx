// Banner.tsx
"use client";

import React from 'react';
import BannerCard from './BannerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { bannerData } from '@/data/data';

import bannerImage from '../../../public/banner_plants.png';
import TreeHand from '../../../public/tree_in_hand.webp';
import Elephants from '../../../public/elephants.jpg';

const Banner: React.FC = () => {
    const paginationConfig = {
        clickable: true,
        renderBullet: (_index: number, className: string) => {
            return `<span class="${className}"></span>`;
        },
    };

    const images = [bannerImage, TreeHand, Elephants]; // Массив с импортированными изображениями

    return (
        <div className="bg-alternate-white mt-3 w-full h-full flex flex-col items-center">
            <Swiper
                pagination={paginationConfig}
                modules={[Pagination, Autoplay, Navigation]}
                className="w-full h-full h-96"
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                navigation={true}
            >
                {bannerData.map((content, index) => (
                    <SwiperSlide key={index} className='w-full h-inherit bg-green-200'>
                        <BannerCard key={index} data={{ ...content, image: images[index] }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
