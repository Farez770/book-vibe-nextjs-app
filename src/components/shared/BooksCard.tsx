// import React from "react";

// // type Props = {}

// const BooksCard = ({ book }) => {
//   return <div>BooksCard</div>;
// };

// export default BooksCard;
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";
// import { FiStar } from "react-icons/fi";

interface IBookCardProps {
  book: IBook;
}

const BooksCard = ({ book }: IBookCardProps) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <div className=" group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative h-52 overflow-hidden rounded-xl bg-gray-100 sm:h-56 md:h-65">
        <Image
          src={image}
          alt={bookName}
          width={800}
          height={600}
          className=" h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
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
            className=" rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 ring-1 ring-green-100"
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
          By : <span className="font-medium text-gray-700">{author}</span>
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-dashed border-gray-200"></div>

      {/* Bottom Information */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Category
          </p>

          <p className="mt-1 text-sm font-medium text-gray-700">{category}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
