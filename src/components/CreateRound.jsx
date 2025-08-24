import React, { useState, useContext } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Container 
} from '@mui/material';
import { RoundsContext } from '../context/RoundsContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMember = () => {
  const [fixed, setFixed] = useState();
  const { createRound } = useContext(RoundsContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.error("Can't Create New Round", {
      position: "top-center",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" gutterBottom>Create New Round</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Fixed Amount for Round"
            type="number"
            value={fixed}
            onChange={(e) => setFixed(Number(e.target.value))}
            fullWidth
            margin="normal"
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            style={{ marginTop: 20 }}
          >
            Create Round
          </Button>
        </form>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default AddMember;