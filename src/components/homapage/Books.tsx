import React from "react";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/types/books.type";
import Link from "next/link";

// type Props = {};

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

const Books = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    // <section className="container mx-auto px-6 my-8">
    //   <div>
    //     <div className="flex items-center justify-center mb-6">
    //       <h1 className="text-2xl font-bold">Books</h1>
    //     </div>
    //     <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    //       {books.map((book: IBook) => (
    //         <BooksCard key={book.bookId} book={book} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        {/* <p className="text-sm sm:text-base font-medium text-green-600 mb-2">
          Explore Our Collection
        </p> */}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Popular Books
        </h1>

        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
          Discover amazing books from different genres and find your next
          favorite read.
        </p>

        {/* Small divider */}
        <div className="flex justify-center mt-5">
          <div className="h-1 w-16 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
        {books.slice(0, 5).map((book: IBook) => (
          <BooksCard key={book.bookId} book={book} />
        ))}
      </div>
      <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
        <Link href="/books">
          <button className="mt-4 rounded-md bg-green-500 px-4 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer">
            View All Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Books;
