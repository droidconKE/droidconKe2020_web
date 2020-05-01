<template>
  <nav class="flex items-center justify-between flex-wrap nav-bg p-3 md:px-5 fixed w-full z-10 top-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6 lg:pl-24">
      <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
        <img height="36" src="/images/website.png" alt="logo">
      </a>
    </div>

    <div class="block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>

    <div id="nav-content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 lg:pr-24 md:px-5">
      <div class="w-8/12 flex-grow lg:flex">
        <ul class="list-reset lg:flex justify-end  flex-1 items-center">
          <li class="mr-3 black">
            <a class="inline-block py-2 px-4 text-px-16 active no-underline " href="#"> <i class="fa fa-home" /> Home</a>
          </li>
          <li class="mr-3">
            <a class="py-2 px-4 inline-block text-px-16 black no-underline nav-link" href="#"><i class="fa fa-bell" /> Sessions</a>
          </li>
          <li class="mr-3">
            <a class="py-2 px-4 inline-block no-underline black text-px-16 nav-link " href="#"><i class="fa fa-star" /> About</a>
          </li>
          <li class="mr-3">
            <a class="inline-block no-underline  py-2 px-4 black text-px-16 nav-link" href="#"><i class="fa fa-star" /> Sponsors</a>
          </li>
        </ul>
      </div>

      <div class="w-4/12 flex-grow  lg:flex justify-end">
        <toggle-theme />
        <div class=" px-4 md:px-0 relative inine-block" @click="toggleDropDown" @keydown.enter="isVisible = !isVisible">
          <span class="cursor-pointer inline-flex items-center justify-between p-1 transition-all duration-500 rounded-full h-10 w-10 border bg-dark-green-c">
            <img src="/images/svg/maasai_male.svg" alt="icon">

            <!--            <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">-->
            <!--              <path :class="{ 'rotate-180': isVisible }" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />-->
            <!--            </svg>-->
          </span>
          <transition
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="-translate-y-3 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-3 opacity-0"
          >
            <div v-if="isVisible" id="userMenu" class=" rounded shadow-md mt-2 absolute mt-12 top-0 lg:right-0 min-w-full z-30" @mouseleave="isVisible = false">
              <div class="absolute top-0 lg:right-0 lg:mr-10 w-2 h-2 mt-1 origin-center transform rotate-45 translate-x-5 -translate-y-2 pinn pointer-events-none" />
              <ul class="list-reset">
                <li>
                  <div class="flex-wrap flex p-2 items-center">
                    <div class="w-1/2 flex-wrap flex border-r border-bg-black-1">
                      <p><small class="logg">Logged in as</small></p>
                      <p class="name">
                        John Mwendwa
                      </p>
                    </div>
                    <div class="w-1/2 flex-wrap flex justify-center">
                      <a href="#"><i class="fa fa-sign-out green-dark" /> <span class="name">Logout</span></a>
                    </div>
                  </div>
                </li>
                <li><hr class="border-t mx-2 border-bg-black-1"></li>
                <li>
                  <a href="#" class="px-4 py-2 block session-link hover:bg-gray-800 no-underline hover:no-underline"><i class="fa fa-star" /> My Sessions</a>
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
import ToggleTheme from './ToggleTheme'
export default {
  name: 'NavBar',
  components: { ToggleTheme },
  data () {
    return {
      isVisible: false,
      navVisible: false
    }
  },
  mounted () {
    document.getElementById('nav-toggle').onclick = function () {
      document.getElementById('nav-content').classList.toggle('hidden')
    }
  },
  methods: {
    toggleDropDown () {
      this.isVisible ? this.isVisible = false : this.isVisible = true
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
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0px;
      font-weight: lighter;
      color: #FFFFFF;
      opacity: 1;
    }
    .name {
      text-align: left;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0px;
      font-weight: normal;
      color: #FFFFFF;
      opacity: 1;
    }
    .logg {
      text-align: left;
      font-size: 10px;
      line-height: 13px;
      font-weight: lighter;
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
