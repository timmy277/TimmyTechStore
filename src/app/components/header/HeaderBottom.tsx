import Link from "next/link";


export default function HeaderBottom() {
    const ListNav = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Service', path: '/' },
        { name: 'Gallery', path: '/' },
        { name: 'Blog', path: '/' },
        { name: 'Contact', path: '/' },
    ];
    return (
        <>
            <nav className="md:block xs:hidden">
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
