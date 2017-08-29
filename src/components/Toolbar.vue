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

        <b-form-select class="form-control label-select">
          <option value="null">Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </b-form-select>

        <b-form-select class="form-control label-select">
          <option value="null">Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
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
  name: 'toolbar'
}
</script>
