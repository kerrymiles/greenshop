import CatalogItems from "./catalog_items/CatalogItems";
import SortingViews from "./sorting_views/SortingViews";
import superSaleBanner from "../../../public/super_sale_banner.png"
import Image from "next/image";
import { plants } from "@/data/data";

export default function Catalog() {
    const itemsPerPage = 9;
    const totalPages = Math.ceil(plants.length / itemsPerPage);

    return (
        <section className="mt-12">
            <div className="text-base flex w-full transition-all">
                <div className="block w-3/12 max-w-72"></div>
                <div className="block w-15"></div>
                <div className="flex justify-between w-full">
                    <div className="flex gap-6">
                        <button className="hover:text-green hover:border-b-2 hover:border-green hover:font-bold">All plants</button>
                        <button className="hover:text-green hover:border-b-2 hover:border-green hover:font-bold">New arrivals</button>
                        <button className="hover:text-green hover:border-b-2 hover:border-green hover:font-bold">Sale</button>
                    </div>
                    <div>
                        <span>Short by: </span>
                        <button>Default sorting</button>
                    </div>
                </div>
            </div>
            <section className="flex gap-12 mt-3">
                <aside className="bg-alternate-white py-6 w-3/12 max-w-72">
                    <SortingViews />
                    <Image
                        className="mt-6"
                        src={superSaleBanner}
                        alt="Sale banner"
                        sizes="100%"
                        style={{
                            height: 'auto',
                            width: '100%',
                        }}
                    />
                </aside>
                <section className="w-full grid grid-cols-3 py-6 gap-4 bg-alternate-white px-6">
                    <CatalogItems />
                </section>
            </section>
            <div className="flex justify-end gap-3 mt-3">
                {totalPages * 5 <= 4 ? (
                    [...Array(totalPages)].map((_, index) => (
                        <button key={index} className="px-3 py-1 font-light text-xl rounded border border-black hover:bg-green hover:text-white hover:border-0">
                            {index + 1}
                        </button>
                    ))
                )
                    :
                    [
                        [...Array(totalPages)].map((_, index) => (
                            <button key={index} className="font-light text-2xl w-10 h-auto rounded border border-btnWhite hover:bg-green hover:text-white hover:border-0">
                                {index + 1}
                            </button>
                        )),
<button className="border border-btnWhite rounded hover:bg-green" aria-label="Next items">
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="hover:stroke-white w-10 h-auto p-2">
        <path d="M6.375 3.75C6.375 3.75 11.625 6.858 11.625 9C11.625 11.1413 6.375 14.25 6.375 14.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
</button>

                    ]
                }
            </div>
        </section>
    );
}