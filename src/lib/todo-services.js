import axios from "axios";

class Todos {
  constructor() {
    this.todos = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true
    });
  }


  getAll() {
    return this.todos.get("/todos").then(response => response.data);
  }

  getOne(id) {
    return this.todos.get(`/todos/${id}`).then(response => response.data);
  }

  createOne(state) {
    const { title } = state;
    return this.todos.post("/todos", {title}).then(response => response.data);
  }


}



const todos = new Todos();

export default todos;
