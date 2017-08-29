<!--  This file to be imported into MESSAGES component -->
<template>
  <div class="container email">
    <div class="row message" :class="{read: isRead, unread: !isRead, selected: isSelected}">
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input class="checkbox" type="checkbox" v-model="checked"/>
          </div>
          <div class="col-xs-2">
            <icon v-if="starred" class="star" name="star"></icon>
            <icon v-if="!starred" class="star" name="star-o"></icon>
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
  props: ['email'],
  data() {
    return {
      isRead: this.email.read,
      isSelected: this.email.selected,
      checked: this.email.selected,
      starred: this.email.starred,
      labels: this.email.labels
    }
  }
}
</script>
