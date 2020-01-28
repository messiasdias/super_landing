<template>

    <div id="app" >
        <div class="clip" :style="{ backgroundColor: this.baseColor }" > </div>

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
    },

    computed:{

        baseColor: function(){
            return this.$store.state.baseColor
        }

    },

    data: function() {
        return {
          
        }
    }


}

</script>