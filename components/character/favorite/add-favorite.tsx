"use client";
import { Button } from "@mui/material";
import { addItem } from "./action";

export default function AddToFavorite({ name }: { name: string }) {
  return (
    <form>
      <Button
        variant="outlined"
        size="small"
        type="submit"
        className="text-[10px]"
        formAction={() => {
          addItem(name);
        }}
      >
        favorite
      </Button>
    </form>
  );
}
