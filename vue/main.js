import Vue from 'vue'
import App from './components/App.vue'
import './../sass/main.scss'

new Vue({
    el: "#app",
    render: h => h(App),
})