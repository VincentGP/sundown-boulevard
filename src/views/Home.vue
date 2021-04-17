<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Welcome to Sundown Boulevard!</h1>
      </div>
      <div class="col-6">
        <router-link class="btn btn-primary" to="/select-dish">{{ btnText }}</router-link>
      </div>
      <div class="col-6">
        <span>Find your order here:</span>
        <input type="email" v-model="email">
        <button class="btn btn-primary" @click="findOrder()">Find order</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>Suspendisse venenatis sem vel ligula tristique, quis vulputate est sollicitudin. Ut massa justo, fringilla at felis congue, pretium congue tortor. Sed justo dolor, faucibus ut ex non, vehicula faucibus erat. Suspendisse scelerisque purus ut diam dapibus, ut vehicula turpis dapibus. Sed sed laoreet quam. Donec pharetra vitae nibh sit amet eleifend. Vestibulum tincidunt ut turpis eu condimentum. Nam id eros diam.</p>
      </div>
      <div class="col-6">
        <swiper
          :slides-per-view="1"
          :space-between="50"
        >
          <swiper-slide><img class="img-fluid" src="/cage.jpg" /></swiper-slide>
          <swiper-slide><img class="img-fluid" src="/cage.jpg" /></swiper-slide>
          <swiper-slide><img class="img-fluid" src="/cage.jpg" /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide, Pagination } from 'swiper/vue';

export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        btnText: 'Create order',
        email: ''
      }
    },
    methods: {
      findOrder() {
        this.$store.commit('loadOrder', this.email);
      }
    },
    created() {
      if (localStorage.getItem('currentOrder') != null) {
        this.btnText = 'Continue order'
      }
    }
}
</script>
