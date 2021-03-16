export default class MovieService {
  constructor(MovieModel) {
    this.movie = MovieModel;
  }

  getMovie = async (query, page, limit) => {
    try {
      let movie = await this.movie.find(query).populate("clasification");
      console.log(movie);
      return movie;
    } catch (error) {
      console.log(error);
      throw Error("Error while Paginating Users");
    }
  };

  postMovie = async (data) => {
    try {
      let error = await this.movie(data).validateSync();
      if (error) {
        throw error;
      }
      let movie = await this.movie(data).save();
      return movie;
    } catch (error) {
      throw error;
    }
  };

  putMovie = async (id, data) => {
    if (data.name == "") {
      throw "El campo name es obligatorio.";
    }
    try {
      const filter = { _id: id };
      let response = await this.movie.updateOne(filter, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  deleteMovie = async (id) => {
    try {
      const data = { _id: id };
      let response = await this.movie.remove(data);
      return response;
    } catch (error) {
      throw error;
    }
  };
}
