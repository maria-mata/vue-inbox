<template>
  <div class="container messages">
    <Message v-for="email in emails" :email="email" key=""
    :toggleSelect="toggleSelect"></Message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'messages',
  props: ['emails', 'toggleSelect'],
  components: {
    Message
  }
}
</script>
