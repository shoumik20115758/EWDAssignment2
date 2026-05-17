import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  onLogin: (username: string) => void;
};

const LoginPage = ({ onLogin }: Props) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }

    localStorage.setItem("moviesAppUser", username);
    onLogin(username);
  };

  return (
    <Grid container justifyContent="center" sx={{ padding: 4 }}>
      <Grid item xs={12} sm={8} md={5}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Login
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Enter a username to use the Assignment 2 Movies App.
          </Typography>

          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button fullWidth variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;