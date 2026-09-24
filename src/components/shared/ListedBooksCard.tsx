// export default ListedBooksCard;
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import { LuMapPin, LuUsers, LuBookOpen } from "react-icons/lu";

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Book Image */}
        <div className="shrink-0">
          <div className="relative mx-auto h-44 w-36 overflow-hidden rounded-xl bg-gray-100 sm:mx-0 sm:h-[186px] sm:w-[186px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="(max-width: 640px) 144px, 186px"
              className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Book Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Title */}
          <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-700">
            By <span className="font-medium">{book.author}</span>
          </p>

          {/* Tags + Published Year */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">Tag</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}

            <span className="ml-1 flex items-center gap-1.5 text-sm text-gray-500">
              <LuMapPin className="text-gray-500" size={17} />
              Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <LuUsers size={18} />
              Publisher: {book.publisher}
            </span>

            <span className="flex items-center gap-1.5">
              <LuBookOpen size={18} />
              Page {book.totalPages}
            </span>
          </div>

          {/* Divider */}
          <div className="my-3 border-t border-gray-200" />

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-500">
              Category: {book.category}
            </span>

            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500">
              Rating: {book.rating}
            </span>

            <Link href={`/books/${book.bookId}`}>
              <button className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
