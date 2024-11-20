"use client";
import * as React from "react";

import { useRouter } from "next/navigation";
import { Pagination, Stack, } from "@mui/material";

export default function PaginationControlled({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/movies?page=${value}&limit=10`);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  );
}
