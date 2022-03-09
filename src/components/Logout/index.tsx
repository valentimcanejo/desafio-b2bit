import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/b2b-logo.png";
export default function Logout() {
  const [data, setData] = useState<any[]>([]);
  document.body.style.backgroundColor = "#f1f5f9";
  useEffect(() => {
    axios
      .get(`https://frontendproject.b2bit.company/account/profile/`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "white" }} position="fixed">
        <Toolbar style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button
            sx={{
              borderRadius: "10px",
              padding: "8px",
              width: "25%",
              backgroundColor: "#02274f",
            }}
            variant="contained"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        style={{ minHeight: "90vh" }}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item>
          <Paper
            elevation={8}
            sx={{ borderRadius: "20px", width: "300px", padding: "40px" }}
          >
            <Grid container spacing={3} direction="column">
              <Grid item>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  direction="column"
                >
                  <Typography variant="body2">Profile Picture</Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 100,
                    }}
                    alt="The house from the offer."
                    src={Logo}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="body1">
                      Your <b>Name</b>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        borderRadius: "10px",
                        padding: "15px",
                        backgroundColor: "#f4f4f4",
                      }}
                      variant="body2"
                    >
                      Christiane James
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="body1">
                      Your <b>E-mail</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        borderRadius: "10px",
                        padding: "15px",
                        backgroundColor: "#f4f4f4",
                      }}
                      variant="body2"
                    >
                      christianejames@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
