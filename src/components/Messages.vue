<template>
  <div class="container messages">
    <Message v-for="email in emails" :email="email" key=""></Message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'messages',
  props: ['emails'],
  components: {
    Message
  }
}
</script>
