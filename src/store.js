import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      phoneNumber: "",
    };
  },
  mutations: {
    setPhoneNumber(state, payload) {
      // Set the phoneNumber to new value
      state.phoneNumber = payload;
    },
  },
  actions: {
    setPhoneNumber(context, payload) {
      // Set the phonenumber with mutations
      context.commit("setPhoneNumber", payload);
    },
  },
});
export default store;
