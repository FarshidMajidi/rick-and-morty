"use client";
import React, { ChangeEvent, useContext } from "react";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useRouter } from "next/navigation";
import { CharacterContext } from "@/context/character-ctx";

const Filter = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(CharacterContext);
  const { gender, search } = state;

  const handleChange = (e: unknown, gender: string) => {
    dispatch({ type: "CHANGE_GENDER", payload: { search, gender } });
  };

  const handleReset = () => {
    dispatch({
      type: "APPLY",
      payload: {
        gender: "",
        search: "",
      },
    });
    router.replace(`/character/?page=1`, undefined);
  };

  const handleClick = () => {
    dispatch({
      type: "APPLY",
      payload: {
        gender,
        search,
      },
    });
    router.replace(
      `/character/?page=1${!!search ? `&search=${search}` : ""}${
        !!gender ? `&gender=${gender}` : ""
      }`,
      undefined
    );
  };

  return (
    <div className="flex flex-col w-full border p-6 rounded-lg shadow-lg mb-8">
      <h2 className="flex justify-start text-[16px] font-bold py-2 text-sky-600">
        Filter Character
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
              payload: { search: e.currentTarget.value, gender },
            });
          }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          className="h-[48px] mb-3"
        />

        <ToggleButtonGroup
          color="primary"
          value={gender}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="female">female</ToggleButton>
          <ToggleButton value="male">male</ToggleButton>
          <ToggleButton value="genderless">genderless</ToggleButton>
          <ToggleButton value="unknown">unknown</ToggleButton>
        </ToggleButtonGroup>

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
