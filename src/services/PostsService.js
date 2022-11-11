import { axiosObj } from "./AxiosService";

class PostsService {
  async getAll() {
    try {
      const data = await axiosObj.get("/api/posts");
      return data.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async get(id) {
    try {
      const { data } = await axiosObj.get(`api/posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}

export default new PostsService();
