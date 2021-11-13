import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    bikes: [],
    bike: {}
  },
  mutations: {
    SET_BIKES(state, value) {
      state.bikes = value;
    },
    SET_BIKE(state, value) {
      state.bike = value;
    },
  },
  actions: {
    getBikes({ commit }) {
      axios
        .get("https://618515f123a2fe0017fff366.mockapi.io/bikes")
        .then((response) => {
          commit("SET_BIKES", response.data.bikes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBike({ commit }, bikeId) {
      axios
        .get("https://618515f123a2fe0017fff366.mockapi.io/bikes/" + bikeId) 
        .then((response) => {
          commit("SET_BIKE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createBike({ state, commit }, newBike) {
      axios
        .post("https://618515f123a2fe0017fff366.mockapi.io/bikes", newBike)
        .then((response) => {
          var bikes = state.bikes;
          bikes.push(response.data);
          commit("SET_BIKES", bikes);
          alert('bike n°' + newBike.serial_number + ' created')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
