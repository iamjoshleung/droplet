<template>
<div class="card">
  <div class="card-block">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-text">{{ message }}</p>
    <a v-if="type === 'pop'" :href="btnLink" class="btn btn-primary" @click="showModal">{{ btnText }}</a>
    <a v-else :href="btnLink" class="btn btn-primary">{{ btnText }}</a>
  </div>
</div>
</template>

<script>
  export default {
    props: ['title', 'message', 'btnText', 'btnLink', 'type'],
    methods: {
      showModal: function(e) {
        e.preventDefault()
        this.$emit('show')
      }
    }
  }
</script>

<style></style>