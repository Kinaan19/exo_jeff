import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Container, Draggable} from 'vue-smooth-dnd'
import VueDraggable from 'vuedraggable'

Vue.use(VueDraggable)
Vue.use(Container, Draggable)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
