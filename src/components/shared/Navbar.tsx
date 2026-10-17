import Link from "next/link";
import React from "react";
import logo from "@/assets/book.ico";
import Image from "next/image";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/" className="font-semibold hover:bg-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link href="/books" className="font-semibold ">
          All Books
        </Link>
      </li>
      <li>
        <Link href="/listed-books" className="font-semibold ">
          {" "}
          Listed Books
        </Link>
      </li>
      <li>
        <Link href="/page-to-read" className="font-semibold ">
          Pages to Read
        </Link>
      </li>
    </>
  );
  const authLinks = (
    <>
      <li>
        <Link
          href="#"
          className="btn text-white font-semibold text-lg bg-[#23BE0A] px-6 py-5 mb-2"
        >
          Sign In
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="btn text-white font-semibold text-lg bg-[#59C6D2] px-6 py-5"
        >
          Sign Up
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost font-bold lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-100 mt-6 w-72 p-2 shadow flex flex-col justify-center items-center gap-2"
            >
              {links}
              <div className="sm:hidden">{authLinks}</div>
            </ul>
          </div>
          <div>
            <Link href="/" className="btn border-0 font-bold">
              <Image src={logo} alt="Logo image" className="md:w-7.5" />
              <span className="md:text-xl">Book Vibe</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 py-2 z-10 bg-white ">
            {links}
          </ul>
        </div>
        <div className="hidden sm:block sm:flex sm:justify-end navbar-end gap-2">
          <Link
            href="#"
            className="btn text-white font-semibold text-lg bg-[#23BE0A] px-5 py-5 "
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="btn text-white font-semibold text-lg bg-[#59C6D2] px-5 py-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
