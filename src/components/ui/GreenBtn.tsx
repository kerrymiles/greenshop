import React from 'react'
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
    onClick?: () => void;
}

const styles = 'inline-block shrink grow bg-green rounded-md hover:bg-darkGreen text-white font-bold'

const Button = (props: ButtonProps) => {
    const { href, ...rest } = props;
    const newStyles = `${styles} ${props.className ? props.className : ''}`;

    if (href) {
        return (
            <Link href={href} {...rest} className={newStyles}>
                {props.children}
            </Link>
        )
    }

    return (
        <button {...rest} className={newStyles}>
            {props.children}
        </button>
    )
}

export default Button;