// Descrizione:
// Oggi iniziamo una nuova esercitazione che ci terrà occupati oggi, Martedì e Mercoledì.
// Come detto questa mattina ogni giorno vi verranno assegnate una o più milestone che io correggerò il giorno seguente all'assegnazione.
// La correzione avverrà in classe alle 9.30 del mattino, quindi ogni mattina ci troveremo in classe alle 9.30 (la presenza non è facoltativa).
// Oggi iniziamo con la milestone 1:
// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto
// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato
// ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
// Consigli utili:
// ● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
// lista dei contatti
// ● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
// ● Per gestire le date, può essere utile la libreria day.js
// ● La struttura dell’array dei contatti potrebbe avere questa forma:

var app = new Vue(
    {
        el: '#root',
        data: {
            user: [
                {
                name: 'Simone',
                picture: '_2'
                },
            ],
            // contacts[indexOggetto].messages.message 
            // questo metodo è per entrare in un oggetto di oggetto
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour:  '15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020',
                            hour: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            hour: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020', 
                            hour: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020',
                            hour: '10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            hour: '10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            hour: '16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            // created() {
            //     
            // },
            
            // Counter è il mio indice che vale zero,
            // che uso nella function  
            counter: 0,

            counterIndex: -1,
            
            // Input v-model barra inserimento messaggio chat colonna destra 
            newChat: '',
            
            // Stato di default del mittente
            status: 'sent',

            // Input v-model barra ricerca colonna sinistra
            newSearch: '',

            // Stato di default dell'active per mostrare le info all'hover del messaggio
            active: false,
            },

        methods: {

            // Funzione che riconosce l'index dell'elemento ciclato
            // e al click sul tag <li> cambia l'index,
            // e inserendola nel tag img della chat di destra
            // mi restituisce l'indice cliccato stampandolo a video
            lookIndex: function(indexClick){
                console.log(indexClick);
                this.counter = indexClick;
                console.log(`l'index cliccato è: ${this.counter}`);
            },
            
            // Funzione che collegata al @click, e all'inserimento  di un input
            // pusha il nuovo testo nell'array newMessages
            newStringUser: function(index){
                // Grazie alla libreria Day.js di Vue dichiaro date ed orario direttamente 
                // nella funzione senza creare un metodo esterno 
                let todayDate = dayjs().format('DD/MM/YYYY');
                let hour = dayjs().format('hour');
                let minute = dayjs().format('minute');

                // Creo il nuovo oggetto da pushare nell'array di oggetti padre messages
                let newMessagesSent = {
                    date: `${todayDate} ${hour} ${minute}`,
                    message: this.newChat,
                    status: 'sent',
                }

                let newMessagesReceived = {
                    date: `${todayDate} ${hour} ${minute}`,
                    message: 'Ok Rick!',
                    status: 'received',
                }

                this.contacts[this.counter].messages.push(newMessagesSent);

                this.newChat = '';

                // Funzione setTimeout che inserisco direttamente nella funzione
                setTimeout(
                    () => {
                        this.contacts[this.counter].messages.push(newMessagesReceived)
                    }, 3000);
            },

            // Funzione che riconosce lettere gia inserite nella barra di ricerca a sinistra
            searchMethod: function(){
                this.contacts.forEach(
                    (user) => {
                        if(user.name.toLowerCase().includes(this.newSearch.toLowerCase())){
                            this.user.visible = true;
                        } 
                            this.user.visible = false;
                            return
                    } 
                );
            },

            // Funzione hover sull'elemento
            mouseOver: function(){
                if(this.active = !this.active){
                    this.active = true;
                }  else {
                    this.active = false
                }
            },

            // Funzione che telimina un messaggio dalla chat
            removeMessage: function(index) {
                //splice
                //elemento in base alla posizione dell'indice, quanti
                //elementi togliere da quella posizione
                
                // this.contacts[this.counter].messages[this.counter].message.splice( index, 1 );
                
                // return

                if(confirm(`Confermi di voler eliminare il messaggio? "${this.contacts[this.counter].messages[this.mouseOver()].message}"`)){
        
                }
                this.contacts[this.mouseOver(index)].messages[this.mouseOver(index)].message.splice(this.mouseOver(index), 1);
                
                console.log('message',message)
                console.log(index);
            },
        



            // Funzione che riconosce l'ultimo elemento di un array
            // lookLastIndex: function(indexClick){
            //     console.log(indexClick);
            //     this.counter = indexClick;
            //     console.log(`l'index cliccato è: ${this.counter[-1]}`);
            // },

            // counterLength: function(index){
            //     if(this.counter){
            //       return counter.length[-1]
            //     }
            //     return '';
            //   },

            // Funzione che mi permette di controllare se visible è true o false
            // dando v-b-visible="visibleHandler" al tag html
            // visibleHandler(isVisible) {
            //     if (isVisible) {
            //       // Do something
            //     } else {
            //       // Do something else
            //     }
            //   },

            // Funzione che restituisce una risposta
            // al messaggio inserito in input con un setTimeout di 3 secondi
            // replyOkMethod: function(){
            //     let message = this.contacts[this.counter].messages;
            //     let dateTime = this.dateMethod();
            //     setTimeout(function() {
            //         message.push({
            //         date: dateTime,
            //         message: 'Ok',
            //         status: 'received'
            //     });
            //     }, 3000);
            // },

            // Funzione per estrarre la data 
            // dateMethod(){
            //     let today = new Date().toLocaleDateString();
            //     let now = new Date().toLocaleTimeString();

            //     let date = now + ' ' + today;
            //     return date;
            // },

            // Funzione per richiamare l'ultimo elemento di un array di oggetti
            // lastHour: function(indexHour){
            //     console.log(this.contact.messages.length());
            //     this.indexHour = index;
            // },


            // Funzione data e orario
            // showDate: function(){
            // const dateObj = new Date();
            // const currentDate = dateObj.getDate()+"/"+dateObj.getMonth()+"/"+dateObj.getFullYear();
            // console.log(currentDate);
            // }
        },
    }
)
