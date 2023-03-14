import React from "react";
import { Box } from "@mui/material";
import Header from "../global/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header
        title="Pie Chart"
        subtitle="Pie Chart shows annual financial schema"
      />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
