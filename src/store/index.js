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
      index === -1 ? state.currentOrder.selectedBeverages.push(beverageData) : state.currentOrder.selectedBeverages.splice(index, 1);
      saveOrderToLocalStorage(state.currentOrder);
    },
    selectDish(state, dishData) {
      state.currentOrder.selectedDish = dishData;
      saveOrderToLocalStorage(state.currentOrder);
    },
    loadOrder(state) {
      const savedOrder = JSON.parse(localStorage.getItem('currentOrder'));
      if (savedOrder != null) {
        state.currentOrder = savedOrder;
      }
    }
  },
  actions: {
    updateOrder({commit}, orderData) {

    }
  },
  getters: {
    getCurrentOrder: (state) => {
      return state.currentOrder;
    }
  }
})

const saveOrderToLocalStorage = (currentOrder) => {
  localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
}
