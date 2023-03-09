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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}