<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        algovision
      </h1>
      <longest-increasing-subsequence></longest-increasing-subsequence>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LongestIncreasingSubsequence from '../components/LongestIncreasingSubsequence.vue'

export default Vue.extend({
  components: { LongestIncreasingSubsequence },})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 150;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 100;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
