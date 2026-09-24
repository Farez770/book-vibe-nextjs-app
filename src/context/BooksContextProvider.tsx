"use client";
// import { IBook } from "@/types/books.type";
import React, { createContext, ReactNode, useState } from "react";

// interface IBooksContext {
//   readBooks: IBook[];
//   setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
//   wishlist: IBook[];
//   setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
// }

export const BooksContext = createContext({});
// export const BooksContext = createContext<IBooksContext>({});
// export const BooksContext = createContext<IBooksContext>({
//   readBooks: [],
//   setReadBooks: () => {},
//   wishlist: [],
//   setWishlist: () => {},
// });

const BooksContextProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
