<template>
  <div>
    <nav-bar />
    <div>
      <nuxt />
    </div>
    <foot-bar />
    <div class=" fixed bottom-0 right-0">
      <button class="rounded-t-lg bg-purple-c px-6 p-1 text-px-16-slab-light white">
        Feedback <i class="fa fa-share"></i>
      </button>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/layout/NavBar'
import FootBar from '../components/layout/FootBar'
export default {
  components: { NavBar, FootBar }
}
</script>
<style>

html {
  font-family: var(--font-family);
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: var(--background-color);
}
  .rounded-t-lg {
    border-radius: 20px 20px 0px 0px;
  }
</style>
