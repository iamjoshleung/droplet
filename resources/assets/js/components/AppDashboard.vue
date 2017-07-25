<template>
  <div>
    <header-top :url="url"></header-top>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-4">
          <navbox title="Request Files" message="Invite anyone to upload files to your Droplet, even if they don’t have an account." btnText="Create a file request" btnLink="#" type="pop" v-on:show="showRequestModal" />

          <vodal :show="isRequestModal" animation="zoom" @hide="isRequestModal = false">
              <div>A vue modal with animations.</div>
          </vodal>
        </div>
        <div class="col-12 col-md-4">
          <navbox title="Send Files" message="Upload files and share them with anyone, even if they don't have an account" btnText="Create a file sharing request" type="pop" btnLink="#" v-on:show="showSendModal" />

          <vodal :show="isSendModal" animation="zoom" @hide="isSendModal = false">
              <div>A vue modal with animations. Send</div>
          </vodal>
        </div>
        <div class="col-12 col-md-4">
          <navbox title="History" message="View all the requests you have made, and download the files of any request." btnText="View file request history" type="normal" :btnLink="url.history" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["url"],
    data () {
      return {
        isRequestModal: false,
        isSendModal: false
      }
    },
    methods: {
      showRequestModal: function (e) {
        this.isRequestModal = true
      },
      showSendModal: function (e) {
        this.isSendModal = true
      }
    }
  }
</script>

<style>


  .container-fluid {
    margin-top: 2rem;
  }
</style>
