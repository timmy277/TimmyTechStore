"use client"
import React from 'react';
import { Button, Drawer } from 'antd';
import { FaAddressBook, FaAddressCard, FaBars, FaBlogger, FaHome } from 'react-icons/fa';
import { RiGalleryFill } from "react-icons/ri";
import Link from 'next/link';
import { IoIosContacts, IoMdSearch } from 'react-icons/io';
import Image from 'next/image';

export default function SideDrawer() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const ListNav = [
    { name: 'Home', path: '/', label: <FaHome /> },
    { name: 'About', path: '/about', label: <FaAddressCard /> },
    { name: 'Service', path: '/service', label: <FaAddressBook /> },
    { name: 'Gallery', path: '/gallery', label: <RiGalleryFill /> },
    { name: 'Blog', path: '/blog', label: <FaBlogger /> },
    { name: 'Contact', path: '/contact', label: <IoIosContacts /> },
  ];

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        <FaBars />
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={<p></p>}
        placement="left"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <div className="relative items-center justify-center gap-4 ">
          <input type="text" name="search" id="search" placeholder="Search..." className="max-w-full w-[500px] rounded-lg border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "/>
          <IoMdSearch className="absolute text-primary -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
        </div>
        <nav className="md:hidden xs:block mt-48 ">
          <ul className="flex flex-col justify-center mx-auto h-7 gap-2 max-w-full ">
            {ListNav.map((item, index) => (
              <li key={index} className='w-full group hover:bg-primary p-4 rounded flex items-center gap-3'>
                <div className='text-primary group-hover:text-white'>{item.label}</div>
                <Link href={item.path} className=" text-primary group-hover:text-white uppercase text-left tracking-widest font-medium font-style:normal text-base cursor-pointer ">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

