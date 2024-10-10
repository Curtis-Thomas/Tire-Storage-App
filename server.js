import express from "express";
import cors from "cors"; // Import the cors middleware

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors()); // You can pass options here to restrict origins if necessary
app.use(express.json()); // Middleware for parsing application/json

// Define user data to serve as a placeholder for real database
let data = [
  {
    id: 1,
    customerName: "Alice Johnson",
    carRegistration: "XYZ-1234",
    carModel: "Toyota Corolla",
    tireSize: "205/55R16",
    tireManufacturer: "Michelin",
    warehouse: "Warehouse A",
    numberOfTires: 4,
  },
  {
    id: 2,
    customerName: "Bob Smith",
    carRegistration: "ABC-5678",
    carModel: "Honda Civic",
    tireSize: "215/60R17",
    tireManufacturer: "Bridgestone",
    warehouse: "Warehouse B",
    numberOfTires: 4,
  },
  {
    id: 3,
    customerName: "Charlie Brown",
    carRegistration: "DEF-9012",
    carModel: "Ford Focus",
    tireSize: "225/45R18",
    tireManufacturer: "Goodyear",
    warehouse: "Warehouse A",
    numberOfTires: 3,
  },
  {
    id: 4,
    customerName: "Diana Prince",
    carRegistration: "JKL-3456",
    carModel: "Tesla Model 3",
    tireSize: "235/40R19",
    tireManufacturer: "Pirelli",
    warehouse: "Warehouse C",
    numberOfTires: 4,
  },
  {
    id: 5,
    customerName: "Eve Adams",
    carRegistration: "GHI-7890",
    carModel: "BMW 3 Series",
    tireSize: "225/50R17",
    tireManufacturer: "Continental",
    warehouse: "Warehouse B",
    numberOfTires: 4,
  },
];

// Root route
app.get("/", (req, res) => {
  res.json({ message: "pong" });
});

// Route to return user data
app.get("/data", (req, res) => {
  res.json(data); // Corrected 'users' to 'data'
});

app.post("/addTires", (req, res) => {
  console.log(req.body);
  // res.json({ message: "Tires added successfully", receivedData: req.body });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
