import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_TRIPS = gql`
  query GetTrips {
    trips {
      id
      date
      price
      status
      startLocation
      stopLocations
      endLocation
      driver
      createdAt
      updatedAt
    }
  }
`;

const TripsPage = () => {
  const { loading, error, data } = useQuery(GET_TRIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Trips</h1>
      <ul>
        {data.trips.map((trip: any) => (
          <li key={trip.id}>
            <p>Date: {new Date(trip.date).toLocaleDateString()}</p>
            <p>Price: {trip.price}</p>
            <p>Status: {trip.status}</p>
            <p>Start Location: {trip.startLocation}</p>
            <p>Stop Locations: {trip.stopLocations}</p>
            <p>End Location: {trip.endLocation}</p>
            <Link href={`/update-trip/${trip.id}`}>Modifiez votre trajet</Link>
            <br />
            <Link href={`/delete-trip/${trip.id}`}>Supprimez votre trajet</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripsPage;
