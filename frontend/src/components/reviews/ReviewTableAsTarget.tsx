import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetReviewsOfAUserQuery } from "@/gql/graphql";
import Loader from "../Loader";
import { Alert, Typography } from "@mui/material";

export default function ReviewsAsTarget({ userId }: { userId: string }) {
  const { loading, error, data } = useGetReviewsOfAUserQuery({
    variables: { userId: userId },
  });

  if (loading) return <Loader />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <>
      <Typography variant="h3">Avis reçus</Typography>
      {data && data?.reviewsOfAUser.length > 0 ? (
        <ReviewsTable data={data?.reviewsOfAUser} />
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
    author: {
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
            <TableCell align="center">Auteur</TableCell>
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
                {review.author.firstname} {review.author.lastname}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
