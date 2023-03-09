import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

export default function Settings() {
  const [server, setServer] = useState(false);

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
            <Typography paragraph>
              I'll add the settings here later once we sort out the cloud functions.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}