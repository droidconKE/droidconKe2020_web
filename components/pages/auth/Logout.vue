<template>
  <a href="#" @click.prevent="logout"><i class="fa fa-sign-out green-dark" /> <span class="name">Logout</span></a>
</template>
<script>
export default {
  name: 'Logout',
  methods: {
    logout () {
      this.$axios.post('/logout', { }).then((response) => {
        this.$store.dispatch('user/logOut')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .name {
    text-align: left;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0px;
    font-weight: normal;
    color: #FFFFFF;
    opacity: 1;
  }
</style>
