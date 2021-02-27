export default class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUsers = async (req, res) => {
    let page = req.params.page ? req.params.page : 1;
    let limit = req.params.limit ? req.params.limit : 10;
    try {
      let users = await this.userService.getUsers({}, page, limit);
      return res.status(200).json({
        status: 200,
        data: users,
        message: "Succesfully Users Retrieved",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
}
