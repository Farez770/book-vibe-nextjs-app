"use client";
import { BooksContext } from "@/context/BooksContextProvider";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  //   const bookProvider = useContext(BooksContext);
  //   console.log(bookProvider);x
  //   const { wishlist, setWishlist } = useContext(BooksContext);
  const { wishlist, setWishlist } = useContext(BooksContext) as {
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleWishlist = () => {
    console.log("wish List Button Trigger", book);
    // setReadBooks((prevReadBooks: IBook) => [...prevReadBooks, book]);
    setWishlist([...wishlist, book]);
    // alert(`You have add ${book.bookName} to ypur wish list`);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };

  return (
    <div>
      <button
        className="btn border-0 bg-[#50B1C9] px-8 text-white hover:bg-[#3bb6d4]"
        onClick={() => handleWishlist()}
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishlistButton;
