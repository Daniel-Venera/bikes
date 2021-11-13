<template>
  <div class="bikes">
    <h2>Create a Bike</h2>
    <Form
      v-model="newBike"
      @submit="createBike($event)"
    />
    <h2>Bikes</h2>
    <div v-if="message" class="message">
      {{message}}
    </div>
    <div class="grid">
      <div class="card" v-for="bike in bikes" :key="bike.id">
        <p>serial number: {{bike.serial_number}}</p>
        <p>Longitude: {{bike.location.coordinates[0]}}</p>
        <p>Latitude: {{bike.location.coordinates[1]}}</p>
        <p>service_status: {{bike.service_status}}</p>
        <p>in order: {{bike.in_order}}</p>
        <p>battery level: </p>
        <div class="line">
          <div class="line__fill" :style="{width: bike.battery_level + '%', backgroundColor: filledColor(bike.battery_level)}"></div>
        </div>
        <button @click="$router.push({ name: 'Bike', params: { id: bike.id } })">See more</button>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "@/components/Form.vue"
import { mapState } from 'vuex'
export default {
  name: "HereMap",
  components: {
    Form
  },
  data(){
    return {
      message: '',
      newBike: {
        battery_level: 0,
        service_status: 1,
        in_order: false,
        location: {
          type: "Point",
          coordinates: [null,null]
        },
        serial_number: ''
      }
    }
  },
  computed: {
    ...mapState(['bikes']),
  },
  mounted() {
    this.$store.dispatch('getBikes')
    if (this.$route.query.deleted){
      this.message = 'bike n°' + this.$route.query.deleted + ' deleted with success'
    }
  },
  methods: {
    createBike(newBike){
      newBike.serial_number = newBike.serial_number.toUpperCase()
      this.$store.dispatch('createBike', newBike)
      this.newBike = {
        battery_level: 0,
        service_status: 1,
        in_order: false,
        location: {
          type: "Point",
          coordinates: [null,null]
        },
        serial_number: ''
      }
    },
    filledColor(batteryLevel){
      if (batteryLevel < 20){
        return 'red'
      } else if (batteryLevel < 50){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
};
</script>
<style scoped>
.message {
  color: red;
  margin-bottom: 16px;
}
.grid{
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
}
.card {
  padding: 10px;
  border: 1px solid rgb(185, 185, 185) ;
}
@media (min-width: 576px){
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 768px){
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 992px){
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
.line {
  height: 10px;
  background: white;
  border: 1px solid grey;
  margin-bottom: 16px;
}
.line__fill {
  height: 100%;
}
</style>
