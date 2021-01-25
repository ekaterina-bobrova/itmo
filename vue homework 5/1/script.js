Vue.component('главная', { template: `<div> <h1 class='title'>Главная</h1>
                        <p>Магазин чего-нибудь очень нужного.</p> 
                        </div>` });
Vue.component('работы', { template: `<div>
                            <h1 class='title'>Работы</h1>
                            <p  class='text'>Здесь можно посмотреть, что мы уже продали.</p>
                        </div>`});
Vue.component('о нас', { template: `<div>
                            <h1 class='title'>О нас</h1>
                             <p class='text'>Здесь мы рассказываем о том, какие мы классные.</p>
                        </div>`});                        
Vue.component('магазин', { template: `<div>
                            <h1 class='title'>Магазин</h1>
                            <p>Здесь будет можно что-то купить.</p>                            
                        </div>` })                        
let menu = new Vue({
    el:'#menu',
    data:{
        menu:['главная', 'работы', 'о нас', 'магазин'],
        currentPage: 'главная',
    },
    methods:{
        showActivePage: function(e){
             let page = e.target.getAttribute('data-menu');
             return this.currentPage = page
        }
    },
})