import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  // Declare Variables
  state: {
    addTaskContent: "",
    todo: [],
    doing: [],
    done: []
  },
  // Use State in Functions
  getters: {
    todoItems(state){ 
      return state.todo;
    },
    doingItems(state){
      return state.doing;
    },
    doneItems(state){
      return state.done;
    }
  },
  // Mutate the State
  mutations: {
    addTask(state){
      state.todo.push({task: state.addTaskContent, state: 'todo'});
      state.addTaskContent = "";
      // console.log(state.todo);
    }
  },
  actions: {
    addTask(context){
      setTimeout(() => {
        context.commit('addTask');
      }, 500);
    },
    editTask(context){
      context.commit('editTask')
    }
  }
})
