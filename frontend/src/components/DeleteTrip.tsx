import { gql, useMutation } from "@apollo/client";

const DELETE_TRIP = gql`
  mutation DeleteTrip($id: Int!) {
    deleteTrip(id: $id)
  }
`;

const DeleteTrip = ({ tripId }: { tripId: number }) => {
  const [deleteTrip, { data, loading, error }] = useMutation(DELETE_TRIP);

  const handleDelete = () => {
    deleteTrip({ variables: { id: tripId } });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Trip</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && data.deleteTrip && <p>Trip deleted successfully!</p>}
    </div>
  );
};

export default DeleteTrip;
