import Image from "next/image";
import React from "react";
import heroImg from "@/assets/heroBanner-cardImg1.png";
import heroImg2 from "@/assets/hero_img.jpg";

import Link from "next/link";

// type Props = {}

const HomeBanner = () => {
  return (
    <section className="container mx-auto px-6">
      {/* <div className="flex flex-col md:flex-row justify-around items-center bg-[#eeecec] px-7 py-10 rounded-2xl mt-6 ">
        <div>
          <h1 className="text-5xl font-bold leading-14 mb-6">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="bg-[#23BE0A] text-white py-2 px-4 rounded">
            <Link href="/listed-books">View The List</Link>
          </button>
        </div>
        <div>
          <Image src={heroImg} alt="Hero Banner Image" />
        </div>
      </div> */}
      <div className="relative mt-6 overflow-hidden rounded-2xl bg-linear-to-br from-[#f5f7f4] via-[#eef6ec] to-[#e6f4e3] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#23BE0A]/10 sm:h-56 sm:w-56 md:h-64 md:w-64"></div>

        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#23BE0A]/5 sm:h-52 sm:w-52"></div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:gap-8">
          {/* Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            {/* Badge */}
            <span className="mb-4 inline-block rounded-full bg-[#23BE0A]/10 px-3 py-1.5 text-xs font-semibold text-[#23BE0A] sm:px-4 sm:py-2 sm:text-sm">
              📚 Discover Your Next Favorite Book
            </span>

            {/* Heading */}
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Books to freshen up{" "}
              <span className="text-[#23BE0A]">your bookshelf</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-6 max-w-lg text-sm leading-6 text-gray-600 sm:text-base md:text-lg lg:mx-0">
              Explore amazing stories, discover new authors, and build a
              bookshelf filled with books you&apos;ll love.
            </p>

            {/* Button */}
            <Link
              href="/listed-books"
              className="inline-flex items-center gap-2 rounded-lg bg-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#23BE0A]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa308] hover:shadow-lg sm:px-6 sm:py-3 sm:text-base"
            >
              View The List
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="relative">
              {/* Image glow */}
              <div className="absolute inset-0 scale-75 rounded-full bg-[#23BE0A]/10 blur-3xl"></div>

              <Image
                src={heroImg}
                // src={heroImg2}
                alt="Books collection"
                priority
                className="relative z-10 w-48 object-contain drop-shadow-2xl sm:w-56 md:w-64 lg:w-72 xl:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
