<template>
  <div class="row">
    <div class="col-7">
      <div class="row">
        <div class="col-6 col-lg-4" v-for="beverage in beverages" :key="beverage.id" @click="toggleBeverage(beverage)">
          <div class="border mb-3 p-2 beverage" :class="{ active : isSelected(beverage.id) }">
            <img class="img-fluid mx-auto d-block" :src="beverage.image_url" />
            <h5 class="fw-bold text-center">{{ beverage.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-5">
      <OrderOverview btnTxt="Yes, confirm and continue.." navigateTo="/confirm-order" :validateStep="true" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OrderOverview from '../../../components/OrderOverview.vue';
import beers from '../../../json/beers.json';
import { mapGetters } from "vuex";

export default {
  components: { OrderOverview },
  data() {
    return {
      beverages: beers
    }
  },
  methods: {
    // Service returns CORS error 
    // Requests might be exceeded so use JSON file instead
    loadBeverages() {
      axios.get('https://api.punkapi.com/v2/beers')
        .then(res => {
          if (res.data.length > 0) {
            this.beverages = res.data;
          }
        })
        .catch(err => console.log(err));
    },
    toggleBeverage(beverage) {
      this.$store.commit('toggleBeverageSelection', beverage);
    },
    isSelected(id) {
      return this.selectedBeverageIds.includes(id)
    }
  },
  computed: {
    ...mapGetters([
      'currentOrder'
    ]),
    selectedBeverageIds() {
        return this.currentOrder.selectedBeverages.map(x => x.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.beverage {
  cursor: pointer;
  &.active {
    background-color: #92e692;
  }
  img {
    max-height: 200px;
  }
}
</style>