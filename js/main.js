Vue.config.devtools = true;

const app = new Vue (
   {
      el: '#root',
      data: {
         add: '',
         listaPromemoria: [
            'Accendere il computer',
            'Inserire la password',
            'Aprire l\'ediotr di codice',
            'Aprire Google',
            'Iniziare a scrivere codice per svolgere l\'esercizio'
         ]
      },
      methods: {
         addPromemoria() {
            if(this.add == ''){
               alert('Inserisci un promemoria');
            }
            else {
               this.listaPromemoria.push(this.add);
               this.add = '';
            }
         },
         removeProme(index) {
            this.listaPromemoria.splice(index, 1);
         },
         onEnter() {
            this.listaPromemoria.push(this.add);
            this.add = '';
         }
      }
   }
)