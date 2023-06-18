"use client";

import React, { Fragment, ReactNode, useEffect, useState } from "react";

// this component is used to avoid hydration error

type Props = {
  children: ReactNode;
};

export default function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState<Boolean>(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <Fragment>{children}</Fragment>;
}
