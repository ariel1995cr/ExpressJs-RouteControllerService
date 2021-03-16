import MovieController from "../controller/movie.controller";
import MovieServices from "../services/movie.services";
import MovieModel from "../model/movie.model";

const MovieServiceInstance = new MovieServices(MovieModel);
const MovieControllerInstance = new MovieController(MovieServiceInstance);

export default (app) => {
  app.get("/movie", MovieControllerInstance.getMovie);
  app.post("/movie", MovieControllerInstance.postMovie);
  app.put("/movie/:id", MovieControllerInstance.putMovie);
  app.delete("/movie/:id", MovieControllerInstance.deleteMovie);
};
