<template>
  <div class="row">
    <div v-if="savedOrder != null" class="col-12">
      <h1 class="text-center">Receipt</h1>
      {{ savedOrder.email }}
    </div>
    <div v-else class="col-12">
      Order not found...
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
  }
}
</script>