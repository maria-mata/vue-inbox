<!-- The inbox holds the state of all components -->
<template>
  <div class="inbox">
    <toolbar :emails="emails" :bulkSelect="bulkSelect" :bulkCheckbox="bulkCheckbox"
    :halfCheckbox="halfCheckbox" :emptyCheckbox="emptyCheckbox" :markRead="markRead"
    :markUnread="markUnread" :unreadCount="unreadCount" :deleteEmail="deleteEmail"
    :applyLabel="applyLabel" :removeLabel="removeLabel" :singular="singular"></toolbar>
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
    singular() {
      return this.unreadCount == 1
    },
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
    }
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
      this.emails = this.emails.filter(email => !email.selected)
    },
    markRead() {
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].selected) {
          this.emails[i].read = true
        }
      }
    },
    markUnread() {
      for (let i = 0; i < this.emails.length; i++) {
        if (this.emails[i].selected) {
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
