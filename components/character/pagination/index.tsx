"use client";
import { useContext } from "react";
import { PaginationProps } from "@/types";
import { CharacterContext } from "@/context/character-ctx";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";

export const Paginate = ({ pageNumber, info }: PaginationProps) => {
  const { state } = useContext(CharacterContext);
  const { gender, search } = state;
  return (
    <Pagination
      page={pageNumber}
      count={info?.pages || 1}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          href={`/character/?page=${item.page}${!!search ? `&search=${search}` : ""}${
            !!gender ? `&gender=${gender}` : ""
          }`}
          {...item}
        />
      )}
    />
  );
};
