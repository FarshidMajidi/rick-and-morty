"use client";
import { Button } from "@mui/material";
import { removeItem } from "./action";

export default function RemoveFavorite() {
  return (
    <form>
      <Button
        variant="outlined"
        size="small"
        type="submit"
        className="text-[10px]"
        formAction={() => {
          removeItem();
        }}
      >
        remove favorite
      </Button>
    </form>
  );
}
