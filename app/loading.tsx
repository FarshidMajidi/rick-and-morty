"use client";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-transparent">
      <CircularProgress />
    </div>
  );
};

export default Loading;
