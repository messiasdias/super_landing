import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    baseColor: '#ff7a6c',
    homeImage: 'im.png',
}

var mutations = {

    baseColor: function(state, name){

        if(name){
        var color    
            switch(name.toLowerCase()){
                default:
                case 'color1':
                    color = '#ff7a6c'
                break   

                case 'color2':
                    color = 'deepskyblue'
                break
                
                case 'color3':
                    color = '#2c4895'
                break 

                case 'color4':
                    color = '#e0bc4d'
                break 
            }

            state.baseColor = color
        }
    },


    homeImage : function(state, image){
        if(image){
            state.homeImage = image
        }
    }

    

}

var store = new Vuex.Store({
    state,
    mutations
})

export default store