let vm = new Vue({
    el: '#app',
    data: {
        firstname: 'jean',
        lastname:  'Delatour',
        fullname: ''
    },
    watch: {
        fullname: function(value) {
            console.log('watch', value)
        }
    }
})