let app = new Vue({
    el:'#app',
    data:{
        services:[
            {price: 2000,
            title:'Портрет по фотографии',
            },
            {price: 1500,
            title:'Эскиз',
            },
            {price: 4000,
            title:'Портрет в присутствии заказчика',
            },
            {price: 900,
            title:'Шарж',
            },
            {price: 7500,
            title:'Двойной портрет',
            },
        ],
        totalPrice: [],
    },
    computed:{
        sumTotalPrice: function(){
            let finalPrice = 0;
            for(let i = 0; i < this.totalPrice.length; i++){
                finalPrice += this.totalPrice[i];
            }
            return finalPrice;
        }
    } 
})