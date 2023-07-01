"use client";

import React, { useEffect, useState } from "react";
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
import Image from "next/image";
import { localProblemType } from "@/app/types";
import { useDispatch } from "react-redux";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

type Props = {
  problem: localProblemType;
  _solved: boolean;
};

export default function ProblemDescription({ problem, _solved }: Props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentProblem, setCurrentProblem] = useState<
    DocumentData | undefined | null
  >(null);
  useEffect(() => {
    async function getCurrentProblem(id: string) {
      setLoading(true);
      const docRef = doc(db, "problems", id);
      const docSnap = await getDoc(docRef);
      setCurrentProblem(docSnap.data());
      setLoading(false);
    }
    getCurrentProblem(problem.id);
  }, [dispatch, problem.id]);

  return (
    <div>
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 overflow-x-hidden">
        <div
          className={
            "bg-slate-50 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
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

            {!loading && currentProblem && (
              <div className="flex items-center mt-3">
                <div
                  className={`${
                    currentProblem?.difficulty === "Easy"
                      ? " bg-emerald-200  text-emerald-600"
                      : currentProblem?.difficulty === "Medium"
                      ? "bg-dark-yellow text-dark-yellow"
                      : " bg-dark-pink text-dark-pink"
                  }  inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-base  font-medium capitalize  border-x-emerald-800`}
                >
                  {currentProblem.difficulty}
                </div>
                <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200  text-green-500">
                  <BsCheck2Circle />
                </div>
                <div className="flex items-center cursor-pointer hover:bg-green-300 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-500">
                  <AiFillLike />
                  <span className="text-xs">{currentProblem.likes}</span>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-red-300 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-red-500">
                  <AiFillDislike />
                  <span className="text-xs">{currentProblem.dislikes}</span>
                </div>
                <div className="cursor-pointer hover:bg-yellow-100  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s  text-yellow-400">
                  <TiStarOutline />
                </div>
              </div>
            )}

            {loading && (
              <div className="mt-3 flex space-x-2">
                <RectangleSkeleton />
                <CircleSkeleton />
                <RectangleSkeleton />
                <RectangleSkeleton />
                <CircleSkeleton />
              </div>
            )}
            <div className=" text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem.examples.map((example, index) => (
                <div key={example.id} className="mt-2 mb-4">
                  <p className="font-medium  ">Example {index + 1}: </p>
                  {example.img && (
                    <Image
                      src={example.img}
                      alt="example"
                      width={100}
                      height={100}
                      className="mt-3"
                    />
                  )}
                  <div className="example-card">
                    <pre>
                      <strong className="">Input: </strong> {example.inputText}
                      <br />
                      <strong>Output:</strong>
                      {example.outputText} <br />
                      {example.explanation && (
                        <>
                          <strong>Explanation:</strong> {example.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-8 pb-4">
              <div className=" text-sm font-medium">Constraints:</div>
              <ul className=" ml-5 list-disc ">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
