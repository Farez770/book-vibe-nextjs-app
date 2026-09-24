import Image from "next/image";
import React from "react";
import heroImg from "@/assets/heroBanner-cardImg1.png";
import Link from "next/link";

// type Props = {}

const HomeBanner = () => {
  return (
    <section className="container mx-auto px-6">
      {/* both left and right content are middle apply css for this responsive also*/}
      <div className="flex flex-col md:flex-row justify-around items-center bg-[#F5F5F5] px-7 py-8 rounded-lg mt-6 ">
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
      </div>
    </section>
  );
};

export default HomeBanner;
