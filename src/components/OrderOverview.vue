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
    navigateTo: String,
    validateStep: Boolean
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
      if (this.validateStep) {
        // Perform validation logic
        this.getCurrentOrder.selectedBeverages.length > 0 ? this.validated = true : this.validated = false;
      } else {
        this.validated = true;
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentOrder'
    ])
  }
};
</script>