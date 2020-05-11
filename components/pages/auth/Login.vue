<template>
  <img class="cursor-pointer" src="/images/login.svg" alt="login" @click="authenticate('google')">
</template>

<script>
export default {
  name: 'Login',
  methods: {
    authenticate (provider) {
      const vm = this
      this.$auth.authenticate(provider).then(function (response) {
        // console.log(response)
        vm.$axios.post('/social_login/google', { access_token: response.access_token })
          .then((response) => {
            vm.$store
              .dispatch('user/loginUser', response.data).then((_e) => {
                vm.$root.$emit('loggedIn')
                localStorage.removeItem('vue-authenticate.vueauth_token')
              })
          })
      })
    }
  }
}
</script>

<style scoped>

</style>
