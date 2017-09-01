<!-- The inbox holds the state of all components -->
<template>
  <div class="inbox">
    <toolbar :emails="emails" :bulkSelect="bulkSelect" :bulkCheckbox="bulkCheckbox"
    :markRead="markRead" :markUnread="markUnread" :unreadCount="unreadCount"
    :deleteEmail="deleteEmail"></toolbar>
    <messages :emails="emails" :toggleSelect="toggleSelect" :bulkCheckbox="bulkCheckbox"></messages>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import Messages from './Messages'
import seeds from '../data/seeds'

export default {
  components: {
    Messages,
    Toolbar
  },
  data() {
    return {
      emails: seeds
    }
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
      return this.emails.every(email => email.selected == true)
    }
  },
  methods: {
    deleteEmail() {
      this.emails = this.emails.filter(email => {
        return !email.selected
      },[])
    },
    markRead() {
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].selected == true) {
          this.emails[i].read = true
        }
      }
    },
    markUnread() {
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].selected == true) {
          this.emails[i].read = false
        }
      }
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
