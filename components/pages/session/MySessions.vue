<template>
  <label
    for="toogleAA"
    class="flex items-center cursor-pointer pr-8"
  >
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input id="toogleAA" type="checkbox" :checked="sessionsMine" class="hidden" @click="mySessions">
      <!-- line -->
      <div
        class="toggle__line w-6 h-3 bg-purple-lighter-c rounded-full shadow-inner"
      />
      <!-- dot -->
      <div
        class="toggle__dot absolute w-4 h-4 bg-black-c-inverse rounded-full shadow inset-y-0 left-0"
      />
    </div>
    <!-- label -->
    <div
      class="pl-2 text-px-13 black"
    >My Sessions
    </div>
  </label>
</template>

<script>
export default {
  name: 'MySessions',
  computed: {
    sessionsMine () {
      return this.$store.state.sessionsMine
    }
  },
  methods: {
    mySessions () {
      if (!this.sessionsMine) {
        this.$axios.get(`/events/${process.env.EVENT_SLUG}/bookmarked_schedule?grouped=true`).then((response) => {
          this.$store.commit('updateSessions', response.data.data)
          this.$store.commit('updateSessionsMineStatus', true)
        })
      } else {
        this.$store.commit('updateSessionsMineStatus', false)
        this.$root.$emit('allSessions')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .toggle__dot {
    top: -.25rem;
    left: -.25rem;
    transition: all 0.3s ease-in-out;
  }
  .toggle__line {
    margin-top: -2px;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: var(--purple-color);
  }
</style>
