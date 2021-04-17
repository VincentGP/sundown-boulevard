<template>
  <div class="row">
    <div v-if="!isLoading" class="col-7">
      <div class="card">
        <img
          class="card-img-top img-fluid"
          :src="currentOrder.selectedDish.strMealThumb"
          :alt="currentOrder.selectedDish.strMeal"
          :title="currentOrder.selectedDish.strMeal"
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ currentOrder.selectedDish.strMeal }}</h5>
          <p class="card-text">{{ shortDescription }}</p>
        </div>
      </div>
      <div class="row g-0">
        <div class="offset-7 col-5">
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
      currentDish: null,
      isLoading: true
    };
  },
  created() {
    // If user no current dish is selected
    if (this.currentOrder.selectedDish == null) {
      this.loadDish();
    } else {
      this.isLoading = false;
    }
  },
  methods: {
    loadDish() {
      this.isLoading = true;
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
          if (res.data.meals.length > 0) {
            this.currentDish = res.data.meals[0];
            this.$store.commit('selectDish', this.currentDish);
            this.isLoading = false;
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
      const maxLength = 200;
      if (this.currentOrder.selectedDish.strInstructions.length > maxLength) {
        return `${this.currentOrder.selectedDish.strInstructions.substring(0, maxLength)}...`;
      } else {
        return this.currentOrder.selectedDish.strInstructions;
      }
    },
  },
};
</script>