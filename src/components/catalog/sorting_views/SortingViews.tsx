import React from 'react'
import { asideCatalogHome, sizes } from "@/data/data";
import { plants } from '@/data/data';

const SortingViews = () => {
    return (
        <div className="text-1rem flex flex-col gap-6 px-6">
            <div className="flex flex-col gap-2">
                <h3 className="font-bold">{asideCatalogHome.header}</h3>
                <ul className="text-sm ml-2 flex flex-col gap-2">
                    {asideCatalogHome.items.map((item, index) => (

                        <li key={index} className='w-full flex flex-col'>
                            <button className="hover:text-green flex justify-between" aria-label={item}>
                                <span>{item}</span>
                                <span>
                                    (
                                        {plants.filter(plant => plant.category === item).length}
                                    )
                                </span>
                            </button>
                        </li>

                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-bold">Price Range</h3>
                <div className="text-sm">
                    <p>Cum in soon</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-bold">{sizes.header}</h3>
                <ul className="text-sm ml-2 flex flex-col gap-2">
                    {sizes.items.map((item, index) => (
                        <li key={index}>
                            <button className="hover:text-green" aria-label={item}>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    )
}

export default SortingViews
