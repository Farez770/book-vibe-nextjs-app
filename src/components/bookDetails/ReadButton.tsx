"use client";
import { BooksContext } from "@/context/BooksContextProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  //   const bookProvider = useContext(BooksContext);
  //   console.log(bookProvider);x
  //   const { readBooks, setReadBooks } = useContext(BooksContext);
  const { readBooks, setReadBooks } = useContext(BooksContext) as {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleReadBook = () => {
    console.log("Read Book Button Trigger", book);
    // setReadBooks((prevReadBooks: IBook) => [...prevReadBooks, book]);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`);
    // alert(`You have read ${book.bookName}`);
  };

  return (
    <div>
      <button className="btn border  px-8" onClick={() => handleReadBook()}>
        Read
      </button>
    </div>
  );
};

export default ReadButton;
