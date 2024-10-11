import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

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

interface AddTiresProps {
  appData: Data[];
}
function AddTires({ appData }: AddTiresProps) {
  const [newId, setNewId] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarRegistration, setNewCarRegistration] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newNumberOfTires, setNewNumberOfTires] = useState("");
  const [newTireManufacturer, setNewTireManufacturer] = useState("");
  const [newTireSize, setNewTireSize] = useState("");
  const [newWarehouse, setNewWarehouse] = useState("");

  const handleAddTires = () => {
    fetch("http://localhost:3000/addTires", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: newId,
        carModel: newCarModel,
        carRegistration: newCarRegistration,
        customerName: newCustomerName,
        numberOfTires: newNumberOfTires,
        tireManufacturer: newTireManufacturer,
        tireSize: newTireSize,
        warehouse: newWarehouse,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Successfully added tires:", data);
        // Resetting all input fields after successful submission
        setNewId("");
        setNewCarModel("");
        setNewCarRegistration("");
        setNewCustomerName("");
        setNewNumberOfTires("");
        setNewTireManufacturer("");
        setNewTireSize("");
        setNewWarehouse("");
      })
      .catch((error) => {
        console.error("Error adding tires:", error);
      });
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(e.target.value);
  };

  const handleCarModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCarModel(e.target.value);
  };

  const handleCarRegistrationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCarRegistration(e.target.value);
  };

  const handleCustomerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCustomerName(e.target.value);
  };

  const handleNumberOfTiresChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewNumberOfTires(e.target.value);
  };

  const handleTireManufacturerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTireManufacturer(e.target.value);
  };

  const handleTireSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTireSize(e.target.value);
  };

  const handleWarehouseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewWarehouse(e.target.value);
  };

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
          Add Tires
        </Typography>
      </Box>

      <Box sx={{ height: "80%", width: "100%", overflow: "auto" }}>
        <Box sx={{ width: "100%", backgroundColor: "cyan", height: "20%" }}>
          <Box sx={{ height: "35%", width: "100%" }}>
            <input placeholder="id" onChange={handleIdChange} />
            <input placeholder="carModel" onChange={handleCarModelChange} />
            <input
              placeholder="carReqistration"
              onChange={handleCarRegistrationChange}
            />
            <input
              placeholder="customerName"
              onChange={handleCustomerNameChange}
            />
            <input
              placeholder="numberOfTires"
              onChange={handleNumberOfTiresChange}
            />
            <input
              placeholder="tireManufacturer"
              onChange={handleTireManufacturerChange}
            />
            <input placeholder="tireSize" onChange={handleTireSizeChange} />
            <input placeholder="warehouse" onChange={handleWarehouseChange} />
          </Box>
          <Box
            sx={{
              height: "45%",
              width: "100%",
              backgroundColor: "black",
              color: "white",
              display: "flex",
            }}
          >
            <Box sx={{ height: "33.33%", width: "100%" }}>
              <Typography>New ID: {newId}</Typography>
              <Typography>Car Model: {newCarModel}</Typography>
              <Typography>Car Registration: {newCarRegistration}</Typography>
            </Box>
            <Box sx={{ height: "33.33%", width: "100%" }}>
              <Typography>Customer Name: {newCustomerName}</Typography>
              <Typography>Number of Tires: {newNumberOfTires}</Typography>
              <Typography>Tire Manufacturer: {newTireManufacturer}</Typography>
            </Box>
            <Box sx={{ height: "33.33%", width: "100%" }}>
              <Typography>Tire Size: {newTireSize}</Typography>
              <Typography>Warehouse: {newWarehouse}</Typography>
            </Box>
          </Box>
          <Box sx={{ height: "20%", width: "100%" }}>
            <Button
              sx={{
                border: "solid 1px black",
                backgroundColor: "purple",
                color: "white",
              }}
              onClick={() => handleAddTires()}
            >
              Add Tires
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography>Data Check</Typography>

          {appData && appData.length > 0 ? (
            appData.map((item) => (
              <Box
                sx={{
                  border: "1px solid #fcfcfc",
                  marginBorrom: 5,
                  padding: 15,
                }}
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
    </Box>
  );
}

export default AddTires;
