<!-- The inbox holds the state of all components -->
<template>
  <div class="inbox">
    <toolbar :emails="emails" :bulkSelect="bulkSelect" :bulkCheckbox="bulkCheckbox"
    :halfCheckbox="halfCheckbox" :emptyCheckbox="emptyCheckbox" :markRead="markRead"
    :markUnread="markUnread" :unreadCount="unreadCount" :deleteEmail="deleteEmail"
    :selected="selected" :selected2="selected2" :options="options" :options2="options2"
    :toggleCompose="toggleCompose"></toolbar>
    <compose :showCompose="showCompose" :sendEmail="sendEmail" :composeForm="composeForm"></compose>
    <messages :emails="emails" :bulkCheckbox="bulkCheckbox" :toggleStar="toggleStar"></messages>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import Messages from './Messages'
import Compose from './Compose'
// import seeds from '../data/seeds'

// const url = 'http://localhost:8082/api'
const url = 'https://immense-oasis-78157.herokuapp.com/api'

export default {
  components: {
    Messages,
    Toolbar,
    Compose
  },
  data() {
    return {
      emails: [],
      composeForm: {
        subject: '',
        body: ''
      },
      showCompose: false,
      selected: null,
      options: [
        {value: null, text: 'Apply Label'},
        {value: 'dev', text: 'dev'},
        {value: 'personal', text: 'personal'},
        {value: 'gschool', text: 'gschool'}
      ],
      selected2: null,
      options2: [
        {value: null, text: 'Remove Label'},
        {value: 'dev', text: 'dev'},
        {value: 'personal', text: 'personal'},
        {value: 'gschool', text: 'gschool'}
      ]
    }
  },
  async mounted() {
    const data = await fetch(`${url}/messages`)
    const response = await data.json()
    this.emails = response._embedded.messages.map(message => {
      message.selected = false
      return message
    })
  },
  computed: {
    unreadCount() {
      let unread = this.emails.filter(email => !email.read)
      return unread.length
    },
    bulkCheckbox() {
      return this.emails.every(email => email.selected)
    },
    halfCheckbox() {
      return this.emails.some(email => email.selected) && !this.bulkCheckbox
    },
    emptyCheckbox() {
      return this.emails.every(email => !email.selected)
    },
  },
  methods: {
    toggleCompose() {
      this.showCompose = !this.showCompose
    },
    sendEmail(event) {
      const data = {
        "subject": this.composeForm.subject,
        "body": this.composeForm.body
      }
      this.emails.push(data)
      const settings = {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${url}/messages`, settings)
       .then(response => {
         if(response.ok){
           console.log(response);
         }
       })
      this.showCompose = false
    },
    deleteEmail() {
      const ids = []
      this.emails = this.emails.filter(email => {
        if (email.selected) {
          ids.push(Number(email.id))
        }
        return !email.selected
      })
      const data = {
        "messageIds" : ids,
        "command" : "delete"
      };
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${url}/messages`, settings)
       .then(response => {
         if(response.ok){
           console.log(response);
         }
       })
    },
    markRead() {
      const ids = []
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].selected) {
          this.emails[i].read = true
          ids.push(Number(this.emails[i].id))
        }
      }
      const data = {
        "messageIds" : ids,
        "command" : "read",
        "read" : true
      };
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${url}/messages`, settings)
       .then(response => {
         if(response.ok){
           console.log(response);
         }
       })
    },
    markUnread() {
      const ids = []
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].selected) {
          this.emails[i].read = false
          ids.push(Number(this.emails[i].id))
        }
      }
      const data = {
        "messageIds" : ids,
        "command" : "read",
        "read" : false
      };
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${url}/messages`, settings)
       .then(response => {
         if(response.ok){
           console.log(response);
         }
       })
    },
    toggleStar(email) {
      email.starred = !email.starred
      const data = {
        "messageIds" : [email.id],
        "command" : "star",
        "star" : email.starred
      };
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${url}/messages`, settings)
       .then(response => {
         if(response.ok){
           console.log(response);
         }
       })
    },
    bulkSelect() {
      if (this.bulkCheckbox) {
        this.emails.forEach(email => this.$set(email, 'selected', false))
      } else {
        this.emails.forEach(email => this.$set(email, 'selected', true))
      }
    }
  }
}
</script>

<style>
</style>
