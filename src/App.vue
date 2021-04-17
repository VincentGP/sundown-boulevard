<template>
  <div id="nav">
    <div class="row align-items-center">
      <div class="col">
        <router-link to="/">
          <img src="/logo.svg" class="img-fluid mx-auto d-block logo" alt="Sundown Boulevard logo">
        </router-link>
      </div>
      <div v-for="(navigationItem, i) in navigation" :key="i" class="col navigation-item">{{ navigationItem }}</div>
    </div>
  </div>
  <div class="container mt-3 mb-3">
    <router-view/>
  </div>
  <footer class="text-center">
    Sundown Boulevard
  </footer>
</template>

<script>
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
  }
}
</script>

<style lang="scss">

$secondary: #007DDB;
$tertiary: #FDEC60;
// Override Bootstrap colors
$theme-colors: (
   primary: #BA2329,
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 15px 110px;
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

footer {
  background-color: $secondary;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
}

</style>
