<template>
  <div class="container">
    <div class="row toolbar">
      <b-button-toolbar>
        <div class="col-md-12">
          <p class="pull-right">
            <b-badge class="badge">2</b-badge>
            unread messages
          </p>
          <b-btn class="btn btn-default">
            <icon v-if="!bulkSelected" name="square-o"></icon>
            <icon v-if="bulkSelected" name="check-square-o"></icon>
          </b-btn>

          <b-btn class="btn btn-default">
            Mark As Read
          </b-btn>

          <b-btn class="btn btn-default">
            Mark As Unread
          </b-btn>

          <b-form-select v-model="selected" :options="options" class="form-control label-select">
            <div>Selected: <strong>{{ selected }}</strong></div>
          </b-form-select>

          <b-form-select v-model="selected2" :options="options2" class="form-control label-select">
            <div>Selected: <strong>{{ selected2 }}</strong></div>
          </b-form-select>

          <b-btn class="btn btn-default">
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
  props: ['emails'],
  data() {
    return {
        bulkSelected: false, // needs to loop though checkboxes
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
