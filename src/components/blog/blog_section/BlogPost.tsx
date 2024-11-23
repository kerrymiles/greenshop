import { StaticImageData } from "next/image";
import Image from "next/image";

export default function BlogPost(
    {
    title,
    date,
    content,
    image,
    link
}: {
        title: string;
        date: string;
        content: string;
        image: StaticImageData;
        link: string;
    }
) {
    return (
        <div className="flex flex-col w-64">
            <Image 
            src={image}
            width={250}
            height={250}
            alt=""
            />
            <div className="flex flex-col">
                <p className="text-sm text-green mt-2">{date}</p>
                <h2 className="text-xl font-bold leading-5">{title}</h2>
                <p className="mt-2">{content}</p>
            </div>
        </div>
    );
}