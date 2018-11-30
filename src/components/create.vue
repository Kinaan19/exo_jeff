<template>
  <div id="create">
    <div class="bg-dark my-3 py-3 px-5 d-flex justify-content-between create">
      <input class="createInput" type="text" placeholder="Enter a task..." v-model="$store.state.addTaskContent">
      <button class="bg-transparent createButton" v-on:click="addTask()"><i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
  computed: {

  },
  methods: {
    ...mapActions([
      'addTask'
    ])
  }
}
</script>

<style scoped>
:focus{
  outline: none;
}
button:hover{
  cursor: pointer;
}
input{
  height: 30px;
}
.create{
  position: relative;
}
.createInput {
  width: 100%;
  padding-left: 35px;
  background-color: #ccc;
  border: none;
}
.createButton {
  position: absolute;
  right: 10%;
  top: 30%;
  border: none;
}
</style>