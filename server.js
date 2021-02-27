import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./routes/user.routes";

mongoose.connect("urlMongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

UserRoutes(app);

app.listen(8080, () => {
  console.log(`Corriendo en puerto 8080`);
});
