import ClasificationController from "../controller/clasification.controller";
import ClasificationServices from "../services/clasification.services";
import ClasificationModel from "../model/clasification.model";

const ClasificationServiceInstance = new ClasificationServices(
  ClasificationModel
);
const ClasificationControllerInstance = new ClasificationController(
  ClasificationServiceInstance
);

export default (app) => {
  app.get("/clasification", ClasificationControllerInstance.getClasification);
  app.post("/clasification", ClasificationControllerInstance.postClasification);
  app.put(
    "/clasification/:id",
    ClasificationControllerInstance.putClasification
  );
  app.delete(
    "/clasification/:id",
    ClasificationControllerInstance.deleteClasification
  );
};
