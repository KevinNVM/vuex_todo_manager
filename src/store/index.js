import Vuex from "vuex";
import todos from "./modules/todos";

// Create store
export default new Vuex.Store({
  modules: {
    todos,
  },
});
