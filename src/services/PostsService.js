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
}

export default new PostsService();
