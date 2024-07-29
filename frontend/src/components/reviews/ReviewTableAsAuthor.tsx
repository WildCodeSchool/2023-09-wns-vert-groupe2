import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useGetReviewsFromAUserQuery,
  useGetReviewsOfAUserQuery,
} from "@/gql/graphql";
import Loader from "../Loader";
import { Alert, Typography } from "@mui/material";

export default function ReviewsAsAuthor({ userId }: { userId: string }) {
  const { loading, error, data } = useGetReviewsFromAUserQuery({
    variables: { userId: userId },
  });

  if (loading) return <Loader />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <>
      <Typography variant="h3">Avis redigés</Typography>
      {data && data?.reviewsFromAUser.length > 0 ? (
        <ReviewsTable data={data?.reviewsFromAUser} />
      ) : (
        <Typography align="center">Aucun avis à afficher</Typography>
      )}
    </>
  );
}

function ReviewsTable({
  data,
}: {
  data: {
    __typename?: "Review";
    id: number;
    rating: number;
    comment: string;
    type: string;
    createdAt: any;
    target: {
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    };
  }[];
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Note</TableCell>
            <TableCell align="center">Commentaire</TableCell>
            <TableCell align="center">Cible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((review) => (
            <TableRow
              key={review.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="review">
                {review.createdAt}
              </TableCell>
              <TableCell align="right">{review.rating}</TableCell>
              <TableCell align="right">{review.comment}</TableCell>
              <TableCell align="right">
                {review.target.firstname} {review.target.lastname}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
