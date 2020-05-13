<template>
  <nav class="flex  items-center justify-between flex-wrap nav-bg p-2 md:px-5 fixed w-full z-10 top-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6 lg:pl-24">
      <n-link class="text-white no-underline hover:text-white hover:no-underline" to="/">
        <img v-if="!$store.getters.isDarkTheme" class="w-32" src="/images/website.png" alt="logo">
        <img v-else class="w-32" src="/images/website-dark.png" alt="logo dark">
      </n-link>
    </div>

    <div class="block lg:hidden">
      <button
        id="nav-toggle"
        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        @click="toggleNav()"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <toggle-theme />

    <div
      id="nav-content"
      :class="['w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 lg:pr-24 md:px-5 ', navVisible ? '' : 'hidden']"
    >
      <div class="w-8/12 flex-grow lg:flex">
        <ul class="list-reset lg:flex justify-end  flex-1 items-center">
          <li class="mr-3 black">
            <n-link class="inline-block py-2 px-4 text-px-13 no-underline black nav-link" to="/">
              <i class="fa fa-home" /> Home
            </n-link>
          </li>
          <li class="mr-3">
            <n-link class="py-2 px-4 inline-block text-px-13 black no-underline nav-link" to="/sessions">
              <i class="fa fa-bell" /> Sessions
            </n-link>
          </li>
          <li class="mr-3">
            <n-link class="py-2 px-4 inline-block no-underline black text-px-13 nav-link " to="/about">
              <i class="fa fa-star" /> About
            </n-link>
          </li>
          <li class="mr-3">
            <n-link class="inline-block no-underline  py-2 px-4 black text-px-13 nav-link" to="/sponsors">
              <i class="fa fa-star" /> Sponsors
            </n-link>
          </li>
        </ul>
      </div>

      <div class="w-4/12 flex-grow  lg:flex justify-end">
        <!--        theme-->
        <div
          v-if="!isAuthenticated"
          id="login-modal"
          class="px-4 md:px-0 relative inine-block"
          @click="toggleModal()"
        >
          <span
            class="cursor-pointer inline-flex items-center justify-between p-1 transition-all duration-500 rounded-full h-8 w-8 p-2 border bg-dark-green-c"
          >
            <img src="/images/svg/lock.svg" alt="icon">
          </span>
        </div>
        <div
          v-else
          class="px-4 md:px-0 relative inine-block"
          @keydown.enter="isVisible = !isVisible"
        >
          <div @click="toggleDropDown">
            <span
              v-if="user.avatar === null"
              class="cursor-pointer inline-flex items-center justify-between p-1 transition-all duration-500 rounded-full h-8 w-8 border bg-dark-green-c"
            >
              <img src="/images/svg/maasai_male.svg" alt="icon">
            </span>
            <span
              v-else
              class="cursor-pointer inline-flex items-center justify-between transition-all duration-500 rounded-full h-8 w-8 border bg-dark-green-c"
            >
              <img class="rounded-full" :src="user.avatar" onerror="this.onerror=null;this.src='/images/svg/maasai_male.svg';" alt="avatar icon">
            </span>
          </div>
          <transition
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="-translate-y-3 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-3 opacity-0"
          >
            <div
              v-if="isVisible"
              id="userMenu"
              class=" rounded shadow-md mt-2 absolute mt-12 top-0 lg:right-0 min-w-full z-30"
              @mouseleave="isVisible = false"
            >
              <div
                class="absolute top-0 lg:right-0 lg:mr-10 w-2 h-2 mt-1 origin-center transform rotate-45 translate-x-5 -translate-y-2 pinn pointer-events-none"
              />
              <ul class="list-reset">
                <li>
                  <div class="flex-wrap flex p-2 items-center">
                    <div class="w-7/12 flex-wrap flex border-r border-bg-black-1">
                      <p><small class="logg">Logged in as</small></p>
                      <p class="name">
                        {{ user.name }}
                      </p>
                    </div>
                    <div class="w-5/12 flex-wrap flex justify-center">
                      <logout />
                    </div>
                  </div>
                </li>
                <li>
                  <hr class="border-t mx-2 border-bg-black-1">
                </li>
                <li>
                  <a href="#" class="px-4 py-3 block session-link hover:bg-gray-800 no-underline hover:no-underline" @click.prevent="mySessions"><i
                    class="fa fa-star mr-2"
                  /> My Sessions</a>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Logout from '../pages/auth/Logout'
import ToggleTheme from './ToggleTheme'

export default {
  name: 'NavBar',
  components: { Logout, ToggleTheme },
  data () {
    return {
      isVisible: false,
      navVisible: false
    }
  },
  computed: {
    ...mapGetters('user', [
      'isAuthenticated'
    ]),
    user () {
      return this.$store.state.user.currentUser
    }
  },
  watch: {
    $route () {
      console.log('route changed', this.$route)
      if (this.isVisible) {
        this.isVisible = false
      }
      if (this.navVisible) {
        this.toggleNav()
      }
    }
  },
  // mounted () {
  //   document.getElementById('nav-toggle').onclick = function () {
  //     document.getElementById('nav-content').classList.toggle('hidden')
  //   }
  // },
  methods: {
    toggleNav () {
      this.navVisible ? this.navVisible = false : this.navVisible = true
    },
    toggleDropDown () {
      this.isVisible ? this.isVisible = false : this.isVisible = true
    },
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#modal-login')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    },
    mySessions () {
      this.$store.$router.push('/sessions?my_sessions=true')
    }
  }
}
</script>

<style lang="scss" scoped>
  #nav-content {
    animation: 1s appear;
    margin: auto;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .nav-link:hover {
    color: var(--purple-color);
  }

  .active {
    color: var(--purple-color);
  }

  .pinn {
    background-color: #191D1D;
  }

  #userMenu, {
    background-color: #191D1D;

    .session-link {
      text-align: left;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0px;
      font-weight: normal;
      color: #FFFFFF;
      opacity: 1;
    }

    .name {
      text-align: left;
      font-size: 13px;
      line-height: 17px;
      letter-spacing: 0px;
      font-weight: normal;
      color: #FFFFFF;
      opacity: 1;
    }

    .logg {
      text-align: left;
      font-size: 9px;
      line-height: 13px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #68DEA4;
      opacity: 1;
    }

    .border-bg-black-1 {
      border-color: #000;
    }
  }

  .list-reset {
    width: 230px;
  }
</style>
