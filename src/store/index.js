import { createStore } from 'vuex'

export default createStore({
  state: {
    currentOrder: {
      selectedDish: null,
      selectedBeverages: [],
      dateAndTime: new Date(),
      amountOfPeople: 0,
      email: ''
    }
  },
  mutations: {
    toggleBeverageSelection(state, beverageData) {
      const index = state.currentOrder.selectedBeverages.findIndex(x => x.id == beverageData.id);
      index === -1 ? state.currentOrder.selectedBeverages.push(beverageData) : state.currentOrder.selectedBeverages.splice(index);
    }
  },
  actions: {
    updateOrder({commit}, orderData) {

    }
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
  // modules: {
  // }
})
