// BannerCard.tsx
"use client";

import Image, { StaticImageData } from 'next/image';
import Button from '../ui/GreenBtn';
import { BannerContent } from '@/data/bannerText';

interface BannerCardProps {
    data: BannerContent & { image: StaticImageData };
}

export default function BannerCard({ data }: BannerCardProps) {
    const { title, subtitle, description, image, button, href } = data;

    return (
        <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-6">
            <div className="w-full h-full lg:w-1/2 ml-6">
                <h2 className="uppercase text-sm xl:text-base font-medium">{title}</h2>
                <h1
                    className="uppercase text-5xl xxl:text-7xl font-black mt-2"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
                <p
                    className="mt-3 text-sm xl:text-base text-darkWhite"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <Button href={href} className="uppercase py-3 px-6 mt-10">{button}</Button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mr-10">
                <Image
                    className="ml-auto"
                    src={image}
                    alt="Banner image"
                    sizes="100%"
                    style={{
                        width: '75%',
                        height: 'auto',
                        minWidth: '30svw',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </section>
    );
}
