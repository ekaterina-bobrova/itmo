let menu = new Vue({
    el:'#menu',
    data:{
        menu:{
            home: 'Главная',
            shop: 'Магазин',
            about: 'О нас',
            portfolio: 'Работы',
        },

        currentPage: 'home',
    },
    methods:{
        showActivePage: function(e){
             let page = e.target.getAttribute('data-menu');
             return this.currentPage = page
        }
    },
    components:{
        home:{
            template: `<div>
                        <h1 class='title'>Главная</h1>
                        <p>Магазин чего-нибудь очень нужного.</p>
                      </div>`,
        },
            shop:{
            template: `<div>
                            <h1 class='title'>Магазин</h1>
                            <p>Здесь будет можно что-то купить.</p>
                            
                        </div>`,
        },
            about:{
            template: `<div>
                            <h1 class='title'>О нас</h1>
                            <p class='text'>Здесь мы рассказываем о том, какие мы классные</p>
                        </div>`,
        },
            portfolio:{
            template: `<div>
                            <h1 class='title'>Работы</h1>
                            <p  class='text'>Здесь можно посмотреть, что мы уже продали.</p>
                        </div>`,
        }
        
    },
   
})