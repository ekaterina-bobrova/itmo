let guest = new Vue({
    el:'#guest',
    data:{
        guest:{
            name: 'Петр',
            lastName:'Иванов',
            age: 47 + ' ' + 'лет',
            avatar:'img/avatar.jpg',
            login:'petruha',
            email: 'petr.ivanov@mail.ru',
            dataRegistration: '02.01.2021'
        }
    }
})