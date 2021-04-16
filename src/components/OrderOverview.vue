<template>
  <div class="row">
    <div class="col-12">
      <span v-if="getCurrentOrder.selectedDish != null">Current dish: {{ getCurrentOrder.selectedDish.strMeal }}</span>
      <ul>
        <li v-for="beverage in getCurrentOrder.selectedBeverages" :key="beverage.id">{{ beverage.name }}</li>
      </ul>
    </div>
    <router-link class="btn btn-primary" :class="{ disabled: !validated }" :to="navigateTo">{{ btnTxt }}</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    btnTxt: String,
    navigateTo: String
  },
  data() {
    return {
      validated: false
    }
  },
  created() {
    this.validate();
  },
  beforeUpdate() {
    this.validate();
  },
  methods: {
    validate() {
      this.getCurrentOrder.selectedBeverages.length > 0 ? this.validated = true : this.validated = false;
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentOrder'
    ])
  }
};
</script>