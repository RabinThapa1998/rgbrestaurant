import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonLoading() {
  return (
    <Stack spacing={1}>
      <Skeleton animation="wave" width={400} height={200} />
      <Skeleton
        animation="wave"
        width={400}
        height={50}
        sx={{ marginTop: "40px", marginX: "auto" }}
      />
      <Skeleton animation="wave" width={400} height={100} />
      <Skeleton animation="wave" width={400} height={50} />
      <Skeleton animation="wave" width={400} height={50} />
    </Stack>
  );
}
