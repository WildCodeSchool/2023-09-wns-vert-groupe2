import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Container,
  Paper,
} from '@mui/material';

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
    date: '',
    price: 0,
    status: '',
    startLocation: '',
    stopLocations: '',
    endLocation: '',
  });

  const [createTrip, { loading, error, data }] = useMutation(CREATE_TRIP);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(formState.date).toISOString();

    const tripData = {
      ...formState,
      date: formattedDate,
    };
    createTrip({ variables: { data: tripData } });

    setFormState({
      date: '',
      price: 0,
      status: '',
      startLocation: '',
      stopLocations: '',
      endLocation: '',
    });
  };

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant='h4' gutterBottom>
          Create Trip
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type='date'
            label='Date'
            value={formState.date}
            onChange={(e) =>
              setFormState({ ...formState, date: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='Select date'
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            type='number'
            label='Price'
            value={formState.price}
            onChange={(e) =>
              setFormState({ ...formState, price: parseFloat(e.target.value) })
            }
            placeholder='Enter price'
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            type='text'
            label='Status'
            value={formState.status}
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
            placeholder='Enter status'
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            type='text'
            label='Start Location'
            value={formState.startLocation}
            onChange={(e) =>
              setFormState({ ...formState, startLocation: e.target.value })
            }
            placeholder='Enter start location'
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            type='text'
            label='Stop Locations'
            value={formState.stopLocations}
            onChange={(e) =>
              setFormState({ ...formState, stopLocations: e.target.value })
            }
            placeholder='Enter stop locations'
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            type='text'
            label='End Location'
            value={formState.endLocation}
            onChange={(e) =>
              setFormState({ ...formState, endLocation: e.target.value })
            }
            placeholder='Enter end location'
            style={{ marginBottom: '20px' }}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Create Trip'}
          </Button>
        </form>
        {error && <Typography color='error'>{error.message}</Typography>}
        {data && (
          <Typography style={{ marginTop: '10px' }}>
            Trip created successfully!
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default CreateTrip;
