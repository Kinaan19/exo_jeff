<template>
  <div id="home">
    <div class="container">
      <!-- <create/>
      <filters/> -->
      <test/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import filters from '@/components/filters.vue';
// import create from '@/components/create.vue';
import test from '@/components/test.vue';


export default {
  name: 'home',
  components: {
    // filters,
    // create,
    test
  },
  computed: {
  
  },
  methods: {
  
  }
}
</script>

<style scoped>
.container{
  margin-top: 5%;
  padding: 0;
  background-color: #ccc;
}
</style>