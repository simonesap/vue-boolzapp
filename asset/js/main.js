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
                picture: '_io'
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
            //     console.log(day.js().minute);
            //     let minute = day.js().minute;
            // },
        indexChanged: 0,
        newChat: '',
        status: 'sent'
        },
        methods: {

            // Funzione per richiamare l'ultimo elemento di un array di oggetti
            // lastHour: function(indexHour){
            //     console.log(this.contact.messages.length());
            //     this.indexHour = index;
            // },

            // Funzione che riconosce l'index dell'elemento ciclato
            // e al click sul tag li mi cambia l'index,
            // e inserendola nel tag img della chat di destra
            // mi restituisce l'indice cliccato stampandolo a video
            changeContact: function(indexClick){
                console.log(indexClick);
                // Creo la variabile ha come valore il parametro della 
                // funzione chiamato nel forcioè index
                this.indexChanged = indexClick;
                console.log(`l'index è diventato: ${this.indexChanged}`);
            },
            
            
            newStringUser: function(){
                let newStringObj = {
                    date: this.date_function(),
                    hour: this.showDate(),
                    message: this.newMessages,
                    status: 'sent',
                }
                if( !this.newMessages == '') {
                this.newMessagess.push(newStringObj)

                //svuotare l'input dopo aver pushato la nuova todo
                this.newMessages = ''
            }
        
            // showDate(){
            // const dateObj = new Date();
            // const currentDate = dateObj.getDate()+"/"+dateObj.getMonth()+"/"+dateObj.getFullYear();
            // console.log(currentDate);
            // }
        
     
            },
            date_function: function () {
   
                var currentDate = new Date();
                console.log(currentDate);
      
                var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
                console.log(formatted_date);
         
            }
        },
            mounted () {
            this.date_function()
            }
    },
    
)