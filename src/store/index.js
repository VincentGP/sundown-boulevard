import { createStore } from 'vuex';
import router from '../router/index';

const getDefaultState = () => {
  return {
    currentOrder: {
      selectedDish: null,
      selectedBeverages: [],
      date: new Date(),
      time: '16:00',
      amountOfPeople: 1,
      email: ''
    }
  }
}

const state = getDefaultState();

const mutations = {
  toggleBeverageSelection(state, beverageData) {
    const index = state.currentOrder.selectedBeverages.findIndex(x => x.id == beverageData.id);
    index === -1 ? state.currentOrder.selectedBeverages.push(beverageData) : state.currentOrder.selectedBeverages.splice(index, 1);
    saveOrderToLocalStorage(state.currentOrder, true);
  },
  selectDish(state, dishData) {
    state.currentOrder.selectedDish = dishData;
    saveOrderToLocalStorage(state.currentOrder, true);
  },
  loadOrder(state, email) {
    let notifyUser = false;
    let key = 'currentOrder';
    
    if (email != undefined) {
      notifyUser = true;
      key += `_${email}`;
    }

    // Too much logic - move this to action in future
    const savedOrder = JSON.parse(localStorage.getItem(key));
    if (savedOrder != null) {
      // Saved order becomes current order
      state.currentOrder = savedOrder;
      
      if (notifyUser) {
        alert('Order was found! Navigating to dish selection screen 🤠');
        saveOrderToLocalStorage(state.currentOrder, true);
        router.push('/select-dish');
      }
    } else if (notifyUser) {
      alert('Order was not found... Did you enter the correct email?');
    }
  },
  confirmOrder(state, confirmationDetailsData) {
    // Create better mapping of data
    state.currentOrder.email = confirmationDetailsData.email;
    state.currentOrder.amountOfPeople = confirmationDetailsData.amountOfPeople;
    state.currentOrder.time = confirmationDetailsData.time;
    state.currentOrder.date = confirmationDetailsData.date;
    saveOrderToLocalStorage(state.currentOrder);
    // Clear current order state
    Object.assign(state, getDefaultState());
    // Clear current order localStorage
    localStorage.removeItem('currentOrder');
  }
}

export default createStore({
  state,
  mutations,
  getters: {
    currentOrder: (state) => {
      return state.currentOrder;
    },
    getCurrentDish: (state) => {
      return state.currentOrder.selectedDish;
    },
    // Used to determine whether order is ongoing/being updated or new
    getOrderStatus: (state) => {
      return state.currentOrder.email != '' ? 'Update order' : 'Create order';
    }
  }
})

const saveOrderToLocalStorage = (currentOrder, becomesCurrentOrder = false) => {
  // Create key to be able to fetch saved order (or current order)
  let key = 'currentOrder';
  if (currentOrder.email != '') {
    key += `_${currentOrder.email}`;
    // Delete the saved order from storage and convert to currentOrder
    if (becomesCurrentOrder) {
      localStorage.removeItem(key);
      localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
    } else {
      localStorage.setItem(key, JSON.stringify(currentOrder));
    }
  } else {
    // Save order to localStorage
    localStorage.setItem(key, JSON.stringify(currentOrder));
  }
}
