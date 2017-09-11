<template>
  <div class="container">
    <div v-if="showCompose" class="compose">
      <b-form v-on:submit.prevent="sendEmail" class="form-horizontal well">
        <div class="form-group">
          <div class="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div class="form-group">
          <label for="subject" class="col-sm-2 control-label">Subject</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" v-model="composeForm.subject" placeholder="Enter a subject" name="subject">
          </div>
        </div>
        <div class="form-group">
          <label for="body" class="col-sm-2 control-label">Body</label>
          <div class="col-sm-8">
            <textarea name="body" v-model="composeForm.body" class="form-control"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" class="btn btn-primary">
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showCompose', 'sendEmail', 'composeForm']
}
</script>
