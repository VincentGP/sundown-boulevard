<template>
  <div class="row">
    <div class="col-8">
      <div class="row">
        <div class="col-6" v-for="beverage in beveragesToShow" :key="beverage.id" @click="toggleBeverage(beverage)">
          <div class="border mb-3 p-2">
            <img class="img-fluid mx-auto d-block" :src="beverage.image_url" />
            <h5 class="fw-bold">{{ beverage.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <OrderOverview btnTxt="Yes, confirm and continue.." />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OrderOverview from '../OrderOverview';

  export default {
    components: { OrderOverview },
    data() {
      return {
        beverages: []
      }
    },
    created() {
      this.loadBeverages();
    },
    methods: {
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
      }
    },
    computed: {
      beveragesToShow() {

        return this.beverages;
      }
    }
  }
</script>

<style lang="scss" scoped>
img {
  max-height: 200px;
}
</style>