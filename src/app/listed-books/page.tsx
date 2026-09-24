"use client";
import { BooksContext } from "@/context/BooksContextProvider";
import React, { useContext } from "react";

// type Props = {}

const page = () => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  console.log(readBooks, "Read bOkks");

  return (
    <div>
      <h1>This is Listed Books page</h1>
    </div>
  );
};

export default page;
