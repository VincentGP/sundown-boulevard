<template>
  <div class="row">
    <div class="col-12">
      <span v-if="getCurrentOrder.selectedDish != null">Current dish: {{ getCurrentOrder.selectedDish.strMeal }}</span>
      <ul>
        <li v-for="beverage in getCurrentOrder.selectedBeverages" :key="beverage.id">{{ beverage.name }}</li>
      </ul>
    </div>
    <router-link class="btn btn-primary" :to="navigateTo">{{ btnTxt }}</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    btnTxt: String,
    navigateTo: String
  },
  computed: {
    ...mapGetters([
      'getCurrentOrder'
    ])
  }
};
</script>