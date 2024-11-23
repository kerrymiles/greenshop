import { plants } from "@/data/data";
import Image from "next/image";
import Button from "@/components/ui/GreenBtn";

export default function Page(
    { params }: { params: { id: string } }
) {
    const { id } = params;

    for (const plant of plants) {
        console.log(plant.name)
        if ((plant.name).split(' ').join('_').toLowerCase() === id) {
            return (
                <div className="flex flex-col w-full items-center text-center">
                    <Image
                        src={plant.imgLink}
                        alt={plant.name}
                        width={300}
                        height={300}
                    />
                    <div className="flex flex-col items-center">
                        <h2>{plant.name}</h2>
                        <p>Category: {plant.category}</p>
                        <p>Price: {plant.price}</p>
                        <Button className="w-28 h-10 mt-2">Buy</Button>
                        <Button className="w-28 h-10 mt-2">Add to cart</Button>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>Info #{id}</div>
    );
}