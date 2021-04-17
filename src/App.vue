<template>
  <div id="nav">
    <div class="row align-items-center">
      <div class="col">
        <router-link to="/">
          <img src="./assets/logo.svg" class="img-fluid logo" alt="Sundown Boulevard logo">
        </router-link>
      </div>
      <div v-for="(navigationItem, i) in navigation" :key="i" class="col navigation-item">{{ navigationItem }}</div>
      <router-link class="btn btn-primary col" to="/select-dish">{{ getOrderStatus }}</router-link>
    </div>
  </div>
  <div class="container mt-3 mb-5">
    <router-view/>
  </div>
  <footer class="text-center">
    Sundown Boulevard
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      navigation: [
        'Restauranter',
        'Produkter',
        'Nyhedsbrev',
        'Kontakt'
      ]
    }
  },
  beforeCreate() {
    this.$store.commit('loadOrder');
  },
  computed: {
    ...mapGetters([
      'getOrderStatus'
    ])
  }
}
</script>

<style lang="scss">

$primary: #BA2329;
$secondary: #007DDB;
$tertiary: #FDEC60;
// Override Bootstrap colors
$theme-colors: (
   primary: $primary,
   secondary: $secondary,
   tertiary: $tertiary
);
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #F7F4EC;
}

.container {
  @media screen and (min-width: 1440px) {
    max-width: 1070px;
  }
}

#nav {
  padding: 15px 30px;
  background-color: #f9f9f9;
  box-shadow: -13px -12px 13px 8px #888888;

  .logo {
    max-height: 80px;
  }

  .navigation-item {
    text-transform: uppercase;
    font-size: 14px ;
    font-weight: 700;
  }

  @media screen and (min-width: 1440px) {
    padding: 15px 200px;
  }
}

h1 {
  font-weight: 700;
}

.btn {
  font-weight: 900;
  text-transform: uppercase;
}

.btn-secondary {
  color: #fff;
}

.invalid-feedback {
  display: block;
}

.swiper-pagination-bullet-active {
  background-color: $primary !important;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: $secondary;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  z-index: 10;
}

</style>
