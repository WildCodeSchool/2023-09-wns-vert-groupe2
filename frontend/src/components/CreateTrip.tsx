import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_TRIP = gql`
  mutation CreateTrip($data: TripInput!) {
    createTrip(data: $data) {
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

const CreateTrip = () => {
  const [formState, setFormState] = useState({
    date: "",
    price: 0,
    status: "",
    startLocation: "",
    stopLocations: "",
    endLocation: "",
  });

  const [createTrip, { data, loading, error }] = useMutation(CREATE_TRIP);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTrip({ variables: { data: formState } });
  };

  return (
    <div>
      <h1>Create Trip</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        />
        <input
          type="number"
          value={formState.price}
          onChange={(e) =>
            setFormState({ ...formState, price: parseFloat(e.target.value) })
          }
        />
        <input
          type="text"
          value={formState.status}
          onChange={(e) =>
            setFormState({ ...formState, status: e.target.value })
          }
        />
        <input
          type="text"
          value={formState.startLocation}
          onChange={(e) =>
            setFormState({ ...formState, startLocation: e.target.value })
          }
        />
        <input
          type="text"
          value={formState.stopLocations}
          onChange={(e) =>
            setFormState({ ...formState, stopLocations: e.target.value })
          }
        />
        <input
          type="text"
          value={formState.endLocation}
          onChange={(e) =>
            setFormState({ ...formState, endLocation: e.target.value })
          }
        />
        <button type="submit">Create Trip</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && <p>Trip created successfully!</p>}
    </div>
  );
};

export default CreateTrip;
