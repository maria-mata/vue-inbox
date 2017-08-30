<template>
  <div class="container">
    <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <b-badge class="badge">2</b-badge>
          unread messages
        </p>
        <b-button class="btn btn-default">
          <icon name="check-square-o"></icon>
        </b-button>

        <b-button class="btn btn-default">
          Mark As Read
        </b-button>

        <b-button class="btn btn-default">
          Mark As Unread
        </b-button>

        <b-form-select v-model="selected" :options="options" class="form-control label-select">
          <div>Selected: <strong>{{ selected }}</strong></div>
        </b-form-select>

        <b-form-select v-model="selected2" :options="options2" class="form-control label-select">
          <div>Selected: <strong>{{ selected2 }}</strong></div>
        </b-form-select>

        <b-button class="btn btn-default">
          <icon name="trash-o"></icon>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
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
