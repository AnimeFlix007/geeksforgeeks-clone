import ProblemsTable from "./components/home/ProblemTable";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { DBProblemType } from "./types";
import TableLoadingSkeleton from "./loading/TableLoadingSkeleton";
import { Suspense } from "react";

export default async function Home() {
  const q = query(collection(db, "problems"), orderBy("order", "asc"));
  const data = await getDocs(q);
  const tmp: DBProblemType[] = [];
  data.forEach((doc) => {
    tmp.push({
      ...doc.data(),
      id: doc.id,
    } as DBProblemType);
  });

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
            <Suspense
              fallback={
                <section className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
                  {[...Array(10)].map((_, idx) => (
                    <TableLoadingSkeleton key={idx} />
                  ))}
                </section>
              }
            >
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
              <ProblemsTable allProblems={tmp} />
            </Suspense>
          </table>
        </div>
      </main>
    </>
  );
}
