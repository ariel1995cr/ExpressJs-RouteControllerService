import UserController from "../controller/user.controller";
import UserServices from "../services/user.services";
import UserModel from "../model/user.model";

const UserServiceInstance = new UserServices(UserModel);
const UserControllerInstance = new UserController(UserServiceInstance);

export default (app) => {
  app.get("/user", UserControllerInstance.getUsers);
};
