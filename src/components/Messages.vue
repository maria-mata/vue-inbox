<template>
  <div class="container messages">
    <Message v-for="email in emails" :email="email" key="" :toggleSelect="toggleSelect" :bulkSelect='bulkSelect'></Message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'messages',
  props: ['emails', 'toggleSelect', 'bulkSelect'],
  components: {
    Message
  }
}
</script>
