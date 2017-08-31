<!-- The inbox holds the state of all components -->
<template>
  <div class="inbox">
    <toolbar :emails="emails" :bulkSelect="bulkSelect"></toolbar>
    <messages :emails="emails" :toggleSelect="toggleSelect" :bulkSelect="bulkSelect"></messages>
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
      emails: seeds,
    }
  },
  methods: {
    bulkSelect() {
      this.emails = this.emails.map(email => email.selected = true)
      return this.emails
      console.log('bulk select clicking');
    },
    toggleSelect(email) {
      email.selected = !email.selected
    }
  }
}
</script>

<style>
</style>
