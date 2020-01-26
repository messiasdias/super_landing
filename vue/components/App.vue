<template>

    <div id="app" >
        <div class="clip"></div>

        <div class="container">
            <Menu/>
            <HomeSection/>
            <HomeFooter/>
        </div>
    </div>

</template>
<script>
import Menu from './layout/menu.vue'
import HomeSection from './layout/home-section.vue'
import HomeFooter from './layout/home-footer.vue'

export default {
    name : 'App',
    components:{
        Menu,
        HomeSection,
        HomeFooter
    }


}

</script>