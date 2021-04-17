<template>
  <div class="row">
    <div class="col-7">
      <div class="row">
        <!-- <div class="col-12">Select date</div>
        <div class="col-12">Select time</div>
        <div class="col-12">
          amount of people
          <vue-number-input v-model="amountOfPeople" :min="1" :max="10" inline controls></vue-number-input>
        </div> -->
        <div class="col-12">
          <label for="email" class="form-label">Please enter your email address</label>
          <input type="email" class="form-control" id="email" v-model="confirmationDetails.email" @change="validateEmail()">
          <div v-if="emailValidationMessage != ''" class="invalid-feedback invalid-feedback">
            {{ emailValidationMessage }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-5">
      <OrderOverview btnTxt="Confirm order" :lastStep="true" :confirmationDetails="confirmationDetails" :validateStep="true" :emailValid="emailValid" />
    </div>
  </div>
</template>

<script>
import OrderOverview from '@/components/OrderOverview.vue'
import { mapGetters } from "vuex";

export default {
  components: {
    OrderOverview
  },
  data() {
    return {
      confirmationDetails: {
        email: '',
        amountOfPeople: 1
      },
      emailValidationMessage: '',
      emailValid: true,
    }
  },
  created() {
    if (this.currentOrder.email != '') {
      this.confirmationDetails.email = this.currentOrder.email;
    }
  },
  methods: {
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.confirmationDetails.email)) {
        this.emailValidationMessage = '';
        this.emailValidationClass = true;
        } else {
        this.emailValidationMessage = 'Please enter a valid email address';
        this.emailValidationClass = false;
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentOrder'
    ])
  }
}
</script>