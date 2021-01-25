Vue.component('v-painting', {
    props: ['item','index','removefn'],               
    template: `<div class="gallery">
           <img :src="item.url" :alt="item.title" class='gallery-img'>
           <a :href="item.url" class="gallery-link">{{ item.title }}</a>
           <a href = '#' class='delete'  v-on:click="removefn(index)">X</a>
       </div>`,   
})
Vue.component('v-gallery', {
    props: ['paintings','addfn','remove'],
    data: function (){
        return {
            item: {title:'', url:''}
        }
    },
    template: `<div class='container'>
                <div class='form'>
				    <input type="text" v-model="paintings.title" placeholder="Укажите название картины"/>
				    <input type="text" v-model="paintings.url" placeholder="Укажите ссылку на картину"/>
				    <button  v-on:click="addfn({title:paintings.title, url:paintings.url})">Добавить</button>
				</div>
               <div class='wrap-gallery'>
                 <v-painting v-for="(item, index) in paintings" :key="index"
                    :index="index"
                    :removefn="remove"
                    :item='item'></v-painting>
               </div>
            </div>`
    
});
new Vue ({
    el:'#app',
    data:{
        paintings: [
            {
                title:'Клод Моне. Белые кувшинки',
                url:'https://pushkinmuseum.art/data/fonds/europe_and_america/j/2001_3000/zh_3309/4168_foto_1_03.jpg'
            },
            {
                title:'Винсент ван Гог. Цветущие ветки миндаля',
                url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/345px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg'
            },
            {
                title:'Джон Эннекинг. Цветущие луга',
                url:'https://artifex.ru/wp-content/uploads/2017/10/%D0%96%D0%B8%D0%B2%D0%BE%D0%BF%D0%B8%D1%81%D1%8C_%D0%94%D0%B6%D0%BE%D0%BD-%D0%AD%D0%BD%D0%BD%D0%B5%D0%BA%D0%B8%D0%BD%D0%B3_Blooming-Meadows-1897.jpg'
            },
         ],
        nameSite: 'Галерея',
        
    },
		methods:{
			remove: function(index){
				this.paintings.splice(index, 1);
			},
			add: function(item){
				this.paintings.push(item);
			}
		}
})