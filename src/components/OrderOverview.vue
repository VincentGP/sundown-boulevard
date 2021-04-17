<template>
  <div class="row">
    <div class="col-12">
      <span v-if="getCurrentOrder.selectedDish != null">Current dish: {{ getCurrentOrder.selectedDish.strMeal }}</span>
      <ul>
        <li v-for="beverage in getCurrentOrder.selectedBeverages" :key="beverage.id">{{ beverage.name }}</li>
      </ul>
    </div>
    <template v-if="lastStep">
      <button class="btn btn-primary" :class="{ disabled: !validated }" @click="confirmOrder()">{{ btnTxt }}</button>
    </template>
    <template v-else>
      <router-link class="btn btn-primary" :class="{ disabled: !validated }" :to="navigateTo">{{ btnTxt }}</router-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    btnTxt: String,
    navigateTo: String,
    validateStep: Boolean,
    lastStep: Boolean,
    confirmationDetails: Object
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
        // Should be expanded to take validation specific to steps into account
        this.getCurrentOrder.selectedBeverages.length > 0 ? this.validated = true : this.validated = false;
      } else {
        this.validated = true;
      }
    },
    confirmOrder() {
      this.$store.commit('confirmOrder', this.confirmationDetails);
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentOrder'
    ])
  }
};
</script>