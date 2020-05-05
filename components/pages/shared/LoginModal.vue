<template>
  <div>
    <div
      class="modal opacity-0 pointer-events-none fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-center justify-center z-40"
    >
      <div
        class="modal-overlay absolute w-full h-full modal-bg z-30 overflow-hidden"
      />

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <!--          X-->
        </div>
        <div class="modal-content w-full">
          <div class="flex flex-wrap lg:flex-no-wrap justify-center">
            <div class="w-full w-1/2 img-log">
              <img src="/images/login.png" alt="login">
            </div>
            <div class="w-full m-1/2 bg-white-c mb-24 lg:mb-0 justify-center">
              <div class="modal-close w-full content-start cursor-pointer p-2 flex justify-end z-50">
                <p class="text-px-10 uppercase gray">
                  Cancel
                </p>
              </div>
              <div class="w-full h-32 items-center flex flex-col px-4 lg:px-8 py-10">
                <p class="text-px-13 green-dark">
                  <i class="fa fa-lock mb-4" /> Sign In
                </p>
                <login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../auth/Login'
export default {
  name: 'LoginModal',
  components: { Login },
  mounted () {
    const vm = this

    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', this.toggleModal)

    const closemodal = document.querySelectorAll('.modal-close')
    for (let i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', this.toggleModal)
    }

    document.onkeydown = function (evt) {
      evt = evt || window.event
      let isEscape = false
      if ('key' in evt) {
        isEscape = evt.key === 'Escape' || evt.key === 'Esc'
      } else {
        isEscape = evt.keyCode === 27
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
        vm.toggleModal()
      }
    }
  },
  created () {
    const vm = this
    this.$root.$on('logged', function () {
      vm.toggleModal()
    })
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
  }
}
</script>

<style lang="scss">
  .modal {
    transition: opacity 0.25s ease;
  }
  body.modal-active {
    overflow-x: hidden;
    overflow-y: hidden !important;
  }
  .img-log {
    width: 500px;
  }
</style>
