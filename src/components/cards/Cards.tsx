import Image from "next/image";
import img1 from "../../../public/sub_img/card1.png"
import img2 from "../../../public/sub_img/card2.png"
import Button from "../ui/GreenBtn";

export default function Cards() {
    return (
        <section className="mt-16 flex">
            <div className="flex w-1/2">
                <Image
                src={img1}
                width={200}
                height={200}
                alt=""/>
                <div className="w-full items-end">
                    <h3 className="uppercase font-bold text-base mt-6">Summer cactus & succulents</h3>
                    <p className="text-sm mt-2">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <Button className="h-10 px-3 py-2 mt-2 text-sm">Find More</Button>
                </div>
            </div>
            <div className="flex w-1/2 ml-6">
                <Image
                src={img2}
                width={200}
                height={200}
                alt=""
                />
                <div className="w-full items-end">
                    <h3 className="uppercase font-bold text-base mt-6">Summer cactus & succulents</h3>
                    <p className="text-sm mt-2">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <Button className="h-10 px-3 py-2 mt-2 text-sm">Find More</Button>
                </div>
            </div>
        </section>
    );
}