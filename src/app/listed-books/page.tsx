"use client";
// import BooksCard from "@/components/shared/BooksCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContextProvider";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

// type Props = {}

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  const { readBooks, wishlist } = useContext(BooksContext) as {
    readBooks: IBook[];
    wishlist: IBook[];
  };

  // console.log(readBooks, wishlist, "Read bOkks", "WishList");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto px-6 py-[20px]">
      <h1 className="my-4 bg-gray-200 rounded-2xl py-8 font-bold text-4xl text-center">
        Listed Books
      </h1>

      <div className="text-center my-4">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Sort By"
          className="select select-success "
        >
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publisher year</option>
        </select>
      </div>
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
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book: IBook) => {
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
            {sortedWishlist.length > 0 ? (
              sortedWishlist.map((book: IBook) => {
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
