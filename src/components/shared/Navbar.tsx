import Link from "next/link";
import React from "react";
import logo from "@/assets/book.ico";
import Image from "next/image";
// type Props = {};

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/" className="font-semibold text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link href="/listed-books" className="font-semibold text-lg">
          {" "}
          Listed Books
        </Link>
      </li>
      <li>
        <Link href="/page-to-read" className="font-semibold text-lg">
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <Link href="/" className="btn border-0 text-xl font-bold">
            <Image src={logo} alt="Logo image" className="w-7.5" />
            Book Vibe
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn text-white font-semibold text-lg bg-[#23BE0A] px-5 py-5 ">
          Sign In
        </a>
        <a className="btn text-white font-semibold text-lg bg-[#59C6D2] px-5 py-5">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
