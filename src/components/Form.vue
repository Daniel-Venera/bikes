<template>
    <form @submit.prevent="submitForm(value)" class="form">
      <div class="form__input">
        <label>Serial Number</label>
        <br>
        <input v-model="value.serial_number" type="text" required class="form__input--upp" minlength="6" maxlength="6">
      </div>
      <div class="form__input">
        <label>Location</label>
        <br>
        Longitude
        <input v-model="value.location.coordinates[0]" type="number" required step="0.00001">
        <br>
        Latitude
        <input v-model="value.location.coordinates[1]" type="number" required step="0.0001">
      </div>
      <div class="form__input">
        <input v-model="value.in_order" type="checkbox" name="" id="">
        <label>In order</label>
      </div>
      <div class="form__input">
        <label>Service Status</label>
        <br>
        <input v-model="value.service_status" type="number" min="1" max="3">
      </div>
      <div class="form__input">
        <label>Battery Level (in %)</label>
        <br>
        <input v-model="value.battery_level" type="number" min="0" max="100">
      </div>
      <button type="submit">Send</button>
    </form>
</template>
<script>
export default {
    props: {
        value :{
            type: Object,
            default: () => {
                return {} 
            }
        }
    },
    methods: {
        submitForm(value){
            this.$emit('submit', value)
        }
    },
    selected: {
        get() {
            return this.value;
        },
        set(value) {
            this.$emit('input', value);
        } 
    }
}
</script>
<style scoped>
.form {
  margin-top: 40px;
}
.form__input{
  margin-bottom: 16px;
}
.form__input--upp{
  text-transform: uppercase;
}
</style>