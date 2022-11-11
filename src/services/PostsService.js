import { axiosObj } from "./AxiosService";

class PostsService {
  async getAll() {
    try {
      const data = await axiosObj.get("/api/posts");
      return data.data;
    } catch (error) {
      // console.log("Something went wrong", error);
    }
    return [];
  }
  async get(id) {
    try {
      const  data  = await axiosObj.get(`api/posts/${id}`);
      return data.data;
    } catch (error) {
      console.log("Get ",error);
    }
    return [];
  }
  async add(post) {
    try {
      const  data  = await axiosObj.post("/api/posts", post);
      return data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async edit(id, post) {
    try {
      const { data } = await axiosObj.put(`api/posts/${id}`, post);
      return data.data;
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  }
}

export default new PostsService();
