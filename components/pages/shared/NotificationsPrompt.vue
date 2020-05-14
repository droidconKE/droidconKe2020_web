<template>
  <div>
    <div
      id="notification-modal"
      class="modal opacity-0 pointer-events-none fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-start justify-start z-40"
    >
      <div
        class="modal-overlay-1 absolute w-full h-full modal-bg z-30 overflow-hidden"
      />

      <section class="w-full md:px-56 px-4 mt-10 z-40 flex flex-col items-start container mx-auto">
        <div class="bg-black-c p-8 justify-center items-center">
          <p class="text-px-14-b green-dark">DroidconKe want to show notifications!</p>
          <div class="flex flex-wrap w-full justify-between items-center mt-6">
            <button class="button-yellow black text-px-13-b px-6">
              Allow
            </button>
            <button class="button-border-g black text-px-13-b px-6">
              Block
            </button>
          </div>
        </div>
        <div class="ml-2 flex lg:ml-32 items-end">
          <div>
            <img class="w-64" src="/images/notif.svg" alt="notif">
          </div>
          <div class="flex -ml-10 w-40">
            <p class="text-px-14-b white">Allow Notifications to get regular updates</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationPrompt',
  mounted () {
    this.toggleModal()
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modals = document.querySelectorAll('#notification-modal')
      for (let i = 0; i < modals.length; i++) {
        modals[i].classList.toggle('opacity-0')
        modals[i].classList.toggle('pointer-events-none')
      }
      body.classList.toggle('modal-active')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
