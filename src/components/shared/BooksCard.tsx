import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { FiStar } from "react-icons/fi";

interface IBookCardProps {
  book: IBook;
}

const BooksCard = ({ book }: IBookCardProps) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative h-52 overflow-hidden rounded-xl bg-gray-100 sm:h-56 md:h-65">
        <Image
          src={image}
          alt={bookName}
          width={800}
          height={600}
          className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
          <span className="text-yellow-500">★</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 ring-1 ring-green-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Information */}
      <div className="mt-4">
        <h2 className="line-clamp-1 text-lg font-bold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-green-600 sm:text-xl">
          {bookName}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          By <span className="font-medium text-gray-800">{author}</span>
        </p>
      </div>

      {/* Book Metadata */}
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-gray-50 px-3 py-2">
        {/* Pages */}
        <div className="text-center">
          <p className="text-xs font-medium text-gray-400">Pages</p>

          <p className="mt-1 text-sm font-semibold text-gray-800">
            {totalPages}
          </p>
        </div>

        {/* Published */}
        <div className="border-x border-gray-200 text-center">
          <p className="text-xs font-medium text-gray-400">Published</p>

          <p className="mt-1 text-sm font-semibold text-gray-800">
            {yearOfPublishing}
          </p>
        </div>

        {/* Publisher */}
        <div className="text-center">
          <p className="text-xs font-medium text-gray-400">Publisher</p>

          <p
            className="mt-1 truncate text-sm font-semibold text-gray-800"
            title={publisher}
          >
            {publisher}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 border-t border-dashed border-gray-200"></div>

      {/* Bottom Information */}
      <div className="flex items-center justify-between">
        {/* Category */}
        <div>
          {/* <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Category
          </p> */}

          <p className="mt-1 text-sm font-medium text-gray-700">{category}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-xl text-yellow-500">★</span>

          <span className="text-sm font-semibold text-gray-800">{rating}</span>
        </div>
      </div>
      <Link href={`/books/${book.bookId}`} className="mt-3 w-full">
        <button className="mt-3 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer w-full">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default BooksCard;
