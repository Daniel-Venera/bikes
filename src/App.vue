<template>
  <div id="app">
    <HereMap  :center="center" />
  </div>
</template>

<script>
import HereMap from "./components/HereMap.vue";

export default {
  name: "App",
  components: {
    HereMap,
  },
  data(){
    return {
      center:{ 
        lat: 40.730610, 
        lng: -73.935242
      }
    }
  }
};
</script>
