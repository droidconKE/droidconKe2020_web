<template>
  <div>
    <section class="w-full mt-14 ">
      <div class="bg-green-c w-full">
        <div class="w-full flex flex-wrap md:px-32 sm:px-10">
          <div class="container mx-auto">
            <div class="w-1/2 px-4 md:px-12 py-4">
              <h2 class="text-px-16-slab purple">
                Session details
              </h2>
            </div>
            <div class="w-1/2 px-2 md:px-0 flex-wrap flex justify-center items-center" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full md:px-32 sm:px-10">
      <div class="w-full container mx-auto flex flex-wrap px-4 md:px-12 py-0 md:py-3">
        <div class="w-full flex-wrap lg:w-4/12 flex border-r-0 lg:border-r border-green-200 pr-0 lg:pr-4">
          <div class="w-full py-4">
            <h4 class="text-px-16-slab purple">
              Speaker
            </h4>
          </div>
          <div class="w-full flex items-start flex text-center">
            <div class="w-24 h-24 md:w-32 md:h-32 p-2 md:p-4 flex-none bg-green-c-2 rounded">
              <img class="w-full p-0 rounded-full border-2 border-green-500" src="/icon.png" alt="Sunset in the mountains">
            </div>
            <div class="w-full text-left px-2 py-1 lg:py-4">
              <div class="text-px-13-slab-b purple">
                Greg Fawson
              </div>
              <p class="text-px-13 gray">
                COO/Chief Innovation Officer Droidcon Global
              </p>
              <p class="text-px-13 green-dark pt-1">
                <a href="#" target="_blank"><i class="fa fa-twitter" /> Greg Fawson</a>
              </p>
            </div>
          </div>
          <div class="w-full">
            <h4 class="black text-px-13-slab-b mt-2 md:mt-4">
              Bio:
            </h4>
            <p class="p gray mt-2 md:mt-4 mb-4 lg:mb-16">
              Been in the tech industry for over 20 years. Am passionate about developer communities, motivating people and building successful organizations. Proven track record in product development, business development, and nurturing mission critical strategic partner relationships. Have lived and worked in Germany for 10 years. Fluent in German and English.
            </p>
          </div>
        </div>
        <div class="w-full flex-wrap content-start items-start lg:w-6/12 px-0 lg:px-6 flex">
          <div class="w-full flex py-4">
            <h4 class="text-px-16-slab purple mr-0 md:mr-10">
              Session
            </h4>
            <p class="text-px-14 gray">
              <span class="mr-2">Level:</span> <span class="uppercase white text-px-10 button-black">#Beginner</span>
            </p>
          </div>
          <div class="w-full flex items-start flex-col">
            <h4 class="black text-px-13-slab-b">
              Keynote
            </h4>
            <p class="text-px-14 gray mt-2">
              Community on a Global Scale
            </p>
            <p class="text-px-13-slab-light gray ">
              9:00AM - 9:30AM | <span class="green-dark">ROOM 1</span>
            </p>
            <h6 class="text-px-13-slab-b font-bold black mt-4 md:mt-10">
              Session Description
            </h6>
            <p class="p gray mt-2">
              Been in the tech industry for over 20 years. Am passionate about developer communities, motivating people and building successful
            </p>

            <div class="w-full justify-center md:justify-start flex mt-4 md:mt-10">
              <a class="button-border-g text-px-13-b black-persist mr-4 lg:mr-6" href="#">share <i class="fa fa-share" /></a>
              <button class="button-purple text-px-13-b white">
                Session Feedback <i class="fa fa-share" />
              </button>
            </div>
          </div>
        </div>
        <div class="w-full flex-wrap items-start justify-center lg:w-2/12 flex py-4">
          <label
            for="toogleAAA"
            class="flex items-center cursor-pointer pr-6"
          >
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input id="toogleAAA" type="checkbox" class="hidden">
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
            >Save Session
            </div>
          </label>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Slug',
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#session-feedback-modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
  }
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
