import * as React from "react";
import { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { setThreshold, getCurrentTemp, getThreshold } from "../firebase";
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

function handleTempChange(v) {
  console.log("temp", v);
  setThreshold(v);
}

export default function Settings() {
  const [server, setServer] = useState(false);
  const [threshold, setThreshold] = useState(null);

  useEffect(() => {
    getThreshold()
      .then((data) => {
        setThreshold(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setServer(event.target.value);
  };

  return (
    <>
      <Toolbar />
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={5}
          sx={{ justifyContent: "space-between" }}
        >
          <Box>
            <Typography noWrap={true} variant="h4">
              Settings
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ mt: 2, mb: 2 }} />
      </Container>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Stack direction="row" spacing={5}>
            <Container
              sx={{
                backgroundColor: "#aeaeae",
                borderRadius: 5,
                p: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="paragraph">SETTINGS</Typography>
              <Typography variant="h1">27</Typography>
            </Container>
            <DeviceThermostatIcon />
            {threshold !== null && (
              <Slider
                aria-label="Temperature"
                size="small"
                max={150}
                onChangeCommitted={(_, v) => handleTempChange(v)}
                defaultValue={threshold}
                valueLabelDisplay="on"
              />
            )}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
