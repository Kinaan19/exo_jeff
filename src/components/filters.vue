<template>
	<div id="navbar">
    <div class="container">
			<div class="row">
				<div class="col-sm-12">
            <div class="row text-center justify-content-between">
              <div class="py-1 col-sm-3">
                <div class="bg-dark">
                  <h5>Todo</h5>
                </div>
                <todo/>
                </div>
              <div class="py-1 col-sm-3 offset-1">
                <div class="bg-dark">
                  <h5>Doing</h5>
                </div>
                <doing/>
              </div>
              <div class="py-1 col-sm-3 offset-1">
                <div class="bg-dark">
                  <h5>Done</h5>
                </div>
                <done/>
              </div>
            </div>
				</div>
			</div>
    </div>   
	</div>
</template>

<script>
// @ is an alias to /src
import todo from '@/components/todo.vue';
import doing from '@/components/doing.vue';
import done from '@/components/done.vue';
// import draggable from 'vuedraggable';

// import {mapGetters} from 'vuex';


export default {
  components: {
    todo,
    doing,
    done
    // draggable
  },
	computed: {
    // ...mapGetters([
    //   'todoItems'
    // ])
	},
	methods: {

	}
}
</script>

<style scoped>
h5{
	color: #ccc;
  margin: 0;
}
</style>