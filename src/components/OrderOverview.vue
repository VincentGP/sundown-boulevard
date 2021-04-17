<template>
  <div class="row order-overview">
    <h3>Overview</h3>
    <div class="col-12 mb-3">
      <div class="type" v-if="currentOrder.selectedDish != null">Selected dish: 
        <span class="selection">{{ currentOrder.selectedDish.strMeal }}</span>
      </div>
      <div v-if="currentOrder.selectedBeverages.length > 0" class="type">Selected beverages:
        <ul>
          <li class="selection" v-for="beverage in currentOrder.selectedBeverages" :key="beverage.id">{{ beverage.name }}</li>
        </ul>
      </div>
    </div>
    <template v-if="lastStep">
      <button class="btn btn-tertiary" :class="{ disabled: !validated }" @click="confirmOrder()">{{ btnTxt }}</button>
    </template>
    <template v-else>
      <router-link class="btn btn-tertiary" :class="{ disabled: !validated }" :to="navigateTo">{{ btnTxt }}</router-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from '../router/index';

export default {
  props: {
    btnTxt: String,
    navigateTo: String,
    validateStep: Boolean,
    lastStep: Boolean,
    confirmationDetails: Object,
    emailValid: Boolean
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
        this.currentOrder.selectedBeverages.length > 0 ? this.validated = true : this.validated = false;

        if (this.confirmationDetails != null) {
          console.log(this.confirmationDetails.email);
          
        }

      } else {
        this.validated = true;
      }
    },
    confirmOrder() {
      this.$store.commit('confirmOrder', this.confirmationDetails);
      router.push(`/receipt?email=${this.confirmationDetails.email}`);
    }
  },
  computed: {
    ...mapGetters([
      'currentOrder'
    ])
  }
};
</script>

<style lang="scss" scoped>
  .order-overview {
    position: sticky;
    top: 10px;
    background-color: #D63864;
    padding: 20px;
    border-radius: 8px;
    color: #fff;
    box-shadow: -1px 2px 9px 0px #888888;
    h3 {
      font-weight: 300;
      font-size: 24px;
    }

    .type {
      font-weight: 300;
    }

    .selection {
      font-weight: 600;
    }
  }
</style>