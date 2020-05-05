<template>
  <section class="w-full mt-14">
    <div class="bg-green-c w-full">
      <div class="w-full flex flex-wrap md:px-32 sm:px-10">
        <div class="w-1/2 px-4 md:px-12 py-4">
          <h2 class="text-px-16-slab purple">
            Sessions
          </h2>
        </div>
        <div class="w-1/2 px-4 md:px-0 flex-wrap flex justify-center items-center">
          <label
            for="toogleAA"
            class="flex items-center cursor-pointer pr-6"
          >
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input id="toogleAA" type="checkbox" class="hidden">
              <!-- line -->
              <div
                class="toggle__line w-6 h-3 bg-purple-lighter-c rounded-full shadow-inner"
              />
              <!-- dot -->
              <div
                class="toggle__dot absolute w-4 h-4 bg-black-c rounded-full shadow inset-y-0 left-0"
              />
            </div>
            <!-- label -->
            <div
              class="pl-2 text-px-13 black"
            >My Sessions
            </div>
          </label>
          <a class="text-px-13 black" href="#">Filter <i class="fa fa-filter purple" /></a>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap md:px-32 sm:px-10 mt-2 md:mt-4">
      <div class="w-full flex flex-wrap px-4 md:px-12 py-4">
        <div class="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 border-r-0 lg:border-r-2 border-green-200 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start pb-4 lg:pb-0 sticky " style="top: 50px">
          <div class="w-4/12 px-3 py-1 lg:w-full bg-yellow-c rounded-tl-lg rounded-bl-lg border border-green-200 cursor-pointer">
            <h4 class="text-px-16-slab purple">
              06 <small class="text-px-13 black capitalize">Day 1</small>
            </h4>
          </div>
          <div class="w-4/12 px-3 py-1 lg:w-full rounded-tl-lg rounded-bl-lg border border-green-200 cursor-pointer bg-white-c-2">
            <h4 class="text-px-16-slab purple">
              06 <small class="text-px-13 green-dark capitalize">Day 1</small>
            </h4>
          </div>
          <div class="w-4/12 px-3 py-1 lg:w-full rounded-tl-lg rounded-bl-lg border border-green-200 cursor-pointer bg-white-c-2">
            <h4 class="text-px-16-slab purple">
              06 <small class="text-px-13 green-dark capitalize ">Day 1</small>
            </h4>
          </div>
        </div>
        <div class="w-full flex-wrap flex lg:w-11/12 space-y-6 mb-2 lg:mb-10">
          <div class="flex w-full px-0 lg:px-2">
            <div class="w-2/12 h-20 flex items-center justify-center text-right hidden lg:grid">
              <h3 class="text-px-16-slab purple">
                8:00 <br>AM
              </h3>
            </div>
            <div class="w-full lg:w-10/12 flex">
              <div class="h-20 w-32  lg:h-20 lg:w-32 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('/images/speakers/arrive.png')" title="Woman holding a mug" />
              <div class="h-auto w-full lg:h-20 shadow-sm rounded-lg px-4 py-1 flex flex-col justify-between">
                <div class="flex flex-wrap items-center">
                  <div class="w-10/12">
                    <div class="text-px-13-slab-b black">
                      Can coffee make you a better developer?
                    </div>
                    <p class="text-px-13 gray">
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                  <div class="w-2/12 flex items-center justify-center">
                    <div><i class="fa fa-star-o gray" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full px-0 lg:px-2">
            <div class="w-2/12 h-32 flex items-center justify-center text-right hidden lg:grid">
              <h3 class="text-px-16-slab purple">
                9:00 <br>AM
              </h3>
            </div>
            <div class="w-full lg:w-10/12 flex">
              <nuxt-link to="/sessions/mine" class="h-32 w-32  lg:h-32 lg:w-32 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('/images/speakers/AlexKoller.png')" title="Woman holding a mug" />
              <div class="h-auto w-full lg:h-32 shadow-sm rounded-lg px-4 py-1 flex flex-col justify-between">
                <div class="flex flex-wrap items-center">
                  <nuxt-link to="/sessions/mine" class="w-10/12">
                    <div class="text-px-13-slab-b black">
                      Can coffee make you a better developer?
                    </div>
                    <p class="text-px-13 gray">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque
                    </p>
                    <p class="text-px-13-slab gray pt-1">
                      9:00AM - 9:30AM | ROOM 1
                    </p>
                    <p class="text-px-13 green-dark pt-1">
                      <i class="fa fa-android" /> Greg Fawson
                    </p>
                  </nuxt-link>
                  <div class="w-2/12 flex items-center justify-center">
                    <div><i class="fa fa-star gray cursor-pointer" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full px-0 lg:px-2">
            <div class="w-2/12 h-32 flex items-center justify-center text-right hidden lg:grid">
              <h3 class="text-px-16-slab purple">
                10:00 <br>AM
              </h3>
            </div>
            <div class="w-full lg:w-10/12 flex">
              <nuxt-link to="/sessions/mine" class="h-32 w-32  lg:h-32 lg:w-32 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('/images/speakers/MichaelBukachi.png')" title="Woman holding a mug" />
              <div class="h-auto w-full lg:h-32 shadow-sm rounded-lg px-4 py-1 flex flex-col justify-between">
                <div class="flex flex-wrap items-center">
                  <nuxt-link to="/sessions/mine" class="w-10/12">
                    <div class="text-px-13-slab-b black">
                      Can coffee make you a better developer?
                    </div>
                    <p class="text-px-13 gray">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque
                    </p>
                    <p class="text-px-13-slab gray pt-1">
                      10:00AM - 10:30AM | ROOM 1
                    </p>
                    <p class="text-px-13 green-dark pt-1">
                      <i class="fa fa-android" /> Greg Fawson
                    </p>
                  </nuxt-link>
                  <div class="w-2/12 flex items-center justify-center">
                    <div><i class="fa fa-star-o gray cursor-pointer" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full px-0 lg:px-2">
            <div class="w-2/12 h-32 flex items-center justify-center text-right hidden lg:grid">
              <h3 class="text-px-16-slab purple">
                11:00 <br>AM
              </h3>
            </div>
            <div class="w-full lg:w-10/12 flex">
              <nuxt-link to="/sessions/mine" class="h-32 w-32  lg:h-32 lg:w-32 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('/images/speakers/CarolWarugongo.png')" title="Woman holding a mug" />
              <div class="h-auto w-full lg:h-32 shadow-sm rounded-lg px-4 py-1 flex flex-col justify-between">
                <div class="flex flex-wrap items-center">
                  <nuxt-link to="/sessions/mine" class="w-10/12">
                    <div class="text-px-13-slab-b black">
                      Can coffee make you a better developer?
                    </div>
                    <p class="text-px-13 gray">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque
                    </p>
                    <p class="text-px-13-slab gray pt-1">
                      10:00AM - 10:30AM | ROOM 1
                    </p>
                    <p class="text-px-13 green-dark pt-1">
                      <i class="fa fa-android" /> Greg Fawson
                    </p>
                  </nuxt-link>
                  <div class="w-2/12 flex items-center justify-center">
                    <div><i class="fa fa-star-o gray cursor-pointer" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
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
