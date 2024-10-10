import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

type Data = {
  id: number;
  customerName: string;
  numberOfTires: number;
  carModel: string;
  carRegistration: string;
  tireManufacturer: string;
  tireSize: string;
  warehouse: string;
};

interface OverviewProps {
  appData: Data[];
}

function Overview({ appData }: OverviewProps) {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          height: "20%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h2">
          Tire Storage App
        </Typography>
      </Box>

      <Box sx={{ height: "80%", width: "100%", overflow: "auto" }}>
        <Typography>Data Check</Typography>

        {appData && appData.length > 0 ? (
          appData.map((item) => (
            <Box
              sx={{ border: "1px solid #fcfcfc", marginBorrom: 5, padding: 15 }}
              key={item.id}
            >
              <Typography>{item.id}</Typography>
              <Typography>{item.carModel}</Typography>
              <Typography>{item.carRegistration}</Typography>
              <Typography>{item.customerName}</Typography>
              <Typography>{item.numberOfTires}</Typography>
              <Typography>{item.tireManufacturer}</Typography>
              <Typography>{item.tireSize}</Typography>
              <Typography>{item.warehouse}</Typography>
            </Box>
          ))
        ) : (
          <p>No data available</p>
        )}
      </Box>
    </Box>
  );
}

export default Overview;
