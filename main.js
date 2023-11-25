'use strict'
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'il mio primo messaggio in vue-js',
        }
    }
}).mount('#app')