let vm = new Vue({
    el: '#app',
    data: {
        success : false,
        message: ''
    },
    methods: {
        cls: function (){
            console.log('cls called')
           return this.success === true ? "alert-success" : "alert-danger"
        }
    }
})