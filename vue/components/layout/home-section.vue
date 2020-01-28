<template>

<div class="section" >

    <h1 class="title" :style="{ color: baseColor }" >SUPER LANDING</h1>
            
    <h2 class="txl" > a  <b class="highline" :style="{backgroundColor:baseColor }" > Wristband</b> that lets you</h2>
    <h2 class="txl" >wear fitnes  <b class="highline" :style="{backgroundColor:baseColor }" >your way.</b> </h2>

    <h1 class="title2">Find you Work</h1> 

    <img :src="`assets/img/${homeImage}`" />

    <div @click.prevent="changeBase()"  class="selection">
        <span id="color1" image="im.png"  ></span>
        <span id="color2" image="ima.png" ></span>
        <span id="color3" image="n.png" ></span>
        <span id="color4" image="non.png" ></span>
    </div>

</div>

</template>

<script>

export default {
    name : 'HomeSection',
    computed: {

        baseColor: function(){
            return this.$store.state.baseColor
        },

        homeImage: function(){
            return this.$store.state.homeImage
        }

    },
    data: function() {
        return {
            assets: 'assets/img/',
        }
    },
    methods:{

        changeBase: function(){
            this.$store.commit('baseColor', event.target.getAttribute('id') )
            this.$store.commit('homeImage', event.target.getAttribute('image') )
        }

    }
  
}

</script>