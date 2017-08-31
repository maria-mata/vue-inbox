<!-- The inbox holds the state of all components -->
<template>
  <div class="inbox">
    <toolbar :emails="emails" :bulkSelect="bulkSelect" :bulkCheckbox="bulkCheckbox"></toolbar>
    <messages :emails="emails" :toggleSelect="toggleSelect"></messages>
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
      bulkCheckbox: false, // might need to re-define??
    }
  },
  methods: {
    toggleSelect(email) {
      email.selected = !email.selected
    },
    bulkSelect() {
      for (var i = 0; i < this.emails.length; i++) {
        if (this.bulkCheckbox) {
          this.$set(this.emails[i], 'selected', false)
        } else {
          this.$set(this.emails[i], 'selected', true)
        }
      }
      this.bulkCheckbox = !this.bulkCheckbox
    }
  }
}
</script>

<style>
</style>
