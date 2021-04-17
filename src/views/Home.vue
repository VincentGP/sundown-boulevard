<template>
  <div class="home">
    <div class="row">
      <div class="col-12 mt-3">
        <h1 class="text-center">Welcome to Sundown Boulevard!</h1>
      </div>
      <div class="offset-2 col-8 mt-3 mb-4">
        <div class="find-order">
          <input type="email" v-model="email" @keyup.enter="findOrder()" placeholder="Enter email to change previous order">
          <button class="btn btn-primary" @click="findOrder()">Find order</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-6">
        <p>Suspendisse venenatis sem vel ligula tristique, quis vulputate est sollicitudin. Ut massa justo, fringilla at felis congue, pretium congue tortor. Sed justo dolor, faucibus ut ex non, vehicula faucibus erat. Suspendisse scelerisque purus ut diam dapibus, ut vehicula turpis dapibus. Sed sed laoreet quam. Donec pharetra vitae nibh sit amet eleifend. Vestibulum tincidunt ut turpis eu condimentum. Nam id eros diam.</p>
      </div>
      <div class="col-6">
        <swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
        >
          <swiper-slide><img class="img-fluid" src="../assets/cage.jpg" /></swiper-slide>
          <swiper-slide><img class="img-fluid" src="../assets/cage.jpg" /></swiper-slide>
          <swiper-slide><img class="img-fluid" src="../assets/cage.jpg" /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    findOrder() {
      this.$store.commit('loadOrder', this.email);
    }
  }
}
</script>

<style lang="scss" scoped>
.find-order {
  display: flex;
  justify-content: center;
  height: 40px;
  input {
    width: 100%;
    height: 100%;
    min-width: 200px;
    text-indent: 10px;
  }
  .btn {
    height: 100%;
    min-width: 150px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

</style>