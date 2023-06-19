"use client";

import React from "react";
import CircleSkeleton from "@/app/loading/CircularSkeletom";
import RectangleSkeleton from "@/app/loading/RectangularSkeleton";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLoading3Quarters,
  AiFillStar,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { Problem } from "@/mocks/Problems";

type Props = {
  problem: Problem | null | undefined;
  _solved: boolean;
};

export default function ProblemDescription({ problem, _solved }: Props) {
  return (
    <div className=" bg-slate-50">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 overflow-x-hidden">
        <div
          className={
            "bg-slate-200 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg font-medium">
                {problem?.title}
              </div>
            </div>

            {true && (
              <div className="mt-3 flex space-x-2">
                <RectangleSkeleton />
                <CircleSkeleton />
                <RectangleSkeleton />
                <RectangleSkeleton />
                <CircleSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
