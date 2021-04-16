<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <router-link class="btn btn-primary" to="/select-food">Order</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
