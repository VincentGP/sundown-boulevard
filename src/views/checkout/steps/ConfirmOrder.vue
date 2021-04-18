<template>
  <div class="row">
    <div class="col-7">
      <div class="row">
        <div class="col-12 mb-2">
          <div class="form-group">
            <label for="Date">Please select date</label>
            <datepicker id="Date" class="form-control" v-model="confirmationDetails.date" :lower-limit="tomorrow" />
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="form-group">
            <label for="Time">Please select time (16-23)</label>
            <input id="Time" class="form-control" type="time" v-model="confirmationDetails.time" min="16:00" max="23:00" required>
          </div>
        </div>
        <div class="col-12 mb-2">
          <label for="email" class="form-label">Please enter your email address</label>
          <input type="email" class="form-control" id="email" v-model="confirmationDetails.email" @change="validateEmail()" placeholder="Email">
          <div v-if="emailValidationMessage != ''" class="invalid-feedback invalid-feedback">
            {{ emailValidationMessage }}
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="People">Please select amount of people (1-10)</label>
            <input id="People" class="form-control" type="number" v-model="confirmationDetails.amountOfPeople" min="1" max="10" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-5">
      <OrderOverview :btnTxt="getOrderStatus" :lastStep="true" :confirmationDetails="confirmationDetails" :validateStep="true" :emailValid="emailValid" />
    </div>
  </div>
</template>

<script>
import OrderOverview from '@/components/OrderOverview.vue'
import { mapGetters } from "vuex";
import Datepicker from 'vue3-datepicker'

export default {
  components: {
    OrderOverview,
    Datepicker
  },
  data() {
    return {
      confirmationDetails: {
        email: '',
        amountOfPeople: 1,
        time: '16:00',
        date: new Date()
      },
      emailValidationMessage: '',
      emailValid: false,
      btnTxt: 'Confirm order',
      tomorrow: new Date()
    }
  },
  created() {
    // Initialize date properties
    const today = new Date();
    const tomorrow = new Date(today);
    this.confirmationDetails.date = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
    this.tomorrow = new Date(tomorrow.setDate(tomorrow.getDate() + 1));

    // Set properties and validate email
    if (this.currentOrder.email != '') {
      this.confirmationDetails.email = this.currentOrder.email;
      this.validateEmail();
    }
    this.confirmationDetails.amountOfPeople = this.currentOrder.amountOfPeople;
    this.confirmationDetails.time = this.currentOrder.time;
    this.confirmationDetails.date = new Date(this.currentOrder.date);
  },
  methods: {
    validateEmail() {
      const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.confirmationDetails.email);
      this.emailValidationMessage = emailValid ? '' : 'Please enter a valid email address';
      this.emailValid = emailValid;
    }
  },
  computed: {
    ...mapGetters([
      'currentOrder',
      'getOrderStatus'
    ])
  }
}
</script>