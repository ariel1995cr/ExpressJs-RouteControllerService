export default class ClasificationService {
  constructor(ClasificationModel) {
    this.clasification = ClasificationModel;
  }

  getClasification = async (query, page, limit) => {
    try {
      let clasification = await this.clasification.find(query);
      return clasification;
    } catch (error) {
      console.log(error);
      throw Error("Error while Paginating Users");
    }
  };

  postClasification = async (data) => {
    try {
      let error = await this.clasification(data).validateSync();
      if (error) {
        throw error;
      }
      let clasification = await this.clasification(data).save();
      return clasification;
    } catch (error) {
      throw error;
    }
  };

  putClasification = async (id, data) => {
    try {
      const filter = { _id: id };
      let response = await this.clasification.updateOne(filter, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  deleteClasification = async (id) => {
    try {
      const data = { _id: id };
      let response = await this.clasification.remove(data);
      return response;
    } catch (error) {
      throw error;
    }
  };
}
