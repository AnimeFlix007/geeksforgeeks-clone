"use client";

import { useState, useEffect } from "react";
import ProblemsTable from "./components/home/ProblemTable";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { toast } from "react-toastify";

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  const [data, setData] = useState({
    id: "",
    title: "",
    difficulty: "",
    category: "",
    videoId: "",
    likes: 0,
    order: 0,
    dislikes: 0,
  });

  const submitHandler = async(e: any) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await setDoc(doc(db, "problems", data.id), {...data, order: Number(data.order)})
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  function onchangeHandler(e: any) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLoadingProblems(false);
    }, 400);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <h1
          className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5"
        >
          Learn DSA in the Best Way
        </h1>
        <div className="overflow-x-auto mx-auto px-6 pb-10">
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
            {!loadingProblems && (
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
                <tr>
                  <th scope="col" className="px-1 py-3 w-0 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Difficulty
                  </th>

                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium">
                    Solution
                  </th>
                </tr>
              </thead>
            )}
            {!loadingProblems && (
              <ProblemsTable setLoadingProblems={setLoadingProblems} />
            )}
          </table>
          {loadingProblems && (
            <section className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
              {[...Array(10)].map((_, idx) => (
                <LoadingSkeleton key={idx} />
              ))}
            </section>
          )}
        </div>
        <form onSubmit={submitHandler}>
          <input onChange={onchangeHandler} type="text" placeholder="Problem Id" name="id" />
          <input onChange={onchangeHandler} type="text" placeholder="title" name="title" />
          <input onChange={onchangeHandler} type="text" placeholder="Difficulty" name="difficulty" />
          <input onChange={onchangeHandler} type="text" placeholder="category" name="category" />
          <input onChange={onchangeHandler} type="text" placeholder="videoId" name="videoId" />
          <input onChange={onchangeHandler} type="number" placeholder="order" name="order" />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <span className="w-6 h-6 shrink-0 rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52  w-32  rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52  w-32 rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52 w-32 rounded-full  bg-slate-400"></span>
      <span className="h-4 sm:w-52 w-32 rounded-full  bg-slate-400"></span>
    </div>
  );
};
