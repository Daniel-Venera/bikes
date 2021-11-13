import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    bikes: [],
  },
  mutations: {
    SET_BIKES(state, value) {
      state.bikes = value;
    },
  },
  actions: {
    getBikes({ commit }) {
      axios
        .get("https://618515f123a2fe0017fff366.mockapi.io/bikes")
        .then((response) => {
          console.log(response.data);
          commit("SET_BIKES", response.data.bikes);
        });
    },
    createBike({ state, commit }, newBike) {
      axios
        .post("https://618515f123a2fe0017fff366.mockapi.io/bikes", newBike)
        .then((response) => {
          var bikes = state.bikes;
          bikes.push(response.data);
          commit("SET_BIKES", bikes);
        });
    },
    updateBike({ state }, bikeToUpdate) {
      axios
        .put(
          "https://618515f123a2fe0017fff366.mockapi.io/bikes/" +
            bikeToUpdate.id,
          bikeToUpdate
        )
        .then((response) => {
          console.log(response.data);
          console.log(state);
        });
    },
  },
});
