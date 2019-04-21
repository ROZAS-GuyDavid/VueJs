let vm = new Vue({
    el: '#app',
    data: {
        message : 'hello world',
        link: 'http:///grafikart.fr',
        cls: 'alert-success',
        persons: ['Jonathan','Marion','Marine','Jean','Patrick']
    },
    methods: {
        close: function(){
            this.success = false
        }
    }
})