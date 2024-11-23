import React from "react";

interface ListProps {
    header: string;
    items: string[];
    className?: string;
    altHeaderClass?: string;
    altItemClass?: string;
}

export default function List({props}: {props: ListProps}) {
    return (
        <div>
            <h2>props.header</h2>
            <nav>
                <ul>
                    {props.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}