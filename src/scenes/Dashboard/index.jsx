import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBoxComp from "../../components/StatBoxComp";
import Header from "../global/Header";
import DownloadBtn from "../../components/DownloadBtn";
import RevenueComp from "../../components/RevenueComp";
import RecentTransaction from "../../components/RecentTransaction";
import Campaign from "../../components/Campaign";
import SalesQuantity from "../../components/SalesQuantity";
import GeographyTraffic from "../../components/GeographyTraffic";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <DownloadBtn />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <StatBoxComp />
        <RevenueComp />
        <RecentTransaction />
        <Campaign />
        <SalesQuantity />
        <GeographyTraffic />
      </Box>
    </Box>
  );
};

export default Dashboard;
