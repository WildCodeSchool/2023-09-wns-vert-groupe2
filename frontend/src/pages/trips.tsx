import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

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

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error :(</Typography>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant='h1' gutterBottom>
        Trips
      </Typography>
      <Grid container spacing={3}>
        {data.trips.map((trip: any) => (
          <Grid item xs={12} sm={6} md={4} key={trip.id}>
            <Card sx={{ borderRadius: 2, backgroundColor: '#fff' }}>
              <CardContent>
                <Typography variant='h6'>
                  Date: {new Date(trip.date).toLocaleDateString()}
                </Typography>
                <Typography>Price: {trip.price}</Typography>
                <Typography>Status: {trip.status}</Typography>
                <Typography>Start Location: {trip.startLocation}</Typography>
                <Typography>Stop Locations: {trip.stopLocations}</Typography>
                <Typography>End Location: {trip.endLocation}</Typography>
                {/* <Link href={`/update-trip/${trip.id}`} passHref>
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ marginTop: '10px' }}
                  >
                    Modifiez votre trajet
                  </Button>
                </Link>
                <Link href={`/delete-trip/${trip.id}`} passHref>
                  <Button
                    variant='outlined'
                    color='secondary'
                    style={{ marginTop: '10px', marginLeft: '10px' }}
                  >
                    Supprimez votre trajet
                  </Button>
                </Link> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TripsPage;
