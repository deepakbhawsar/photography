import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js";
import productRoute from "./routes/productRoutes.js";
import path from "path";

dotenv.config();

const app = express();

//middelware

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

// static file
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const connetMongo = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
    console.log("mongodb error");
  }
};

//port

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connetMongo();
  console.log(`Server is running on port ${PORT}`);
});
