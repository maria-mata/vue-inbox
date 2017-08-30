<template>
  <div class="inbox">
    <toolbar :emails="emails"></toolbar>
    <messages :emails="emails"></messages>
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
  }
}
</script>

<style>
</style>
