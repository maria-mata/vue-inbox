<template>
  <div class="container messages">
    <!-- Email List -->
    <Message v-for="email in emailList" :email="email" key=""></Message>
  </div>
</template>

<script>
import Message from './Message'
import seeds from '../data/seeds'

export default {
  name: 'messages',
  components: {
    Message
  },
  data () {
    return {
      emailList: seeds
    }
  }
}
</script>
