<!--  This file to be imported into MESSAGES component -->
<template>
  <div class="container email">
    <div class="row message" :class="{read: this.email.read, unread: !this.email.read, selected: checked}">
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input v-on:click="toggleSelect" class="checkbox" type="checkbox" v-model="checked"/>
          </div>
          <div class="col-xs-2">
            <a v-on:click="unstarEmail"><icon v-if="this.email.starred" class="star" name="star"></icon></a>
            <a v-on:click="starEmail"><icon v-if="!this.email.starred" class="star" name="star-o"></icon></a>
          </div>
        </div>
      </div>
      <div class="col-xs-11">
        <b-badge variant="warning" class="label label-warning" v-for="label in labels" key="">{{label}}</b-badge>
        <a href="#">
          {{email.subject}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'email',
  props: ['email', 'toggleSelect', 'bulkSelect'],
  methods: {
    starEmail(event) {
      this.starred = true;
    },
    unstarEmail(event) {
      this.starred = false;
    }
  },
  data() {
    return {
      checked: this.email.selected,
      labels: this.email.labels
    }
  }
}
</script>
