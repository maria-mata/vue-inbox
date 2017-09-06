<template>
  <div class="container">
    <div class="row toolbar">
      <b-button-toolbar>
        <div class="col-md-12">
          <p class="pull-right">
            <b-badge class="badge">{{ unreadCount }}</b-badge>
            unread <span v-if="unreadCount != 1">messages</span>
            <span v-if="unreadCount == 1">message</span>
          </p>
          <b-btn class="btn btn-default" v-on:click="bulkSelect">
            <icon v-if="bulkCheckbox" name="check-square-o"></icon>
            <icon v-if="halfCheckbox" name="minus-square-o"></icon>
            <icon v-if="emptyCheckbox" name="square-o"></icon>
          </b-btn>

          <b-btn v-on:click="markRead" class="btn btn-default" :disabled="emptyCheckbox">
            Mark As Read
          </b-btn>

          <b-btn v-on:click="markUnread" class="btn btn-default" :disabled="emptyCheckbox">
            Mark As Unread
          </b-btn>

          <b-form-select v-model="selected" v-bind:change="applyLabel(selected)" :options="options"
          :disabled="emptyCheckbox" class="form-control label-select" >
            <div>Selected: <strong>{{ selected }}</strong></div>
          </b-form-select>

          <b-form-select v-model="selected2" v-bind:change="removeLabel(selected2)" :options="options2"
          :disabled="emptyCheckbox" class="form-control label-select">
            <div>Selected: <strong>{{ selected2 }}</strong></div>
          </b-form-select>

          <b-btn v-on:click="deleteEmail" class="btn btn-default" :disabled="emptyCheckbox">
            <icon name="trash-o"></icon>
          </b-btn>
        </div>
      </b-button-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  props: ['emails', 'bulkSelect', 'bulkCheckbox', 'halfCheckbox', 'emptyCheckbox',
  'markRead', 'markUnread', 'unreadCount', 'deleteEmail', 'applyLabel',
  'removeLabel'],
  data() {
    return {
        selected: null,
        options: [
          {value: null, text: 'Apply Label'},
          {value: 'dev', text: 'dev'},
          {value: 'personal', text: 'personal'},
          {value: 'gschool', text: 'gschool'}
        ],
        selected2: null,
        options2: [
          {value: null, text: 'Remove Label'},
          {value: 'dev', text: 'dev'},
          {value: 'personal', text: 'personal'},
          {value: 'gschool', text: 'gschool'}
        ]
      }
    }
}
</script>
