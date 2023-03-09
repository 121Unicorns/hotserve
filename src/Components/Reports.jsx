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
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#212f92",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(date, time, temperature, status) {
  return { date, time, temperature, status };
}

const rows = [
  createData("09/03/2023","22:30PM", 25, "Normal"),
  createData("09/03/2023","22:40PM", 25, "Normal"),
  createData("09/03/2023","22:50PM", 27, "High"),
  createData("09/03/2023","23:00PM", 32, "High"),
  createData("09/03/2023","23:10PM", 35, "High"),
];

export default function Reports() {
  const [server, setServer] = useState(false);
  const handleChange = (e) => {
    setServer(e.target.value);
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
          <Typography sx={{ alignSelf: "center" }} noWrap={true} variant="h4">
            Reports
          </Typography>
          <Box>
            <Stack direction={"row"} spacing={2}>
              <FormControl
                sx={{ mt: 2, minWidth: "30em", float: "right" }}
                size="medium"
              >
                <InputLabel id="demo-simple-select-label">
                  Select Server
                </InputLabel>
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
              <Button variant="filled">Export Report</Button>
            </Stack>
          </Box>
        </Stack>
        <Divider sx={{ mt: 2, mb: 4 }} />
      </Container>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Stack direction="column" spacing={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell align="right">Time</StyledTableCell>
                  <StyledTableCell align="right">
                    Temperature&nbsp;(F)
                  </StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{row.date}</StyledTableCell>
                    <StyledTableCell align="right">{row.time}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.temperature}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </>
  );
}
