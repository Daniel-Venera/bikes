import Vue from "vue";
import axios from 'axios'
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bikes: []
  },
  mutations: {},
  actions: {
    getBikes(){
      axios.get('https://618515f123a2fe0017fff366.mockapi.io/bikes').then((response)=>{
        console.log(response.data);
      })
    }
  },
});
