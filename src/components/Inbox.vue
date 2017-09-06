<!-- The inbox holds the state of all components -->
<template>
  <div class="inbox">
    <toolbar :emails="emails" :bulkSelect="bulkSelect" :bulkCheckbox="bulkCheckbox"
    :halfCheckbox="halfCheckbox" :emptyCheckbox="emptyCheckbox" :markRead="markRead"
    :markUnread="markUnread" :unreadCount="unreadCount" :deleteEmail="deleteEmail"
    :applyLabel="applyLabel" :removeLabel="removeLabel"></toolbar>
    <messages :emails="emails" :toggleSelect="toggleSelect" :bulkCheckbox="bulkCheckbox"
    :toggleStar="toggleStar"></messages>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import Messages from './Messages'
import Compose from './Compose'
// import seeds from '../data/seeds'

const url = 'http://localhost:8082/api'

export default {
  components: {
    Messages,
    Toolbar,
    Compose
  },
  data() {
    return {
      emails: []
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
      return this.emails.reduce((acc, email) => {
        if (email.read == false) {
          acc++
        }
        return acc
      }, 0)
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
    applyLabel(label) {
      if (label != null) {
        for (let i = 0; i < this.emails.length; i++) {
          let hasLabel = this.emails[i].labels.some(el => el == label)
          if (this.emails[i].selected && !hasLabel) {
            this.emails[i].labels.push(label)
          }
        }
      }
    },
    removeLabel(label) {
      if (label != null) {
        for (let i = 0; i < this.emails.length; i++) {
          let hasLabel = this.emails[i].labels.some(el => el == label)
          if (hasLabel && this.emails[i].selected) {
            let index = this.emails[i].labels.indexOf(label)
            this.emails[i].labels.splice(index, 1)
          }
        }
      }
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
    },
    toggleSelect(email) {
      email.selected = !email.selected
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
