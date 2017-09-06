<template>
  <div class="container messages">
    <Message v-for="email in emails" :email="email" key=""
    :toggleStar="toggleStar"></Message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'messages',
  props: ['emails', 'toggleStar'],
  components: {
    Message
  }
}
</script>
