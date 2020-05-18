<template>
  <div>
    <div v-if="update" class="container mx-auto flex fixed bottom-0 z-50 justify-center">
      <div class="p-2 button-purple text-px-14-slab black items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex absolute z-50 mb-10 bottom-0 fixed" role="alert">
        <span class="flex rounded-full uppercase px-2 py-1 bg-purple-lighter-c black mr-3">Update</span>
        <span class="font-semibold mr-2 text-left white flex-auto">There are new updates, <a class="underline" href="#" @click.prevent="reload">click to update</a></span>
      </div>
    </div>
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
    <div class="bg-indigo-900 absolute text-center py-4 lg:px-4">
      <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
        <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
      </div>
    </div>
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
  data () {
    return {
      update: false
    }
  },
  async mounted () {
    const vm = this
    this.$root.$on('feedbackSent', function () {
      vm.toggleModal()
    })
    this.$bus.$on('loggedInn', function () {
      vm.$toaster.warning('Kindly login to proceed with action')
      // vm.$root.$emit('test1')
    })

    const workbox = await window.$workbox
    if (workbox) {
      workbox.addEventListener('installed', (event) => {
        if (event.isUpdate) {
          // if (confirm('New content is available!. Click OK to refresh')) {
          //   window.location.reload()
          // }
          this.update = true
        }
      })
    }
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#feedback-modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    },
    reload () {
      window.location.reload()
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
