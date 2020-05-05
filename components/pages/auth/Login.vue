<template>
  <img class="cursor-pointer" src="/images/login.svg" alt="login" @click="login()">
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login () {
      this.$store.commit('login', 'user')
      this.$root.$emit('logged')
    }
  }
}
</script>

<style scoped>

</style>
