<template>
  <div class="row g-5">
    <div class="col-7">
      <div class="row dish">
        <div class="col-6 px-0">
          <img
            class="img-fluid"
            :src="dishImage"
            :alt="dishName"
            :title="dishName"
          />
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ dishName }}</h5>
            <p class="card-text">{{ shortDescription }}</p>
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-12">
          <button class="btn btn-secondary mt-2" @click="loadDish()">
            Try another dish
          </button>
        </div>
      </div>
    </div>
    <div class="col-5">
      <OrderOverview btnTxt="I'm thirsty.." navigateTo="/select-beverage" :validateStep="false" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OrderOverview from '../../../components/OrderOverview.vue';
import { mapGetters } from "vuex";

export default {
  components: { OrderOverview },
  data() {
    return {
      currentDish: null
    };
  },
  created() {
    // If user no current dish is selected
    if (this.currentOrder.selectedDish == null) {
      this.loadDish();
    }
  },
  methods: {
    loadDish() {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
          if (res.data.meals.length > 0) {
            this.currentDish = res.data.meals[0];
            this.$store.commit('selectDish', this.currentDish);
          }
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    ...mapGetters([
      'currentOrder'
    ]),
    shortDescription() {
      const maxLength = 220;
      if (this.dishInstructions.length > maxLength) {
        return `${this.dishInstructions.substring(0, maxLength)}...`;
      } else {
        return this.dishInstructions;
      }
    },
    dishImage () {
      return this.currentOrder.selectedDish != null ? this.currentOrder.selectedDish.strMealThumb : '';
    },
    dishName () {
      return this.currentOrder.selectedDish != null ? this.currentOrder.selectedDish.strMeal : '';
    },
    dishInstructions () {
      return this.currentOrder.selectedDish != null ? this.currentOrder.selectedDish.strInstructions : '';
    }
  },
};
</script>

<style lang="scss" scoped>
.dish {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  img {
    border-top-left-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
}
</style>