<template>
  <div class="row">
    <div v-if="!isLoading" class="col-8">
      <div class="card">
        <img
          class="card-img-top img-fluid"
          :src="currentDish.strMealThumb"
          :alt="currentDish.strMeal"
          :title="currentDish.strMeal"
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ currentDish.strMeal }}</h5>
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
    <div class="col-4">
      <OrderOverview btnTxt="I'm thirsty.." navigateTo="/select-beverage" :validateStep="false" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OrderOverview from '../../../components/OrderOverview.vue';

export default {
  components: { OrderOverview },
  data() {
    return {
      currentDish: null,
      isLoading: true
    };
  },
  created() {
    this.loadDish();
  },
  methods: {
    tryAnotherDish() {
      const newDish = this.food[Math.floor(Math.random() * this.food.length)];
      this.currentDish = newDish;
    },
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
    shortDescription() {
      const maxLength = 200;
      if (this.currentDish.strInstructions.length > maxLength) {
        return `${this.currentDish.strInstructions.substring(0, maxLength)}...`;
      } else {
        return this.currentDish.strInstructions;
      }
    },
  },
};
</script>