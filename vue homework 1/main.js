let product = new Vue({
    el:'#product',
    data:{
        product:{
            id:'god1',
            url:'img/dress.jpg',
            title: 'Oversize green dress',
            color: 'green',
            size: 'M',
            price: 100.00,
            discription: 'Платье-оверсайз зеленого цвета'
        }
    },
    filters: {
       returnPrice: function(value){
           return '$' + ' ' + value;
       } 
    }
    
})