<template>
  <div id="task">
    <div class="row my-2">
      <div class="col-sm-12">
        <div class="container">
          <draggable v-model="$store.state.done" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition">
              <div v-for="(doneItem, id) in doneItems" :key="id" class="row bg-dark py-2 my-2">
                <div class="col-sm-12 tasks">
                  <input class="taskInput" type="text" readonly v-model="doneItem.task">
                  <button class="bg-transparent text-dark editButton"><i class="fas fa-edit editIcon" v-on:click="editTask"></i></button>
                  <div class="row">
                    <div class="col-sm-12">
                      <button class="bg-transparent text-warning"><i class="fas fa-list-ul"></i></button>
                      <button class="bg-transparent text-info"><i class="far fa-clock"></i></button>
                      <button class="bg-transparent text-success"><i class="fas fa-times"></i></button>
                    </div>  
                  </div>
                </div>
              </div> 
            </transition-group>
          </draggable>    
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex';
import draggable from 'vuedraggable';



export default {
  components: {
    draggable
  },
  computed: {
    ...mapGetters([
      'todoItems',
      'doingItems',
      'doneItems'
    ])
  },
  methods: {
    editTask(){      
        if (event.target.classList.contains('fa-edit')) {
          event.target.parentElement.previousSibling.toggleAttribute('readonly');
          event.target.parentElement.previousSibling.focus();
          event.target.parentElement.previousSibling.select();
          event.target.className = "green fas fa-check editIcon";
        }else {
          event.target.parentElement.previousSibling.toggleAttribute('readonly');
          event.target.className = "fas fa-edit editIcon";
        }
    },
    onMove(){
      console.log(event.currentTarget)
    },
    ...mapActions([
      'todoTask',
      'doingTask',
      'doneTask'
    ])
  }
}
</script>

<style scoped>
:focus{
  outline: none;
}
i:hover{
  cursor: pointer;
}
.taskInput{
  padding-left: 15px;
  border: none;
  background-color: #ccc;
}
.tasks{
  position: relative;
}
.editButton{
  position: absolute;
  left: 75%;
  top: 5%;
}
button{
  border: none
}
.green{
  color: #009f55;
}
h5{
	color: #ccc;
  margin: 0;
}
</style>