import express from "express";
import mongoose from "mongoose";
import ClasificationRoutes from "./routes/clasification.routes";
import MovieRoutes from "./routes/movie.routes";
import bodyParser from "body-parser";
import cors from "cors";

mongoose.connect(
  "mongodb+srv://ariel:ariel38299549@twiiter.t81tn.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
app.use(cors());
app.use(bodyParser.json());

ClasificationRoutes(app);
MovieRoutes(app);

app.listen(8080, () => {
  console.log(`Corriendo en puerto 8080`);
});
