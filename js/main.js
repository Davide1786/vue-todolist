Vue.config.devtools = true;

// const app = new Vue (
//    {
//       el: '#root',
//       data: {
//          add: '',
//          listaPromemoria: [
//             'Accendere il computer',
//             'Inserire la password',
//             'Aprire l\'ediotr di codice',
//             'Aprire Google',
//             'Iniziare a scrivere codice per svolgere l\'esercizio'
//          ]
//       },
//       methods: {
//          addPromemoria() {
//             if(this.add == ''){
//                alert('Inserisci un promemoria');
//             }
//             else {
//                this.listaPromemoria.push(this.add);
//                this.add = '';
//             }
//          },
//          removeProme(index) {
//             this.listaPromemoria.splice(index, 1);
//          },
//          onEnter() {
//             this.listaPromemoria.push(this.add);
//             this.add = '';
//          }
//       }
//    }
// )

// =========================================================== versione con array di oggetti

const app = new Vue (
   {
      el: '#root',
      data: {
         add: '',
         listaPromemoria: [ 
            {
               titolo: 'Pulire la casa',
               done: true,
            },
            {
               titolo: 'Aprire i balconi',
               done: false,
            },
            {
               titolo: 'Cambiare le lenzuola',
               done: false,
            },
            {
               titolo: 'Fare la spesa',
               done: true,
            },
         ]
      },
      methods: {
         addPromemoria() {
            if(this.add == ''){
               alert('Inserisci un promemoria');
            }
            else {
               this.listaPromemoria.push({titolo: this.add, done: false});
               this.add = '';
            }
         },
         removeProme(index) {
            this.listaPromemoria.splice(index, 1);
         },
         onEnter() {
            this.listaPromemoria.push({titolo: this.add, done: false});
            this.add = '';
         },
         cambioColore(promemoria){
           promemoria.done = !promemoria.done;
      
         }
      }
   }
)

