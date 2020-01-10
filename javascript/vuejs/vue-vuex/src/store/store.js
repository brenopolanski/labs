import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
    isLarryHappy: true,
    isJennyHappy: true
  },
  getters: {
    // Check if both Larry and Jenny are happy
    happyStaff: state => {
      return state.isLarryHappy && state.isJennyHappy;
    }
  },
  mutations: {
    // Jenny
    removeTv(state, amount) {
      state.totalTvCount -= amount;
    }
  },
  actions: {
    // Larry
    removeTv(context, amount) {
      if (context.state.totalTvCount >= amount) {
        // If we enough TVs, ask Jenny to remove it
        context.commit("removeTv", amount);
      }
    }
  }
});
