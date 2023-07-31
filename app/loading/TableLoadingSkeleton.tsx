import React from "react";

type Props = {};

export default function TableLoadingSkeleton({}: Props) {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <span className="w-6 h-6 shrink-0 rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52  w-32  rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52  w-32 rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52 w-32 rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52 w-32 rounded-full  bg-slate-400"></span>
    </div>
  );
}
