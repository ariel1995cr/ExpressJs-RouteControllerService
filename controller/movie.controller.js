export default class MovieController {
  constructor(movieService) {
    this.movieService = movieService;
  }

  getMovie = async (req, res) => {
    let page = req.params.page ? req.params.page : 1;
    let limit = req.params.limit ? req.params.limit : 10;
    try {
      let movies = await this.movieService.getMovie({}, page, limit);
      return res.status(200).json({
        status: 200,
        data: movies,
        message: "Succesfully Movie Retrieved",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  postMovie = async (req, res) => {
    let data = req.body;
    try {
      let movie = await this.movieService.postMovie(data);
      return res.status(200).json({
        status: 200,
        data: movie,
        message: "Succesfully Movie Created",
      });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  };

  putMovie = async (req, res) => {
    try {
      let movie = await this.movieService.putMovie(req.params.id, req.body);
      return res.status(200).json({
        status: 200,
        data: movie,
        message: "Succesfully Movie Updated",
      });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  };

  deleteMovie = async (req, res) => {
    try {
      let movie = await this.movieService.deleteMovie(req.params.id);
      return res.status(200).json({
        status: 200,
        data: movie,
        message: "Succesfully Movie Delete",
      });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  };
}
