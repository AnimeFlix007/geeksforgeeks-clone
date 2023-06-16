"use client";

import { useEffect, Fragment } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Fragment>
      <h2>Something went wrong!!</h2>
      <button onClick={reset}>Try Again</button>
    </Fragment>
  );
}
