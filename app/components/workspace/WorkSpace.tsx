"use client";

import React, { useEffect, useState } from "react";

import useWindowSize from "@/app/hooks/useWindowSize";

import Split from "react-split";
import Confetti from "react-confetti";
import { Problem, problems } from "@/mocks/Problems";
import ProblemDescription from "./ProblemDescription";

type Props = {
  pid: string;
};

export default function WorkSpace({ pid }: Props) {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  const [problem, setProblem] = useState<Problem | null | undefined>(null);

  useEffect(() => {
    setProblem(problems.find((p) => p.id === pid));
  }, [pid]);

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} _solved={solved} />
      <div className="bg-dark-fill-2">
        {/* <Playground
          problem={problem}
          setSuccess={setSuccess}
          setSolved={setSolved}
        /> */}
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
