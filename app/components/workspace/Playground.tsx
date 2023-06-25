import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import React, { useState } from "react";
import Split from "react-split";
import { Problem } from "@/mocks/types";
import PreferenceNavbar from "./PreferenceNavbar";
import PlaygroundFooter from "./PlaygroundFooter";

type Props = {
  problem: Problem;
};

export default function Playground({ problem }: Props) {
  const [activeTestCaseId, setActiveTestCaseId] = useState(0)
  let [userCode, setUserCode] = useState<string>(problem.starterCode);
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNavbar />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            value={userCode}
            // theme={vscodeDark}
            // onChange={onChange}
            extensions={[javascript()]}
            style={{ fontSize: 14 }}
          />
        </div>
        <div className="w-full px-5 overflow-auto">
          {/* testcase heading */}
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-gray-300" />
            </div>
          </div>

          <div className="flex">
            {problem.examples.map((example, index) => (
              <div
                className="mr-2 items-start mt-2 "
                key={example.id}
                onClick={() => setActiveTestCaseId(index)}
              >
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-slate-100 hover:bg-slate-200 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap text-black ${activeTestCaseId===index ? 'bg-slate-300' : ''}`}
                  >
                    Case {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4 ">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent  mt-2">
              {problem.examples[activeTestCaseId].inputText}
            </div>
            <p className="text-sm font-medium mt-4 ">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent  mt-2">
              {problem.examples[activeTestCaseId].outputText}
            </div>
          </div>
        </div>
      </Split>
      <PlaygroundFooter />
    </div>
  );
}
