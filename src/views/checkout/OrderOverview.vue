<template>
  <div>
    <router-link class="btn btn-primary" to="/select-beverage">{{ btnTxt }}</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      btnTxt: String
    }
  }
</script>