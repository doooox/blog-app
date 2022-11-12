import { axiosObj } from "./AxiosService";

class PostsService {
  async getAll() {
    try {
      const data = await axiosObj.get('api/posts?filter={"include":["comments"]}');
      return data.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async get(id) {
    try {
      const data = await axiosObj.get(
        `api/posts/${id}?filter={"include":["comments"]}`
      );
      return data.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async add(post) {
    try {
      const data = await axiosObj.post("/api/posts", post);
      return data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async edit(id, post) {
    try {
      const data = await axiosObj.put(`api/posts/${id}`, post);
      return data.data;
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  }
  async delete(id) {
    try {
      const data = await axiosObj.delete(`api/posts/${id}`);
      return data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async addComment(comment, postId) {
    try {
      const data = await axiosObj.post(`api/posts/${postId}/comments`, comment);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}

export default new PostsService();
