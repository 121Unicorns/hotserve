import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container } from "@mui/material";
import { height } from "@mui/system";

export default function Chart(props) {
  const [chartData, setChartData] = useState(props.chartData);
  //console.log(chartData);

  return (
    <Container maxWidth={"xl"} sx={{height:"30em", width:"55em"}}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
