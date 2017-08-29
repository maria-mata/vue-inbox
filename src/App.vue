<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <messages></messages>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'

export default {
  name: 'app',
  components: {
    Messages,
    Toolbar
  }
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 1.5em;
  color: #2c3e50;
  margin-top: 60px;
  }

  .message {
  margin-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  border-bottom: 1px solid #efefef;
  }

  .message a {
  color: black;
  }

  .message a:hover, .message a:active, .message a:focus {
  text-decoration: none;
  }

  .message + .message {
  border-top: 1px solid #efefef;
  }

  .message.read {
  background: #efefef;
  }

  .message.unread {
  font-weight: bold;
  }

  .message.selected {
  background: #ffffcc;
  }

  .message:hover {
  margin-left: -3px;
  border-left: 3px solid #ccc;
  }

  .message-body {
  background: #ccc;
  margin-left: 0;
  margin-bottom: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  }

  .toolbar {
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: .1em;
  }

  .toolbar .label-select {
  width: auto;
  display: inline;
  }

  .toolbar select,
  .toolbar button,
  .toolbar a,
  .toolbar .badge {
  margin-right: .5em;
  margin-bottom: .5em;
  }

  footer.spacer {
  margin-bottom: 20em;
  }

  .label {
  margin-right: .5em;
  }

  .close {
  cursor: pointer;
  }

  .star {
    margin-left: 1em;
    margin-right: 2em;
  }

  .checkbox {
    margin-left: 2em;
  }

  .badge {
    font-size: 1em;
  }

</style>
