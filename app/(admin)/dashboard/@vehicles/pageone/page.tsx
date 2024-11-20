"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const segment = usePathname();

  console.log(segment);

  return (
    <>
      <h1>Active segment : {segment?.toString()} or router :</h1>
    </>
  );
}
