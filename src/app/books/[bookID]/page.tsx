import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";
// import Books from "../../../components/homapage/Books";

interface IBookDetailsPageProps {
  params: Promise<{
    bookID: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { bookID } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(bookID),
  ) as IBook;
  //   eproch 2:
  //   const book = booksData.find((book: IBook) => book.bookId === Number(bookID));
  //   eproch -3:
  //   const book = booksData.find(
  //     (book: IBook) => book.bookId === parseInt(bookID),
  //   );

  console.log(book);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="mb-8">
        <p className="text-sm font-medium text-green-600">Book Details</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore This Book
        </h1>
      </div>

      {/* Book Card */}
      <div className="card lg:card-side overflow-hidden border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl p-4">
        {/* Image */}
        <figure className="bg-gray-50 p-4 sm:p-5 lg:w-2/5 rounded-2xl">
          <div className="relative h-96 w-full overflow-hidden rounded-xl sm:h-[460px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain p-3 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </figure>

        {/* Details */}
        <div className="card-body p-5 sm:p-6 lg:w-3/5 lg:p-7">
          {/* Category + Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
              {book.category}
            </span>

            <div className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold">
              <span className="text-yellow-500">★</span>
              {book.rating}
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Written by{" "}
            <span className="font-semibold text-gray-800">{book.author}</span>
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="mt-4">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              About this book
            </h3>

            <p className="text-sm leading-6 text-gray-600 text-justify">
              {book.review}
            </p>
          </div>

          {/* Metadata */}
          <div className="mt-4 grid grid-cols-2 gap-2 rounded bg-gray-50 p-3 sm:grid-cols-4">
            <div>
              <p className="text-xs text-gray-400">Pages</p>
              <p className="mt-1 text-sm font-semibold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Published</p>
              <p className="mt-1 text-sm font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="min-w-0">
              <p className="text-xs text-gray-400">Publisher</p>
              <p className="mt-1 break-words text-sm font-semibold ">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Rating</p>
              <p className="mt-1 text-sm font-semibold">{book.rating} / 5</p>
            </div>
          </div>

          {/* Button */}
          <div className="card-actions mt-5">
            <ReadButton book={book} />
            <WishlistButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
