export default class ClasificationController {
  constructor(clasificationService) {
    this.clasificationService = clasificationService;
  }

  getClasification = async (req, res) => {
    let page = req.params.page ? req.params.page : 1;
    let limit = req.params.limit ? req.params.limit : 10;
    try {
      let users = await this.clasificationService.getClasification(
        {},
        page,
        limit
      );
      return res.status(200).json({
        status: 200,
        data: users,
        message: "Succesfully Clasification Retrieved",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  postClasification = async (req, res) => {
    let data = req.body;
    try {
      let clasification = await this.clasificationService.postClasification(
        data
      );
      return res.status(200).json({
        status: 200,
        data: clasification,
        message: "Succesfully Clasification Created",
      });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  };

  putClasification = async (req, res) => {
    try {
      let clasification = await this.clasificationService.putClasification(
        req.params.id,
        req.body
      );
      return res.status(200).json({
        status: 200,
        data: clasification,
        message: "Succesfully Clasification Updated",
      });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  };

  deleteClasification = async (req, res) => {
    try {
      let clasification = await this.clasificationService.deleteClasification(
        req.params.id
      );
      return res.status(200).json({
        status: 200,
        data: clasification,
        message: "Succesfully Clasification Delete",
      });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  };
}
