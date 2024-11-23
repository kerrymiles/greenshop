import { plants } from "@/data/data"
import Link from "next/link";
import Image from "next/image";
import { Span } from "next/dist/trace";

function toSnakeCase(text: string): string {
    return text
        .toLowerCase()        // Переводим строку в нижний регистр
        .replace(/\s+/g, '_'); // Заменяем пробелы на подчеркивания
}

const CatalogItems = () => {
    const classPrice = 'font-bold text-green text-lg';

    return (
        <>
            {plants.map((plant, index) => {
                return (
                    <article key={index} className="hover:text-green hover:border-t-2 hover:border-green bg-white px-3 py-3">
                        <Link href={`/shop/${toSnakeCase(plant.name)}`} className="flex flex-col text-center justify-center">
                            <Image
                                className="m-auto"
                                src={plant.imgLink}
                                alt={plant.name}
                                sizes="100%"
                                width={300}
                                height={300}
                            />
                            <div className="flex flex-col">
                                <p className="text-base">{plant.name}</p>

                                {!plant.onSale ? (<p className={classPrice}>{plant.price}</p>) : (<p className={`${classPrice}`}><span>{plant.newPrice}</span><span className="font-light text-xs absolute ml-2 text-darkWhite"><s>{plant.price}</s></span></p>)}
                            </div>
                        </Link>
                    </article>
                )
            })}
        </>
    )
}

export default CatalogItems
