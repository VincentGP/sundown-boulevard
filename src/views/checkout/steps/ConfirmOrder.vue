<template>
  <div class="row">
    <div class="col-8">
      <div class="row">
        <div class="col-12">Select date</div>
        <div class="col-6">Select time</div>
        <div class="col-6">
          <label for="email">Please enter your email address</label>
          <input id="email" type="email" placeholder="Email" v-model="confirmationDetails.email">
          </div>
      </div>
    </div>
    <div class="col-4">
      <OrderOverview btnTxt="Confirm order" :lastStep="true" :confirmationDetails="confirmationDetails" />
    </div>
  </div>
</template>

<script>
import OrderOverview from '@/components/OrderOverview.vue'

export default {
  components: {
    OrderOverview
  },
  data() {
    return {
      confirmationDetails: {
        email: ''
      }
    }
  }
}
</script>