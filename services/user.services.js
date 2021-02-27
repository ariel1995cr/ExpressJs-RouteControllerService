export default class UserService {
  constructor(UserModel) {
    this.User = UserModel;
  }

  getUsers = async (query, page, limit) => {
    try {
      var user = await this.User.find(query);
      return user;
    } catch (error) {
      console.log(error);
      throw Error("Error while Paginating Users");
    }
  };
}
