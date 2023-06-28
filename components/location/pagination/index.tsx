"use client";
import { useContext } from "react";
import { LocationContext } from "@/context/location-ctx";
import { PaginationProps } from "@/types";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";

export const Paginate = ({ pageNumber, info }: PaginationProps) => {
  const {
    state: { search },
  } = useContext(LocationContext);
  return (
    <Pagination
      page={pageNumber}
      count={info?.pages || 1}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          href={`/location/?page=${item.page}${
            !!search ? `&search=${search}` : ""
          }`}
          {...item}
        />
      )}
    />
  );
};
