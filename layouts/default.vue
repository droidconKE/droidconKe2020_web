<template>
  <div>
    <nav-bar />
    <div>
      <nuxt />
    </div>
    <foot-bar />
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

h1,h2,h3,h4,h5,h6,p {
  color: var(--primary-color) ;
}
</style>
