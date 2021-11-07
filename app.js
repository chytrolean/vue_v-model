const app = Vue.createApp({
   data(){
        return{
        newWho: '',
        newWat: '',
        characters: [{
            "who":'Finn the Human',
            "wat": 'Human with low IQ as fuck',
            cool: 52
        },{
            "who":'Dwayne the cock',
            "wat":'cock with small pnis',
            cool:80

        }
        ]
    }
    },
    methods: {
      add(){
        if( !this.newWho || !this.newWat) return

          this.characters.push({
              who: this.newWho,
              wat: this.newWat,
              cool: Math.floor(Math.random()* (80 - 8) + 8)
          })

          this.newWho = ''
          this.newWat = ''
      },
      remove(dude){
          this.characters = this.characters.filter(item => item !== dude)
      }
    }
})

app.mount('#app')