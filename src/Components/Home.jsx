import * as React from "react";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Paper,
  Stack,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Divider,
  Button
} from "@mui/material";
import { Chart } from "react-charts";
import { getCurrentUser, signInMicrosoft, signOutMicrosoft } from "../firebase";

export default function Home() {
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("");

  const handleChange = (event) => {
    setServer(event.target.value);
  };

  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  useEffect(() => {
    const currentUser = getCurrentUser();
    console.log(currentUser);
    if (currentUser) {
      let firstName = currentUser.displayName.split(" ")[0];
      setUsername(firstName);
    }
  }, []);

  return (
    <>
      <Toolbar />
      <Container maxWidth="xl">
        <Stack
          direction={{
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          }}
          spacing={{
            xl: 5,
            lg: 5,
            md: 2,
            sm: 2,
            xs: 2,
          }}
          sx={{ justifyContent: "space-between" }}
        >
          <Box>
            <Typography noWrap={true} variant="h4">
              Welcome, {username}
            </Typography>
          </Box>
          <FormControl
            sx={{ mt: 2, minWidth: "30em", float: "right" }}
            size="medium"
          >
            <InputLabel id="demo-simple-select-label">Select Server</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Server"
              onChange={handleChange}
            >
              <MenuItem value={"Lilian Beam"}>Lilian Beam</MenuItem>
              <MenuItem value={"Humanities"}>Humanities</MenuItem>
              <MenuItem value={"Library"}>Library</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Divider sx={{ mt: 2, mb: 2 }} />
      </Container>
      <Container component={Paper} sx={{ m: "auto", p: 4 }}>
        <Stack
          direction={{
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          }}
          spacing={{
            xl: 5,
            lg: 5,
            md: 3,
            sm: 3,
            xs: 3,
          }}
        >
          <Stack direction={"column"} spacing={3}>
            <Container
              sx={{
                backgroundColor: "#aeaeae",
                borderRadius: 5,
                p: 3,
                textAlign: "center",
                height: "11em",
                width: "14em",
              }}
            >
              <Typography variant="paragraph">CURRENT TEMPERATURE</Typography>
              <Typography variant="h1">27</Typography>
            </Container>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "#000",
                width: "100%",
                padding: 1,
                borderRadius: 3,
              }}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Change Settings
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "#000",
                width: "100%",
                padding: 1,
                borderRadius: 3,
              }}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              View Past Reports
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "#000",
                width: "100%",
                padding: 1,
                borderRadius: 3,
              }}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Filter by date
            </Button>
          </Stack>
          <div style={{ width: "50em", height: "30em" }}>
            <Chart data={data} axes={axes} />
          </div>
        </Stack>
      </Container>
    </>
  );
}
