<template>
  <div>
    <nav-bar />
    <div>
      <nuxt />
    </div>
    <foot-bar />
    <div class=" fixed bottom-0 right-0">
      <button class="rounded-t-lg bg-purple-c px-6 p-1 text-px-13-slab-light white" @click="toggleModal()">
        Feedback <i class="fa fa-share" />
      </button>
    </div>
    <login-modal />
    <feedback />
    <filter-modal />
    <notification-prompt />
  </div>
</template>
<script>
import NavBar from '../components/layout/NavBar'
import FootBar from '../components/layout/FootBar'
import LoginModal from '../components/pages/shared/LoginModal'
import Feedback from '../components/pages/shared/Feedback'
import FilterModal from '../components/pages/session/Filter'
import NotificationPrompt from '../components/pages/shared/NotificationsPrompt'
export default {
  components: { NotificationPrompt, FilterModal, Feedback, LoginModal, NavBar, FootBar },
  mounted () {
    const vm = this
    this.$root.$on('feedbackSent', function () {
      vm.toggleModal()
    })
    this.$bus.$on('loggedInn', function () {
      vm.$toaster.warning('Kindly login to proceed with action')
      // vm.$root.$emit('test1')
    })
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#feedback-modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
  }
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
.modal {
  transition: opacity 0.25s ease;
}
body.modal-active {
  overflow-x: hidden;
  overflow-y: hidden !important;
}
</style>
