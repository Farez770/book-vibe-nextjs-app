"use client";
// import BooksCard from "@/components/shared/BooksCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContextProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

// type Props = {}

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext) as {
    readBooks: IBook[];
    wishlist: IBook[];
  };

  console.log(readBooks, wishlist, "Read bOkks", "WishList");

  return (
    <div className="container mx-auto px-6 py-[20px]">
      <h1 className="my-4 bg-amber-100 rounded-3xl py-8 font-bold text-4xl text-center">
        Listed Books
      </h1>
      {/* <h1>
        Total Read Book : {readBooks.length} | Total wishlist book :{" "}
        {wishlist.length}
      </h1> */}
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Read Books (${readBooks.length})`}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
            {readBooks.length > 0 ? (
              readBooks.map((book: IBook) => {
                return <ListedBooksCard key={book.bookId} book={book} />;
              })
            ) : (
              <p className="text-center text-lg font-semibold">
                No Read books found
              </p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`WishList Books (${wishlist.length})`}
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
            {wishlist.length > 0 ? (
              wishlist.map((book: IBook) => {
                return <ListedBooksCard key={book.bookId} book={book} />;
              })
            ) : (
              <p className="text-center text-lg font-semibold">
                No Listed books found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
