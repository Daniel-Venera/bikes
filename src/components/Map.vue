<template>
  <div class="map">
    <div class="grid">
      <div v-for="bike in bikes" :key="bike.id">
        {{ bike }}
        <Form :value="bike" @submit="updateBike($event)" />
      </div>
    </div>
    <Form v-model="newBike" @submit="createBike($event)" />
  </div>
</template>
<script>
import Form from "@/components/Form.vue";
import { mapState } from "vuex";
export default {
  name: "HereMap",
  components: {
    Form,
  },
  data() {
    return {
      newBike: {
        battery_level: 0,
        service_status: 1,
        in_order: false,
        location: {
          type: "Point",
          coordinates: [null, null],
        },
        serial_number: "",
      },
    };
  },
  computed: {
    ...mapState(["bikes"]),
  },
  mounted() {
    this.$store.dispatch("getBikes");
  },
  methods: {
    createBike(newBike) {
      console.log(newBike);
      this.$store.dispatch("createBike", newBike);
      this.newBike = {
        battery_level: 0,
        service_status: 1,
        in_order: false,
        location: {
          type: "Point",
          coordinates: [null, null],
        },
        serial_number: "",
      };
    },
    updateBike(bikeToUpdate) {
      console.log(bikeToUpdate);
      this.$store.dispatch("updateBike", bikeToUpdate);
    },
  },
};
</script>
