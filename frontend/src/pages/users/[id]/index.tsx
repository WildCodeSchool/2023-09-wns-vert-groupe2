import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Loader from "@/components/Loader";

import { useGetUserByIdQuery } from "@/gql/graphql";

function UpdateTripPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useGetUserByIdQuery({
    variables: { id: id as string },
  });

  if (!id) return <Loader />;
  if (loading) return <Loader />;

  return (
    <>
      {data && data?.getUserById ? (
        <>
          <Typography>{data?.getUserById?.firstname}</Typography>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default UpdateTripPage;
