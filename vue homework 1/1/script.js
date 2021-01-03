let product = new Vue({
    el:'#product',
    data:{
        product:{
            id:'god1',
            url:'img/dress.jpg',
            title: 'Платье-оверсайз',
            color: 'Болотно-зеленый',
            size: 'M',
            price: 3000.00,
            description: 'Платье-оверсайз зеленого цвета. Будет отлично смотреться на конной прогулке или на экскурсии по Татуину'
        }
    },
    filters: {
       returnPrice: function(value){
           return 'Цена:' + ' ' + value + ' ' + 'рублей';
       } 
    }
    
})