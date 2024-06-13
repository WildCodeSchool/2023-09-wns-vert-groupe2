// CreateReviewForm.tsx
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  TextField,
  Button,
  CircularProgress,
  Alert,
  Paper,
  Rating,
} from '@mui/material';

const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReview($rating: Int!, $comment: String!, $targetId: Int!) {
    createReview(rating: $rating, comment: $comment, targetId: $targetId) {
      id
    }
  }
`;

const CreateReviewForm = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [targetId, setTargetId] = useState('');
  const [errorText, setErrorText] = useState('');
  const [createReview, { loading, error, data }] = useMutation(
    CREATE_REVIEW_MUTATION
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || rating < 1 || rating > 5) {
      setErrorText('Your rating must be between 1 and 5');
      return;
    }
    try {
      await createReview({
        variables: {
          rating,
          comment,
          targetId: parseInt(targetId),
        },
      });

      setRating(null);
      setComment('');
      setTargetId('');
      setErrorText('');
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <Rating
            name='rating'
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          {errorText && <p style={{ color: 'red' }}>{errorText}</p>}
        </div>
        <div>
          <TextField
            required
            label='Comment'
            placeholder='Enter comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            type='number'
            label='Target ID'
            placeholder='Enter target ID'
            value={targetId}
            onChange={(e) => setTargetId(e.target.value)}
          />
        </div>
        <div>
          <Button type='submit' disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </div>
        {error && <Alert severity='error'>Error: {error.message}</Alert>}
        {data && <Alert severity='success'>Review created successfully!</Alert>}
      </form>
    </Paper>
  );
};

export default CreateReviewForm;
