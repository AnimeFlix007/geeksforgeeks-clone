import WorkSpace from "@/app/components/workspace/WorkSpace";
import React from "react";

type Props = {
  params: {
    pid: string;
  };
};

export default function page({ params: { pid } }: Props) {
  return (
    <div>
      <WorkSpace pid={pid} />
    </div>
  );
}
