<template>
  <div class="container--grid">
    <sidebar />
    <contentArea />
  </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import contentArea from '../components/contentArea.vue'
export default {
  name: 'Home',
  components: {
    sidebar,
    contentArea
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/base/_base.scss";
@import "@/assets/scss/pages/_home.scss";
</style>

