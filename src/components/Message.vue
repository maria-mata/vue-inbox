<!--  This file to be imported into MESSAGES component -->
<template>
  <div class="container email">
    <div class="row message" :class="{read: this.email.read, unread: !this.email.read, selected: email.selected}">
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input class="checkbox" type="checkbox" v-model="email.selected"/>
          </div>
          <div class="col-xs-2">
            <a v-on:click="toggleStar(email)"><icon v-if="email.starred" class="star" name="star"></icon>
            <icon v-if="!email.starred" class="star" name="star-o"></icon></a>
          </div>
        </div>
      </div>
      <div class="col-xs-11">
        <b-badge variant="warning" class="label label-warning" v-for="label in this.email.labels" key="">{{label}}</b-badge>
        <a href="#">{{email.subject}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'email',
  props: ['email', 'toggleStar']
}
</script>
