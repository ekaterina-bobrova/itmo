let app = new Vue({
    el:'#app',
    data:{
        news:[
        {
        title:'Новогодний аттракцион в «Ленинград Центре»',
        description: `Шоу должно продолжаться несмотря ни на что — “Ленинград Центр” решил отметить свой шестой день рождения новогодним аттракционом “Старый отель”. Стартует серия из пяти спектаклей вечером 25 декабря.`,
        url:'https://spb-kraft.ru/novogodnij-attrakczion-v-leningrad-czentre/',
        img:'https://spb-kraft.ru/wp-content/uploads/2020/12/staryj-otel-leningrad-czentr3.jpg'  
        },
        {
        title:`Золотой век джаза от Chigadaev Big Bаnd`,
        description: `29 ноября в культурном пространстве FREEDOM состоится премьера нового проекта петербургского пианиста-виртуоза Станислава Чигадаева — Chigadaev Big Band. Оркестр представит программу «IN THE MOOD», в которую вошли произведения Золотого века джаза.`,
        url:'https://spb-kraft.ru/zolotoj-vek-dzhaza-ot-chigadaev-big-band/',
        img:'https://spb-kraft.ru/wp-content/uploads/2020/11/chigadaev.png'  
        },
        {
        title:`От барокко до танго`,
        description: 'Мир изменился, границы закрыты, но 29 ноября можно будет совершить увлекательное путешествие по странам и даже эпохам. Что сегодня особенно ценно – не в онлайн-режиме. И все благодаря музыке «От барокко до танго».',
        url:'https://spb-kraft.ru/ot-barokko-do-tango/',
        img:'https://spb-kraft.ru/wp-content/uploads/2020/11/2d75ef2a.jpg'  
        },
        {
        title:`Невский проспект превратился в выставочный зал`,
        description: `В эпоху ковидных ограничений группа инициативных художников решила, что раз люди не могут прийти к искусству, искусство само придет к ним. Так на Невском проспекте появилась выставка под открытым небом.`,
        url:'https://spb-kraft.ru/nevskij-prospekt-prevratilsya-v-vystavochnyj-zal/',
        img:'https://spb-kraft.ru/wp-content/uploads/2020/12/img_20201212_123952.jpg'  
        },
    ],
    inputSearch: '',
    title: 'Искусство', 
    number: 0
        
    },

    computed: {
        findNews: function() {
            let arrNews = [];
            for(let i = 0; i < this.news.length; i++){
                let regular = new RegExp(`^.*${this.inputSearch}.*$`,'i');
                let name = this.news[i].title
                if(regular.test(name) && this.inputSearch != '') {
                    arrNews.push(this.news[i]);
                    
                }
            }
            this.number = arrNews.length;
            return arrNews;  
        }
 
    },   
 
})