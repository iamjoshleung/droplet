<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Droplet</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" :href="url.dashboard">Dashboard <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="url.request">File Request</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="url.send">Send Files</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="url.history">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="url.userAll">User Management</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data: function () {
      return {
        url: {
          dashboard: laroute.route('dashboard'),
          request: laroute.route('requests.get'),
          send: laroute.route('requests.send'),
          history: laroute.route('history'),
          userAll: laroute.route('users.all')
        }
      }
    }
  }
</script>

<style></style>
