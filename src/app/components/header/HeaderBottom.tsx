import Link from "next/link";
import styled from "styled-components";


export default function HeaderBottom() {
    const ListNav = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];
    return (
        <>
            <nav>
                <ul className="flex space-x-4 justify-center items-center bg-white mx-auto h-7 shadow-xl max-w-full ">
                    {ListNav.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} className="text-primary/2 tracking-widest font-medium font-style: normal text-base hover:text-secondary mx-4 cursor-pointer relative after:absolute after:top-5 after:left-0 after:bg-secondary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-700;">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
