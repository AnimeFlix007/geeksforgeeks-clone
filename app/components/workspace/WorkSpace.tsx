"use client";

import React, { useState } from "react";

import useWindowSize from "@/app/hooks/useWindowSize";

import Split from "react-split";
import Confetti from "react-confetti";
import ProblemDescription from "./ProblemDescription";
import { problems } from "@/mocks/AllProblems";
import Playground from "./Playground";

type Props = {
  pid: string;
};

export default function WorkSpace({ pid }: Props) {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <Split className="split flex flex-row" minSize={0}>
      <ProblemDescription problem={problems[pid]} _solved={solved} />
      <div className="bg-dark-fill-2">
        <Playground
          problem={problems[pid]}
          // setSuccess={setSuccess}
          // setSolved={setSolved}
        />
        {success && (
          <Confetti
            gravity={0.3}
            tweenDuration={4000}
            width={width - 1}
            height={height - 1}
          />
        )}
      </div>
    </Split>
  );
}
