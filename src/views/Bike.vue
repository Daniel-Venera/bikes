<template>
  <div class="bike" v-if="bike.location">
    <button @click="$router.push({ name: 'Bikes'})">Return to main</button>
    <Form
      v-model="bike"
      @submit="updateBike($event)"
      text="Update"
    />
    <button @click="deleteBike">Delete</button>
  </div>
</template>
<script>
import axios from "axios";
import Form from "@/components/Form.vue"
import { mapState } from 'vuex'
export default {
  name: "HereMap",
  components: {
    Form
  },
  computed: {
    ...mapState(['bike']),
  },
  mounted() {
    this.$store.dispatch('getBike', this.$route.params.id)
  },
  methods: {
    updateBike(bikeToUpdate){
      bikeToUpdate.serial_number = bikeToUpdate.serial_number.toUpperCase() 
      axios
        .put(
          "https://618515f123a2fe0017fff366.mockapi.io/bikes/" +
          bikeToUpdate.id,
          bikeToUpdate
        )
        .then(() => {
          alert('bike updated !')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteBike() {
      const id = this.bike.serial_number
      axios
        .delete("https://618515f123a2fe0017fff366.mockapi.io/bikes/" + this.bike.id) 
        .then(() => {
          this.$router.push({name: 'Bikes', query: {deleted: id}})
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>
