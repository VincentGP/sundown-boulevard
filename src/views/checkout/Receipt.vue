<template>
  <div class="row">
      <div class="row">
        <div v-if="savedOrder != null" class="offset-3 col-6 receipt">
          <h1 class="text-center">Receipt</h1>
          <div>Email: {{ savedOrder.email }}</div>
          <div>Time: {{ savedOrder.time }}</div>
          <div>Date: {{ formattedDate }}</div>
          <div>Amount of people: {{ savedOrder.amountOfPeople }}</div>
          <div>Selected dish: {{ savedOrder.selectedDish.strMeal }}</div>
          <div>Beverages: {{ beverages }}</div>
        </div>
        <div v-else class="col-12">
          Order not found...
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedOrder: null
    }
  },
  created() {
    const email = this.$route.query.email;
    if (email != undefined) {
      const key = `currentOrder_${email}`;
      const savedOrder = localStorage.getItem(key);
      if (savedOrder != null) {
        this.savedOrder = JSON.parse(savedOrder);
      }
    }
  },
  computed: {
    beverages() {
      return this.savedOrder.selectedBeverages.map(x => x.name).join(', ');
    },
    formattedDate() {
      return new Date(this.savedOrder.date).toDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
.receipt {
  padding: 30px;
  background-color: #fff;
  box-shadow: -1px 2px 9px 0px #888888;
  border-radius: 8px;
}
</style>