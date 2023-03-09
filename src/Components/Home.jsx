import * as React from "react";
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
} from "@mui/material";
import { getCurrentUser, signInMicrosoft, signOutMicrosoft } from "../firebase";

export default function Home() {
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("");

  const handleChange = (event) => {
    setServer(event.target.value);
  };

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
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
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
            <Container
              sx={{
                backgroundColor: "#aeaeae",
                borderRadius: 5,
                p: 2,
                textAlign: "center",
                height: "20%",
              }}
            >
              <Typography variant="paragraph">CURRENT TEMPERATURE</Typography>
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
