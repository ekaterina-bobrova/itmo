let app = new Vue({
    el:'#app',
    data:{
        title:'Стража',
        show: false,
    },
    methods:{
        showText: function(){
             this.show = !this.show
        },
        
    },  
})