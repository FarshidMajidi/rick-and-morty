"use client";
import React, { ChangeEvent, useContext } from "react";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { LocationContext } from "@/context/location-ctx";

const Filter = () => {
  const router = useRouter();
  const {
    state: { search },
    dispatch,
  } = useContext(LocationContext);

  const handleReset = () => {
    dispatch({
      type: "APPLY",
      payload: {
        search: "",
      },
    });
    router.replace(`/location/?page=1`, undefined);
  };

  const handleClick = () => {
    dispatch({
      type: "APPLY",
      payload: {
        search,
      },
    });
    router.replace(
      `/location/?page=1${!!search ? `&search=${search}` : ""}`,
      undefined
    );
  };

  return (
    <div className="flex flex-col w-full border p-6 rounded-lg shadow-lg mb-8">
      <h2 className="flex justify-start text-[16px] font-bold py-2 text-sky-600">
        Filter Location By Name
      </h2>
      <div className="flex justify-between items-center">
        <OutlinedInput
          id="search"
          type="search"
          placeholder="Search ..."
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: "CHANGE_SEARCH",
              payload: { search: e.currentTarget.value },
            });
          }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          className="h-[48px] mb-3"
        />
        <div>
          <Button variant="outlined" color="primary" onClick={handleClick}>
            Search
          </Button>
          &nbsp;
          <Button variant="outlined" color="primary" onClick={handleReset}>
            reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
