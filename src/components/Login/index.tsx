import { Box, Grid, Typography, Paper } from "@mui/material";
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
          <Paper sx={{ padding: "50px" }}>
            <Grid container spacing={0} direction="column">
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
                <Typography variant="h6">Title</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Name</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Password</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
