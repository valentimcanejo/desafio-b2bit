import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import React from "react";
import Logo from "../../assets/b2b-logo.png";

export default function Login() {
  return (
    <Box>
      <Grid
        container
        style={{ minHeight: "90vh" }}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item>
          <Paper elevation={8} sx={{ borderRadius: "20px", padding: "30px" }}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: 170,
                    width: 340,
                  }}
                  alt="The house from the offer."
                  src={Logo}
                />
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h6">E-mail</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="@gmail.com"
                      type="email"
                      variant="filled"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h6">Password</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="********"
                      type="password"
                      variant="filled"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    borderRadius: "10px",
                    padding: "13px",
                    backgroundColor: "#02274f",
                  }}
                  fullWidth
                  variant="contained"
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
