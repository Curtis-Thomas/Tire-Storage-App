import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Overview from "./screens/Overview";
import AddTires from "./screens/AddTires";
import Search from "./screens/Search";
import Details from "./screens/Details";
import Print from "./screens/Print";

type User = {
  id: number;
  name: string;
};

interface OverviewProps {
  appData: User[];
}

function App() {
  const [appData, setAppData] = useState();
  const [screen, setScreen] = useState("overview");
  const [searchButtonHeight, setSearchButtonHeight] = useState("20%");

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to the console
        setAppData(data); // Update the state with the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#11171D",
        color: "#fcfcfc",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <Box sx={{ height: "100%", width: "20%", border: "1px solid #fcfcfc" }}>
        <Button
          sx={{
            height: searchButtonHeight,
            width: "100%",
            border: "solid 1px white",
            color: "#fcfcfc",
          }}
          onClick={() => setScreen("overview")}
        >
          Overview
        </Button>
        <Button
          sx={{
            height: searchButtonHeight,
            width: "100%",
            border: "solid 1px white",
            color: "#fcfcfc",
          }}
          onClick={() => setScreen("addTires")}
        >
          Add Tire Set
        </Button>
        <Button
          sx={{
            height: searchButtonHeight,
            width: "100%",
            border: "solid 1px white",
            color: "#fcfcfc",
          }}
          onClick={() => setScreen("search")}
        >
          Listing and Searching
        </Button>
        <Button
          sx={{
            height: searchButtonHeight,
            width: "100%",
            border: "solid 1px white",
            color: "#fcfcfc",
          }}
          onClick={() => setScreen("details")}
        >
          View Details
        </Button>
        <Button
          sx={{
            height: searchButtonHeight,
            width: "100%",
            border: "solid 1px white",
            color: "#fcfcfc",
          }}
          onClick={() => setScreen("print")}
        >
          Print
        </Button>
      </Box>
      <Box sx={{ height: "100%", width: "80%" }}>
        {screen === "overview" && <Overview appData={appData} />}
        {screen === "addTires" && <AddTires appData={appData} />}
        {screen === "search" && <Search />}
        {screen === "details" && <Details />}
        {screen === "print" && <Print />}
      </Box>
    </Box>
  );
}

export default App;
