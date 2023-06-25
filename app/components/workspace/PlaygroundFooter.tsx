import React from "react";
import { BsChevronUp } from "react-icons/bs";

type Props = {};

export default function PlaygroundFooter({}: Props) {
  return (
    <div className="flex  bg-slate-50 absolute bottom-0 z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex bg-slate-100 hover:bg-slate-200 text-sm rounded-lg pl-3 pr-2">
            Console
            <div className="ml-1 transform transition flex items-center">
              <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" />
            </div>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button
            className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-slate-200 hover:bg-slate-300 rounded-lg"
            onClick={() => {}}
          >
            Compile & Run
          </button>
          <button
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm  bg-green-500 hover:bg-green-400 rounded-lg text-white"
            onClick={() => {}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
